module.exports = {

  // DATA stream is opened by the client.
  // startData: function (connection) { },

  // E-mail data chunk is passed from the client.
  // data: function (connection, chunk) { },

  // Client has finished passing e-mail data. callback returns the queue id to the client.
  // dataReady: function (connection, callback) { },

  // Emitted if requireAuthentication option is set to true.
  // Callback has two parameters: function(err, success) where success
  // is a Boolean and should be true, if user is authenticated successfully.
  // authorizeUser: function (connection, username, password, callback) { },

  // Emitted if validateSender listener is set up.
  // validateSender: function (connection, email, callback) { },

  // Emitted if a sender DNS validation failed.
  // senderValidationFailed: function (connection, email, callback) { },

  // Emitted if validateRecipients listener is set up.
  // validateRecipient: function (connection, email, callback) { },

  // Emitted if a recipient DNS validation failed.
  // recipientValidationFailed: function (connection, email, callback) { )

  // Emitted when the connection to a client is closed.
  // close: function (connection) { },

  // Connection with the Mailin smtp server is initiated.
  // startMessage: function (connection) { },

  // Message was received and parsed.
  message: function (connection, data, content) {
    console.log("New Message Received!");
  }

};
