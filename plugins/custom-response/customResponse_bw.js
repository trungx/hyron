const handleMapping = require("./responseMapping");

module.exports = function(req, res, prev) {
    if (typeof prev == "object" && !prev instanceof Array) {
        Object.keys(prev).forEach(field => {
            var handle = handleMapping[field];
            if (handle != null) handle(prev[field], res);
        });
        res.end();
    } else return prev;
};