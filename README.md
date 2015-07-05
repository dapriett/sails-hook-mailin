This provides a sails hook integrating [Mailin](http://mailin.io/) within your app.  Mailin is an smtp server that listens for emails and parses them as json.

[![NPM version][npm-image]][npm-url] [![Dependency status][david-dm-image]][david-dm-url]

## Install
```sh
$ npm install sails-hook-mailin --save
```

## Usage

### 1. configure .sailsrc

```json
{
  "generators": {
    "modules": {
      "mailin-api": "sails-hook-mailin/generator"
    }
  }
}
```

### 2. install sails.js extension
```sh
$ sails generate mailin-api
```

This create the Mailin Service event handler, and config.  The default service name is `MailinService`, to use a different name instead use
```sh
$ sails generate mailin-api MyCustomMailinService
```

## Configuration
Simply modify the generated `config/mailin.js` to modify the options
```js
module.exports.mailin = {
  // Enable/Disable mail server
	enable: true,
	
	// Mail Port
	port: 2500,
	
	// Service to handle incoming mail 
	handlerService: MailinService
}
```

## Service Handler
Modify generated service handle, add methods for events you want to listen for

```js
// api/services/MailinService.js
module.exports = {

  // Validate email recipient
  validateRecipient: function (connection, email, callback) {
    if(email != "dprietti@test.com") return callback(new Error("Invalid Recipient"));

    callback();
  },


  // Message was received and parsed.
  message: function (connection, data, content) {
    console.log("New Message Received - Subject: " + data.subject);
  }

};
```

For all possible event methods, see [Mailin Events](https://github.com/Flolagale/mailin#events)
