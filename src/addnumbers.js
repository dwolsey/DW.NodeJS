// NodeJS
// Add all numbers from the command line together and output the total
// Usage: "Node addnumbers.js x1 x2 x3 x4 ..."

var total = 0;
var summary = "";

for (var i=2; i < process.argv.length; i++)
{
    total += parseInt(process.argv[i]);

    summary += process.argv[i];

    if (i < process.argv.length - 1)
        summary += " + ";

}

console.log("== Adding Numbers ==\r\n");
console.log(summary + "\r\n");
console.log("Total = " + total);