export namespace Messaging {
  /**
   * The JavaScript application communicates to the server using a Messaging.Client object.
   * <p>
   * Other programming languages,
   * <a href="/clients/java/doc/javadoc/com/ibm/micro/client/mqttv3/MqttClient.html"><big>Java</big></a>,
   * <a href="/clients/c/doc/html/index.html"><big>C</big></a>.
   * <p>
   * Most applications will create just one Client object and then call its connect() method,
   * however applications can create more than one Client object if they wish.
   * In this case the combination of host, port and clientId attributes must be different for each Client object.
   * <p>
   * The send, subscribe and unsubscribe methods are implemented as asynchronous JavaScript methods
   * (even though the underlying protocol exchange might be synchronous in nature).
   * This means they signal their completion by calling back to the application,
   * via Success or Failure callback functions provided by the application on the method in question.
   * Such callbacks are called at most once per method invocation and do not persist beyond the lifetime
   * of the script that made the invocation.
   * <p>
   * In contrast there are some callback functions <i> most notably onMessageArrived</i>
   * that are defined on the Messaging.Client object.
   * These may get called multiple times, and aren't directly related to specific method invocations made by the client.
   *
   * @name Messaging.Client
   *
   * @constructor
   * Creates a Messaging.Client object that can be used to communicate with a Messaging server.
   *
   * @param {string} host the address of the messaging server, as a DNS name or dotted decimal IP address.
   * @param {number} port the port number in the host to connect to.
   * @param {string} clientId the Messaging client identifier, between 1 and 23 characters in length.
   *
   * @property {string} host <i>read only</i> the server's DNS hostname or dotted decimal IP address.
   * @property {number} port <i>read only</i> the server's port.
   * @property {string} clientId <i>read only</i> used when connecting to the server.
   * @property {function} onConnectionLost called when a connection has been lost,
   * after a connect() method has succeeded.
   * Establish the call back used when a connection has been lost. The connection may be
   * lost because the client initiates a disconnect or because the server or network
   * cause the client to be disconnected. The disconnect call back may be called without
   * the connectionComplete call back being invoked if, for example the client fails to
   * connect.
   * A single response object parameter is passed to the onConnectionLost callback containing the following fields:
   * <ol>
   * <li>errorCode
   * <li>errorMessage
   * </ol>
   * @property {function} onMessageDelivered called when a message has been delivered.
   * All processing that this Client will ever do has been completed. So, for example,
   * in the case of a Qos=2 message sent by this client, the PubComp flow has been received from the server
   * and the message has been removed from persistent storage before this callback is invoked.
   * Parameters passed to the onMessageDelivered callback are:
   * <ol>
   * <li>Messaging.Message that was delivered.
   * </ol>
   * @property {function} onMessageArrived called when a message has arrived in this Messaging.client.
   * Parameters passed to the onMessageArrived callback are:
   * <ol>
   * <li>Messaging.Message that has arrived.
   * </ol>
   */
  export class Client {
    constructor(host: string, clientId: string);
    constructor(host: string, port: number, clientId: string);

    connect(connectOptions: ConnectOptions): void;

    subscribe(filter: string, subscribeOptions: Object): void;

    unsubscribe(filter: string, unsubscribeOptions: Object): void;

    send(message: Message): void;

    disconnect(): void;

    getTraceLog(): void;

    startTrace(): void;

    stopTrace(): void;

    isConnected(): boolean;

    onConnectionLost(responseObject: ResponseObject): void;

    onMessageDelivered(): void;

    onMessageArrived(message: Message): void;
  }

  export class Message {
    constructor(payload: any);

    payloadString: string;
    payloadBytes: Array<any>;
    destinationName: string;
    qos: number;
    retained: boolean;
    duplicate: boolean;
  }

  export class ResponseObject {
    invocationContext?: any;
    errorCode: number;
    errorMessage?: string;
  }

  export class WireMessage {
    encode(): ArrayBuffer;

    decodeMessage(input: ArrayBuffer, pos: number): Array<any>;

    writeUint16(input: number, buffer: ArrayBuffer, offset: number): number;

    writeString(input: string, utf8Length: number, buffer: ArrayBuffer, offset: number): number;

    readUint16(buffer: ArrayBuffer, offset: number): number;

    encodeMBI(num: number): Array<any>;

    UTF8Length(input: string): number;

    stringToUTF8(input: string, output: ArrayBuffer, start: number): ArrayBuffer;

    parseUTF8(input: ArrayBuffer, offset: number, length: number): string;
  }

  /**
   * Connect this Messaging client to its server.
   *
   * @name Messaging.Client#connect
   * @function
   * @param {Object} [connectOptions] attributes used with the connection.
   * <p>
   * Properties of the connect options are:
   * @config {number} [timeout] If the connect has not succeeded within this number of seconds, it is deemed to have failed.
   *                            The default is 30 seconds.
   * @config {string} [userName] Authentication username for this connection.
   * @config {string} [password] Authentication password for this connection.
   * @config {Messaging.Message} [willMessage] sent by the server when the client disconnects abnormally.
   * @config {Number} [keepAliveInterval] the server disconnects this client if there is no activity for this
   *                number of seconds. The default value of 60 seconds is assumed if not set.
   * @config {boolean} [cleanSession] if true(default) the client and server persistent state is deleted on successful connect.
   * @config {boolean} [useSSL] if present and true, use an SSL Websocket connection.
   * @config {object} [invocationContext] passed to the onSuccess callback or onFailure callback.
   * @config {function} [onSuccess] called when the connect acknowledgement has been received from the server.
   * A single response object parameter is passed to the onSuccess callback containing the following fields:
   * <ol>
   * <li>invocationContext as passed in to the onSuccess method in the connectOptions.
   * </ol>
   * @config {function} [onFailure] called when the connect request has failed or timed out.
   * A single response object parameter is passed to the onFailure callback containing the following fields:
   * <ol>
   * <li>invocationContext as passed in to the onFailure method in the connectOptions.
   * <li>errorCode a number indicating the nature of the error.
   * <li>errorMessage text describing the error.
   * </ol>
   * @config {Array} [hosts] If present this set of hostnames is tried in order in place
   * of the host and port paramater on the construtor. The hosts and the matching ports are tried one at at time in order until
   * one of then succeeds.
   * @config {Array} [ports] If present this set of ports matching the hosts.
   * @throws {InvalidState} if the client is not in disconnected state. The client must have received connectionLost
   * or disconnected before calling connect for a second or subsequent time.
   */
  export class ConnectOptions {
    timeout: number;
    userName: string;
    password: string;
    willMessage: Messaging.Message;
    keepAliveInterval: number;
    cleanSession: boolean;
    useSSL: boolean;
    invocationContext: Object;
    onSuccess: (data: { invocationContext: Object }) => {};
    onFailure: (data: { invocationContext: Object, errorCode: number, errorMessage: string }) => {};
    hosts: Array<string>;
    ports: Array<number>;
  }
}
