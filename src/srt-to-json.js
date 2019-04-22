// Convert SRT file to JSON file
/*
exports.srtToJSON = function() {
    var fs = require('fs');
    var glob = require('glob');

    // Find SRT file, convert to JSON, create JSON output file.
}
*/
const glob = require('glob');
const fs = require('fs');

exports.srtToJSON = function () {
    glob('*.srt', {}, (err, files) => {
        if (err) {
            return console.log(err);
        }
        if (!files) {
            return console.log('No SRT files found.');
        }
        var fileName = files[0];
        var content = fs.readFileSync(`${fileName}`, 'utf8');
        console.log(content);
        const regex = /\d+\n+[0-9\:\,\-\>\s]{29}\n(.+|(\n[^\n]))+/g;
        const rawResult = content.match(regex);

        const parsedResult = rawResult.map(chunk => {
            const [id, time, ...lines] = chunk.split(/\n/g);
            const [start, end] = time.split(/\s\-\-\>\s/);
            const content = lines.join('\n');
            //console.log(`Line ${id}: ${lines}`);
            return { id, start, end, content };
        });

        var json = JSON.stringify(parsedResult, " ", 1);

        fs.writeFile("import.json", json, 'utf8', function (err) {
            if (err) {
                console.log("An error occured while writing SRT to JSON file");
                return console.log(err);
            }
            //console.log("SRT has been converted to JSON (import.json)");
        });
    });
}