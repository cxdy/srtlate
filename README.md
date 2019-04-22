# srtlate
translate SRT files

### Usage
1. Clone the repo
2. run `npm install`
3. Set AWS credentials in  `~/.aws/credentials` - more info [here](https://aws.amazon.com/developers/getting-started/nodejs/)
3. Open up `app.js` and set your SourceLanguage and TargetLanguage in `params` up top.
=================================================================================
You *might* have to comment out line 15 (`Translator.Translator(params);`) on the first run because I don't understand asynchronous programming yet and that line runs before the SRT -> JSON conversion. Run it once with that line commented and it'll generate a JSON file (import.json) for you to use. Uncomment it to perform the actual translation.
=================================================================================
4. Import source SRT file to the root directory of the project (the same folder as `app.js`)
5. Run `node app.js`
6. Profit?

### Example Input SRT (English)
```
1
00:00:11,636 --> 00:00:13,221
Josh communicated but

2
00:00:13,221 --> 00:00:16,850
it's also the belief that

3
00:00:16,850 --> 00:00:18,768
we never knew the severity

4
00:00:18,768 --> 00:00:22,272
nor I don't think he knew how to
communicate the severity of it.

5
00:00:39,038 --> 00:00:40,623
I had a pretty happy childhood
```

### Example Output SRT (French)
```

00:00:11,636 --> 00:00:13,221
Josh communiquait mais

2
00:00:13,221 --> 00:00:16,850
c'est aussi la croyance que

3
00:00:16,850 --> 00:00:18,768
nous n'avons jamais connu la gravité

4
00:00:18,768 --> 00:00:22,272
ni je ne pense pas qu'il ait su en communiquer la gravité.

5
00:00:39,038 --> 00:00:40,623
J'ai eu une enfance assez heureuse
```
