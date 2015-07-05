/**
 * Module dependencies
 */

var util = require('util');
var _ = require('lodash');


/**
 * sails-generate-mailin
 *
 * Usage:
 * `sails generate mailin`
 *
 * @description Generates a mailin
 * @help See http://links.sailsjs.org/docs/generators
 */

module.exports = {

  /**
   * `before()` is run before executing any of the `targets`
   * defined below.
   *
   * This is where we can validate user input, configure default
   * scope variables, get extra dependencies, and so on.
   *
   * @param  {Object} scope
   * @param  {Function} cb    [callback]
   */

  before: function (scope, cb) {

    if (!scope.rootPath) {
      return cb( new Error('Missing rootPath') );
    }

    scope.handlerService = (scope.args.length) ? scope.args[0] : "MailinService";
    scope.serviceFile = scope.handlerService + ".js";

    cb();
  },



  /**
   * The files to generate.
   * @type {Object}
   */
  targets: {
    './api/services/:serviceFile': { template: 'api/services/MailinService.js' },

    './config/mailin.js': { template: 'config/mailin.js' },
  },

  templatesDirectory: require('path').resolve(__dirname, './templates')
};
