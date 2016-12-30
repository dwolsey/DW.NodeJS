// NodeJS
// Read the contents of a directory and display the file with a given extension
// Arg1: Path, Arg2: File Extension
// Eg. node filter_files.js c:\ .exe

var fs = require('fs')
var path = require('path')

var argPath = process.argv[2]
var argExtension = process.argv[3]

fs.readdir(argPath, function(err, files) {
    if (!err) {
        var filteredFiles = files.filter(function(element) {
            return path.extname(element) === argExtension ? element : null
        })

        console.log(filteredFiles.toString())
    }
})