var fs = require("fs");

if (!fs.readFiles)
fs.readFiles = function(files, encoding, complete) {

	var allData = {};
	var todo = 0;

	// complete is the last argument
	complete = arguments[arguments.length - 1];
	// encoding is the second argument
	if (typeof arguments[2] !== "string")
		encoding = "utf8";
	else
		encoding = arguments[2];

	// for each file
	files.forEach(function(file) {
		todo++;

		// read it's contents
		fs.readFile(file, encoding, function(err, data) {
			if (err) return complete(err, null);

			// store data
			allData[file] = data;

			// when ready call `complete`
			if (!--todo)
				complete(null, allData);
		});
	});
}
