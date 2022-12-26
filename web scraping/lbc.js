const request = require("request");
const cheerio = require("cheerio");
const url = "https://www.espncricinfo.com/series/ipl-2021-1249214/chennai-super-kings-vs-kolkata-knight-riders-final-1254117/ball-by-ball-commentary";
// const url = "https://www.espncricinfo.com/series/south-africa-in-england-2022-1276896/england-vs-south-africa-2nd-test-1276917/ball-by-ball-commentary";
request(url,cb);
function cb(err,html){
    if (err){
        console.log("Error");

    }else{
        extracthtml(html);
    }
}

function extracthtml(html){
    let $ = cheerio.load(html);
    let elementarray = $(".ds-text-compact-s .ci-html-content");
    // let elementarray = $(".ds-text-compact-s .ci-html-content");
    let text = $(elementarray[0]).text();
    console.log(""+text);
}