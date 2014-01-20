// Dependencies
var nconf = require('nconf');
var GitLab = require("gitlab").ApiV3;
var GitHub = require("github");
var git = require("nodegit");
var fs = require('fs');
var path = require('path');
var url = require('url');
var exec = require('child_process').exec;
var util = require('util');

// Credentials 
var url = "http://git.cs.smu.ca";
var token = "rjfcc6XGMqnxxUUreFsD";

// Test
var gitlab = new GitLab({
    url: url,
    token: token,
    verbose: true
});


// -------------------------------

function Project (namespace, projectName) {
    var self = this;

    // === Variables
    self.namespace = namespace || null;
    self.name = projectName || null;
    self.repo = null;

    // === Functions

    var cloneDirectory = function() {
        return path.join(
            nconf.get('contentDirectory'), 
            './clones', 
            namespace, 
            projectName
        );
    };

    var projectFromRepo = function(repo) {
      return (function(proj, r) {
        proj.repo = r;
        return proj;
      })(self, repo);
    };

    self.create = function(callback) {
        
    };

    self.pull = function(remoteURL, callback) 
    {

        var cloneDir = cloneDirectory();

        console.log(cloneDir);
        //var cloneUrl = "https://github.com/Coders-Classroom/Coders-Classroom.git";
        
        // Check if already clones
        fs.exists(cloneDir, function(exists) {

            if (exists) {
               // Already Cloned == Pull

               exec(
                util.format('git --git-dir="%s"/.git pull', 
                    cloneDir), function(error, stdout, stderr) {

                    console.log(error, stdout, stderr);

                    git.Repo.open(path.resolve(cloneDir,'.git'), function(error, repo) {
                        //if (error) throw error;
                        console.log(error, repo);

                        return callback && callback(error, projectFromRepo(repo));

                    });

               });

            } else {
                // Not Cloned == Clone
                git.Repo.clone(remoteURL, cloneDir, null, function(error, repo) {
                    //if (error) throw error;
                    console.log(error, repo);

                    return callback && callback(error, projectFromRepo(repo));

                  /*
                  repo.getMaster(function(error, commit) {
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
                    */

                });
            }
        });
    };

    self.push = function() {

    };

    return self;

};

// -------------------------------

module.exports = Project;
