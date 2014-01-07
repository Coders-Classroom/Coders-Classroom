// Dependencies
var feathers = require('feathers');
var app = feathers();
var path = require('path');
var pkg = require("../package.json");

// Configure
app = app.configure(feathers.socketio(function(io) {
    /*
  io.enable('browser client minification');  // send minified client
  io.enable('browser client etag');          // apply etag caching logic based on version number
  io.enable('browser client gzip');          // gzip the file
  io.set('log level', 1);                    // reduce logging
*/
  // enable all transports (optional if you want flashsocket support, please note that some hosting
  // providers do not allow you to create servers that listen on a port different than 80 or their
  // default port)
    io.set('transports', [
      'websocket'
      , 'flashsocket'
      , 'htmlfile'
      , 'xhr-polling'
      , 'jsonp-polling'
    ]);

    io.on('connection', function(socket) {
        console.log("User Connected.");

        socket.emit('news', { hello: 'world' });
        socket.on('my other event', function (data) {
            console.log(data);
        });
    });

    /*
    io.set('authorization', function (handshakeData, callback) {
        // Authorize using the /users service
        app.lookup('users').find({
            username: handshakeData.username,
            password: handshakeData.password
        }, callback);
    });
    */
    console.log(io);
}));
// Add Services
require("./services/")(app, path.join("/api", "v1"));

// Start server
app.listen(8080);

// Export server.
module.exports = app;
