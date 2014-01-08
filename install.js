
// Dependencies
var prompt = require("prompt");

// Start Prompt
prompt.start();
console.log();

// Helpers
function hasWhiteSpace(s) {
      return s.indexOf(' ') >= 0;
}

// Check for White Space in Path, Issue #11.
if ( hasWhiteSpace(__dirname) ) {
    console.error("Your installation directory has white space characters.");
    console.log("See issue at https://github.com/Glavin001/Coders-Classroom/issues/11");
    console.log("We recommend changing your path from '"+__dirname+"' to '"+__dirname.replace(/\s/g, "_")+"' that users '_' underscoes instead of spaces.");

}

console.log();
