var express = require('express');
var CryptoJS = require('crypto-js');
var app = express();
const port = 3000


// Endpoint Md5
app.get('/md5/:str', function (req, res) {
    let data;
    let str=req.params.str;
    md5Hash = CryptoJS.MD5(str);
    data = {
        "hash": "md5",
        "cleartext": str,
        "hashedtext": md5Hash.toString()
    }
    res.send(data);
});

// Endpoint sha256
app.get('/sha256/:str', function (req, res) {
    let data;
    let str=req.params.str;
    sha256Hash = CryptoJS.SHA256(req.params.str);
    data = {
        "hash": "sha256",
        "cleartext": str,
        "hashedtext": sha256Hash.toString()
    }
    res.send(data);
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})