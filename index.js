/**
 * Module dependencies
 */

var _ = require('lodash');
var path = require('path');

/**
 * mailin.io Hook
 *
 * Integration with the mailin API.
 *
 * For a full list of available mailin options see:
 * http://mailin.io/doc
 *
 * @param  {App} sails
 * @return {Object}
 * @hook
 */

module.exports = function Mailin (sails) {

	var self;
	var mailin;

	// @see https://github.com/Flolagale/mailin#events
	var MAILIN_EVENTS = ["startData", "data", "dataReady", "authorizeUser", "validateSender", "senderValidationFailed", "validateRecipient", "recipientValidationFailed", "close", "startMessage", "message"];

	return {

		/**
		 * Default configuration
		 * @type {Object}
		 */
		defaults: {
			__configKey__: {
				enable: false,
				handlerService: 'MailinService',
				disableWebhook: true
			}
		},


		/**
		 * @param  {Function} cb
		 */
		initialize: function (cb) {
			self = this;

			if(!sails.config[self.configKey].enable) return cb();

			var hServiceName = sails.config[self.configKey].handlerService;
			var handler = _.find(_.values(sails.services), {
				'identity': hServiceName.toLowerCase()
			});

			if(!handler) {
				sails.log.warn("Mailin hook disabled - unable to locate handler in sails services: " + hServiceName);
				return cb();
			}

			mailin = require('mailin');
			mailin.start(sails.config[self.configKey]);

			_.each(MAILIN_EVENTS, function(event) {
				if(_.isFunction(handler[event])) mailin.on(event, handler[event]);
			});

			cb();
		}
	};
};
