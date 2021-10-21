// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  autoLogin: false,
  // username: 'yhdzz',
  // username: 'jxdzz',
  // password: '123456',
  username: 'developer',
  password: 'developer',
  serverUrl: 'http://localhost:6031/pm/control/',
  serverHost: 'http://localhost:6031/',
  activemqServer: 'activemq.jr.com',
  mqttPrefix: 'sys:',
  showPopUp: true, // 配置系统是否使用弹出层风格，默认使用页面跳转风格
};
