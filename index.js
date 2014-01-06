// Dependencies
var GitLab = require("gitlab").ApiV3;


// Credentials 
var url = "http://git.cs.smu.ca";
var token = "rjfcc6XGMqnxxUUreFsD";

// Test
var gitlab = new GitLab({
    url: url,
    token: token,
    verbose: true
});

gitlab.projects.all(function(projects) {
    console.log(projects);    
});

gitlab.users.all(function(users) {
    console.log(users);
}); 
