const request = require("request");
const cheerio = require("cheerio");
const url = "https://www.espncricinfo.com/series/ipl-2021-1249214/chennai-super-kings-vs-kolkata-knight-riders-final-1254117/full-scorecard";

request(url,cb);
function cb(err,html){
    if(err){
        console.log("Error");
    }else{
        extracthtml(html);
    }
}

function extracthtml(html){
    let $ = cheerio.load(html);
    let elementarray = $("");
    let text = $(elementarray[0]).text();
    console.log(""+text);
}