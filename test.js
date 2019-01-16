var qs = require("querystring");
var http = require("https");

var options = {
    "method": "GET",
    "hostname": "api.networkfleet.com",
    "port": null,
    "path": "/locations",
    "headers": {
        "authorization": "Bearer 529b379a-a3fc-49a5-8dfa-0ac0647ee8dd",
        "accept": "application/vnd.networkfleet.api-v1+json",
        "content-type": "application/vnd.networkfleet.api-v1+json",
        "cache-control": "no-cache",
        "postman-token": "b7ebd05e-8465-e5d7-1c25-4b8d7d49fcbd"
    }
};


var req = http.request(options, function (res) {
    var chunks = [];


    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function () {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });


});

req.write(qs.stringify({
    grant_type: 'password',
    password: 'OTG1820!',
    username: 'TonySmith'
}));

req.end();