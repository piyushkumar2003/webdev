// it is used for creating,reading,updating,deleting files.
let fs = require("fs");
const path = require("path");

// FILE HANDLLING

// this will read the file as it is. 
let buffer = fs.readFileSync("samplefile.js");
// console.log(""+buffer);


// for creating file
// fs.openSync("abc.txt","w");

// for creating and writing simultaneously 
// writeFileSync()--> will overwrite in the file if there is content in it. 
// fs.writeFileSync("a.txt","this content belongs to the file named as a.txt");
// fs.writeFileSync("abc.txt","this will be deleted within seconds");


// for appending to any file 
// fs.appendFileSync("a.txt", " this is the appended content");


// to delete any file 
// fs.unlinkSync("abc.txt");



// FOLDER HANDLLING

// creating a folder
// fs.mkdirSync("meriDirectory");

// fs.writeFileSync("meriDirectory/merifile.txt","mera content");


// deleting files in a folder 
// steps: read all the files in folder.
//        delete all the files from folder.
//        then delete the folder. 

// let content = fs.readdirSync("meriDirectory");
// console.log(content); //this will print all the files present in the folder in an array.

// this loop will delete all files 
// content.forEach(element => {
//     console.log(element+" will be deleted in next moment");
//     fs.unlinkSync("meriDirectory/"+element);
// });
// this will delete the folder
// fs.rmdirSync("meriDirectory")



// fs.existsSync --> will check wheater file/folder is  present at thatt path or not and return boolean values
// let doesexist = fs.existsSync("samplefile.js");
// let doesexist = fs.existsSync("notsamplefile.js");
// console.log(""+doesexist);


// fs.lstatSync()--> this will check path is of folder or file 
// let details = fs.lstatSync(__dirname + "//filesystem.js");
// let ans1 = details.isDirectory()
// console.log("is filesystem.js a directory? "+ans1);
// let ans2 = details.isFile()
// console.log("is filesystem.js a file? "+ans2);



// PATH

// let path = require("path");
// for (let i = 0;i<=10;i++){
//     let dirpathtomake = `lecture ${i}`;
//     fs.mkdirSync(dirpathtomake);//this will make 10 folders
//     fs.writeFileSync(path.join(dirpathtomake,"readme.md"),`# this is readme file for ${dirpathtomake}`);
// }
// path.join --> will take 2 arguments i.e. name of folder and name of file and then it will make the path according to os windows or mac os

let ext = path.extname(path.join(__dirname,"sample.js"));
 //path.extname takes path of file and return extention of file.
console.log(""+ext); //this will print extention of file

// let names = path.basename(__dirname);
// console.log(names); // print name of folder
// let names1 = path.basename(path.join(__dirname,"samplefile.js"));
// console.log(names1);//print name of file