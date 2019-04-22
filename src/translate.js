/////////////////////////////////////////////////////////////
const fs = require('fs');
const AWS = require('aws-sdk');
const translate = new AWS.Translate({ region: 'us-east-1' });
///////////////////////////////////////////////////////////// 

exports.Translator = function (params) {
    var outputSRTStream = fs.createWriteStream(`./translations/${params.TargetLanguageCode}.srt`);
    var outputFile = new console.Console(outputSRTStream, outputSRTStream);
    function translator(j) {
        setTimeout(function () {
            var id = subtitles[j].id;
            var start = subtitles[j].start;
            var end = subtitles[j].end;
            var content = subtitles[j].content;
    
            var fromFile = `ID: ${id}\n Start: ${start}\n End: ${end}\n Content: ${content}`;
            params.Text = content;
    
            translate.translateText(params, function (err, data) {
                if (err) {
                    console.log(err, err.stack);
                } else {
                    var enFrancais = data.TranslatedText;
                    console.log(`Translating ${id} from (${params.SourceLanguageCode}) ${content} -> (${params.TargetLanguageCode}) ${enFrancais}`);
                    outputFile.log(id);
                    outputFile.log(start + ` --> ` + end);
                    outputFile.log(enFrancais + '\n');
                    
                }
            });
        }, 500 * j);
    }

    let rawdata = fs.readFileSync('import.json');
    let subtitles = JSON.parse(rawdata);
    for (var i = 0; i < subtitles.length; i++) {
        translator(i);
    }
}