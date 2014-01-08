#!/usr/bin/env node

// Dependencies
var sys = require("sys");
var exec = require("child_process").exec;
var pkg = require("./package.json");

// Display Banner
console.log();
console.log("=====");
console.log("===== "+pkg.name+", "+pkg.version);
console.log("===== "+pkg.description);
console.log("=====");
console.log();

// Helpers
function hasWhiteSpace(s) {
      return s.indexOf(' ') >= 0;
}

// Check for White Space in Path, Issue #11.
try {
    require('nodegit') // Checking if nodegit is successfully installed
} catch (e) {
    // nodegit not found    
    if ( 
            hasWhiteSpace(__dirname) // if nodegit is not installed, verify the installation path does not contain spaces
            ) {
        console.error("Your installation directory has white space characters.");
        console.log("See issue at https://github.com/Glavin001/Coders-Classroom/issues/11");
        console.log("We recommend changing your path from: ")
        console.log("> '"+__dirname+"'");
        console.log("to: ");
        console.log("> '"+__dirname.replace(/\s/g, "_")+"'");
        console.log("such that you use underscores ('_') instead of spaces.");
        console.log();

        process.exit(1);
    }
}

// NPM Install
var npmInstall = function(package, callback) {
    exec('npm install '+(package||""), function(error, stdout, stderr) {
        callback(error,stdout,stderr);
    });
};

// Bower Install
var bowerInstall = function(package, callback) {
    try {
        require('bower') // Checking if bower is successfully installed
        
        var bowerCmd = "./node_modules/bower/bin/bower";
        exec(bowerCmd+' install '+(package||""), function(error, stdout, stderr) {
            callback(error,stdout,stderr);
        });
    } catch (e) {
        callback(e, null, "Bower not installed.");
    }
};

// Install Dependencies
console.log("Installing NPM dependencies.");
npmInstall(null, function(error, stdout, stderr) {
    if (error) {
        console.log(error, stderr);
        console.log();
        console.log("For more information, run `npm install` again on your own.");
    } else {
        console.log("=> NPM successfully installed dependencies.");
        console.log();
        console.log("Installing Bower dependencies.");
        bowerInstall(null, function(error, stdout, stderr) {
            if (error) {
                console.log(error, stderr);
                console.log();
                console.log("For more information, run `bower install` again on your own.");
            } else {
                console.log("=> Bower successfully installed dependencies.");
                console.log();
            }
        });

    }
});

