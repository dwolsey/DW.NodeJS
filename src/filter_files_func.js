// NodeJS
// Read the contents of a directory and display the file with a given extension
// Arg1: Path, Arg2: File Extension
// Eg. node filter_files.js c:\ .exe

module.exports = function (args) {

    var fs = require('fs')
    var path = require('path')

    if (args.length < 4) {
        console.log('Missing arguments.')
        return
    }

    var argPath = args[2]
    var argExtension = args[3]

    fs.readdir(argPath, function(err, files) {
        if (!err) {
            var filteredFiles = files.filter(function(element) {
                return path.extname(element) === argExtension ? element : null
            })

            console.log(filteredFiles.toString())
        }
    })
}




