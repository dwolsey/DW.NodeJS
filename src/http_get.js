var http = require('http')

http.get('http://www.google.com.au/', function(response) {
    console.log('Response Received: ' + response.statusCode)

    response.on('data', function(data) {
        console.log(data.toString())
    })

    response.on('error', function(err) {
        console.log('alert! ' + err.toString())
    })
})

