// NodeJS
// Read a file asynchronously and output the number of newlines in the callback function


var fs = require("fs")

fs.readFile("C:\\Users\\darrenw\\AppData\\Roaming\\npm\\node_modules\\learnyounode\\node_apidoc\\fs.html",
    function(err, buffer) {
        if (!err) {
            var newLines = buffer.toString().split("\n")

            console.log("Number of newlines = ", newLines.length)
        } else {
            console.log(err)
        }
    }
)

console.log("This line should display first because the readFile is not blocking and will output when it's finished.")

