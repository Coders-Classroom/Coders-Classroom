// Dependencies
var nconf = require('nconf');
var feathers = require('feathers');
var path = require('path');
var pkg = require("../package.json");
var git = require('nodegit');

//
// Setup nconf to use (in-order):
//   1. Command-line arguments
//   2. Environment variables
//   3. A file located at 'path/to/config.json'
//
nconf.argv()
   .env()
   .file('custom', { file: path.resolve(__dirname, '../config.json') })
   .file('default', { file: path.resolve(__dirname, '../config.default.json') });

// Properties
var contentDir = path.resolve(__dirname, '../', nconf.get('contentDirectory') );
console.log('Content Directory: ', contentDir);

// Configure
var app = feathers();
app = app.configure(feathers.socketio(function(io) {

  io.enable('browser client minification');  // send minified client
  io.enable('browser client etag');          // apply etag caching logic based on version number
  io.enable('browser client gzip');          // gzip the file
  io.set('log level', 1);                    // reduce logging

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
    //console.log(io);
}));

// Display Ember.js App
app.use(feathers.static(path.resolve(__dirname, '../.tmp')));
app.use(feathers.static(path.resolve(__dirname, '../app')));
//app.use(feathers.static(path.join(__dirname, '../dist'))); // Does not work???

// Add Services
require("./services/")(app, path.join("/api", "v1"));

// Start server
app.listen(nconf.get('port'));
console.log('Express server started on port', nconf.get('port'));

// Export server.
module.exports = app;

/*
// Test `nodegit`
var cloneDir = path.join(contentDir, './clones');
console.log(cloneDir);
git.Repo.clone("https://github.com/nodegit/nodegit.git", cloneDir, null, function(error, repo) {
  if (error) throw error;

  repo.getCommit('59b20b8d5c6ff8d09518454d4dd8b7b30f095ab5', function(error, commit) {
    if (error) throw error;

    commit.getEntry('README.md', function(error, entry) {
      if (error) throw error;

      entry.getBlob(function(error, blob) {
        if (error) throw error;

        console.log(entry.name(), entry.sha(), blob.size() + 'b');
        console.log('========================================================\n\n');
        var firstTenLines = blob.toString().split('\n').slice(0, 10).join('\n');
        console.log(firstTenLines);
        console.log('...');
      });
    });
  });
});
*/

