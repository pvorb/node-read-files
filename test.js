var fs = require("fs");
require("./");

fs.readFiles([ "package.json", "test.js", "read-files.js" ],
		function(err, data) {
	if (err) throw err;

	console.log(data);
});
