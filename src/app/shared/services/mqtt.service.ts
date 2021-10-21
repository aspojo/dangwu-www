import {DatePipe} from '@angular/common';
import {environment} from '@environments';
import {EventEmitter} from '@angular/core';

declare var Messaging;

export class MqttService {
  static unReadMessageNum = 0;
  static mqttClient: ChatWorker;

  // 销毁mqtt
  public static destroyMqttClient() {
    if (MqttService.mqttClient) {
      console.log(`销毁mqtt：${MqttService.mqttClient.client.clientId}`);

      MqttService.mqttClient.stop();
      delete MqttService.mqttClient.client;
      MqttService.mqttClient = null;
    }
  }

  public static getMqttClient(userData) {
    if (!MqttService.mqttClient) {
      const time = new DatePipe('en').transform(new Date(), 'ddhhmmss');
      MqttService.mqttClient = new ChatWorker(environment.mqttPrefix + userData.userLoginId + time);
    }
    return MqttService.mqttClient;
  }
}

export class ChatWorker {
  host = environment.activemqServer;
  port = '61614';
  destination = environment.mqttPrefix + 'send.to.server';

  connectEvent = new EventEmitter<any>();
  connectFailureEvent = new EventEmitter<any>();
  messageArrivedEventMap: any = {};
  connectionLostEvent = new EventEmitter<any>();
  client: any;
  hasInitialed = false;

  constructor(private clientId: string) {
  }

  // 添加订阅
  public addTopic(topic) {
    this.messageArrivedEventMap[topic] = [];
  }

  // 添加消息订阅
  public addEventListener(topic, eventFun) {
    let eventFunList = this.messageArrivedEventMap[topic];
    if (!eventFunList) {
      eventFunList = [];
      this.messageArrivedEventMap[topic] = eventFunList;
    }
    eventFunList.push(eventFun);
  }

  // 取消消息订阅
  public removeEventListener(topic, eventFun) {
    const eventFunList: Array<any> = this.messageArrivedEventMap[topic];
    eventFunList.splice(eventFunList.indexOf(eventFun), 1);
  }

  // 发送消息
  public sendMessage(msg) {
    const message = new Messaging.Message(msg);
    message.destinationName = this.destination;
    console.log(message);
    this.client.send(message);
  }


  public init() {
    if (MqttService.mqttClient.hasInitialed) {
      // 若已经连接mqtt，先断开连接
      MqttService.mqttClient.stop();
    }
    this.hasInitialed = true;
    console.log(`初始化mqtt：${this.clientId} ${this.host}${this.port}`);
    this.client = new Messaging.Client(this.host, Number(this.port), this.clientId);

    // 订阅主题
    const onConnect = (frame) => {
      Object.keys(this.messageArrivedEventMap).forEach((topic) => {
        console.log('订阅主题' + topic);
        this.client.subscribe(topic);
      });
      this.connectEvent.emit(frame);
    };

    /*接收消息 当消息抵达*/
    this.client.onMessageArrived = (message) => {
      if (this.messageArrivedEventMap) {
        /*输出消息*/
        console.log(message.payloadString);
        // 调用接收消息的监听器
        this.messageArrivedEventMap[message.destinationName.replace('/', '.')].forEach((fun) => {
          // 通知所有订阅该主题的订阅者。
          fun(message);
        });
      }
    };
    this.client.onConnectionLost = (responseObject) => {
      if (responseObject.errorCode !== 0) {
        this.connectionLostEvent.emit(responseObject);
        console.error(this.client.clientId + ': ' + responseObject.errorCode + '\n');
      }
    };

    this.client.connect({
      useSSL: window.location.protocol === 'https:',
      onSuccess: onConnect, onFailure: (failure) => {
        console.error(failure.errorMessage);
      }
    });
  }

  // 停止接受消息
  public stop() {
    try {
      this.client.disconnect();
    } catch (e) {
      console.log('%c 断开mqtt连接失败，错误：' + e.toString(), 'color:red');
    }
  }
}
