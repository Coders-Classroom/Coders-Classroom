//
var GitLab = require("gitlab").ApiV3;
var path = require('path');

// Credentials 
var url = "http://git.cs.smu.ca";
var token = "rjfcc6XGMqnxxUUreFsD";

// Test
var gitlab = new GitLab({
    url: url,
    token: token,
    verbose: true
});
/*
gitlab.projects.all(function(projects) {
    console.log(projects);    
});

gitlab.users.all(function(users) {
    console.log(users);
}); 
*/
module.exports = function(app, parentPath) {

    var Projects = {
      // Return all projects from this service
      find: function(params, callback) {
        console.log(params);
        gitlab.projects.all(function(projects) {
            console.log(projects);
            callback(null, projects);
        });
      },

      // 
      get: function(id, params, callback) {
        console.log(id, params)
        gitlab.projects.show(id, function(project) {
            console.log(project);
            callback(null, project);
        });
      },
      
      // Create a new Projects with the given data
      create: function(data, params, callback) {
        data.id = this.todos.length;
        this.todos.push(data);
        
        callback(null, data);
      }
    };

    app.use(path.join(parentPath, '/projects'), Projects);
    app.use('/projects', Projects);

};