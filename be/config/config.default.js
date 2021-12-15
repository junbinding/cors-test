/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1639473271793_3890';

  // add your middleware config here
  config.middleware = [ 'cors' ];

  config.security = {
    enable: false,
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
  };

  config.cors = {
    origin: [ 'http://live.cc' ],
    allowMethods: [ 'POST', 'GET', 'PUT', 'PATCH', 'DELETE' ],
    allowHeaders: [ 'Origin,Content-Type,Cookie,X-CSRF-TOKEN,Accept,Authorization,X-XSRF-TOKEN,t' ],
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
