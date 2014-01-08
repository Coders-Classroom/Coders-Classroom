
// Dependencies
var sys = require("sys");
var exec = require("child_process").exec;
//var prompt = require("prompt");
var yesno = require('yesno');
var pkg = require("./package.json");

// Display Banner
console.log();
console.log("=====");
console.log("===== "+pkg.name+", "+pkg.version);
console.log("===== "+pkg.description);
console.log("=====");
console.log();

// Start Prompt
prompt.start();

// Helpers
function hasWhiteSpace(s) {
      return s.indexOf(' ') >= 0;
}

// Check for White Space in Path, Issue #11.
if ( 
        !require('nodegit') && // Checking if nodegit is successfully installed
        hasWhiteSpace(__dirname) // if nodegit is not installed, verify the installation path does not contain spaces
        ) {
    console.error("Your installation directory has white space characters.");
    console.log("See issue at https://github.com/Glavin001/Coders-Classroom/issues/11");
    console.log("We recommend changing your path from '"+__dirname+"' to '"+__dirname.replace(/\s/g, "_")+"' that users '_' underscoes instead of spaces.");
    console.log();

    process.exit(1);
}

// NPM Install
var npmInstall = function(package, callback) {
    exec('npm install '+(package||""), function(error, stdout, stderr) {
        callback(error,stdout,stderr);
    });
};

// Bower Install
var bowerInstall = function(package, callback) {
    exec('bower install '+(package||""), function(error, stdout, stderr) {
        callback(error,stdout,stderr);
    });
};

// Install Dependencies
yesno.ask("Would you like to install all node dependencies with 'npm install'?", true, function(npmOk) {
    yesno.ask("Would you like to install all bower dependencies with 'npm install'?", true, function(bowerOk) {
        if (npmOk) {
            npmInstall(null, function(error, stdout, stderr) {
                if (error) {
                    console.log(error, stderr);
                } else {
                    console.log("NPM successfully installed dependencies.");
                }
            });
        }
        if (bowerOk) {
            bowerInstall(null, function(error, stdout, stderr) {
                if (error) {
                    console.log(error, stderr);
                } else {
                    console.log("Bower successfully installed dependencies.");
                }
            });
        }
    });
});

console.log();

