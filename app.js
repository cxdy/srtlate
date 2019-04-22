/////////////////////////////////////////////////////////////
const fs = require('fs');
const AWS = require('aws-sdk');
const translate = new AWS.Translate({ region: 'us-east-1' });
/////////////////////////////////////////////////////////////
var params = {
    SourceLanguageCode: 'EN', /* required */
    TargetLanguageCode: 'FR', /* required */
};
///////////////////////////////////////////////////////////// 
const srtToJSON = require('./src/srt-to-json.js');
const Translator = require('./src/translate.js');

srtToJSON.srtToJSON();
Translator.Translator(params);