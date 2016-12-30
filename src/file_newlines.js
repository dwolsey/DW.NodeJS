// NodeJS
// Add all numbers from the command line together and output the total
// Usage: "Node addnumbers.js x1 x2 x3 x4 ..."

var fs = require("fs");

var buffer = fs.readFileSync("C:\\Users\\darrenw\\AppData\\Roaming\\npm\\node_modules\\learnyounode\\node_apidoc\\fs.html");

var newLines = buffer.toString().split("\n");

console.log("Number of newlines = ", newLines.length);