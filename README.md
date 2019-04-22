# srtlate
translate SRT files


### Usage
1. Clone the repo
2. run `npm install`
3. Open up `app.js` and set your SourceLanguage and TargetLanguage in `params` up top.
        3a. You *might* have to comment out line 15 (`Translator.Translator(params);`) on the first run because I don't understand asynchronous programming yet and that line runs before the SRT -> JSON conversion. Run it once with that line commented and it'll generate a JSON file (import.json) for you to use. Uncomment it to perform the actual translation.
4. Import source SRT file to the root directory of the project (the same folder as `app.js`)
5. Run `node app.js`
6. Profit?
