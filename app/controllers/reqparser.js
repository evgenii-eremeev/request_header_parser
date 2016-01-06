function parseLang(lang) {
    var reLang = /([a-zA-z-]+)(?=,)/;
    var match = lang.match(reLang);
    return match ? match[0] : null;
}


function parseSoftware(software) {
    var reSoft = /\(([^)]+)\)/;
    var match = reSoft.exec(software);
    return match ? match[1] : null;
}


function reqparser(req, res) {
    var whoami = {
        ipaddress: req.headers['x-forwarded-for'],
        language: parseLang(req.headers['accept-language']),
        software: parseSoftware(req.headers['user-agent'])
    };
  
    console.log(whoami);
    res.send("Yello!");
}

module.exports = reqparser;