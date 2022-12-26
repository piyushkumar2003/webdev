let fs = require("fs");
let path = require("path");

// for taking inputs in cmd line we use process.argv -- > this will take input in form of array where first two elements will be node and name of file. and from index 2 it will contain the inputs form user.
let inputarr = process.argv.slice(2);
// declaring types of files
let types = {
    media: ["mp4","mkv"],
    archives :["zip", "rar","tar","gz","ar","iso","xz","7z"],
    documents :["docx","dpc","pdf","xlsx","xls","odt","odp","odg","ps","tcx","odf","txt"],
    app :["exe", "pkg","deb","dmg"]
}
// console.log(inputarr);
// after slicing the array we will have the type of operation user wants to use at 0th index of  inputarr. on 1st index of array we will have the path oof directory.
switch (inputarr[0]) {
    case "tree":
        treefunction(inputarr[1]);
        break;

    case "organize":
        organizefunction(inputarr[1]);
        break;

    case "help":
        helpfunction();
        break;

    default:
        console.log("Please enter a valid command");
        break;
}

function treefunction(dirpath) {
    if(dirpath==undefined){
        console.log("Please enter a valid path.");
    }else{
        // check path given is correct or not
        let doesExist = fs.existsSync(dirpath);
        if(doesExist){
            treehelper(dirpath," ");
        }else{
            console.log("No folder/file found at this path.Please enter a valid path.");
            return;
        }
    }
}

function treehelper(dirpath,indent){
    let isfile = fs.lstatSync(dirpath).isFile();
    if (isfile){
        let filename = path.basename(dirpath);
        console.log(indent+"|---"+filename);
    }else{
        let dirname = path.basename(dirpath);
        console.log(indent+"└──"+dirname);
        let children = fs.readdirSync(dirpath);
        for(let i = 0;i<children.length;i++){
            let childpath = path.join(dirpath,children[i]);
            treehelper(childpath,indent+"\t");
        }
    }
}


function helpfunction() {
    console.log(`
    List of all commands:
        node main.js tree "directoryPath"
        node main.js organize "directoryP  ath"
        node main.js help`)
}




function organizefunction(dirpath){
    let destpath;
    if(dirpath==undefined){
        console.log("Directory path is undefined");
        return;
    }else{
        let doesexist = fs.existsSync(dirpath);
        if(doesexist){
            // create a new folder for organized files
            destpath= path.join(dirpath,"organizedfiles");
            if(fs.existsSync(destpath)==false){
                fs.mkdirSync(destpath);
            }

        }else{
            console.log("Directory doesn't exist on the given path.")
        }
    }
    organizehelper(dirpath,destpath);
}

function organizehelper(src,dest){
    let childnames = fs.readdirSync(src);
    // console.log(childnames);
    for(let i = 0; i<childnames.length;i++){
        let childaddr = path.join(src,childnames[i]);
        // console.log(childaddr);
        let isfile = fs.lstatSync(childaddr).isFile();
        if(isfile){
        //   console.log(childnames[i]);
        let category = getcategory(childnames[i]); 
        // console.log(childnames[i]+" belongs to "+category);
        sendfiles(childaddr,dest,category);
        }
    }
}

function getcategory(names){
    let ext = path.extname(names);
    ext = ext.slice(1);
    // console.log(ext);
    for(key in types){
        let typearr = types[key];
        for(let i=0;i<typearr.length;i++){
            if(ext==typearr[i]){
                return key;
            }
        }
    }
    return "Others";
}

function sendfiles(srcfilepath,dest,category){
    let catpath = path.join(dest,category);
    if(fs.existsSync(catpath)==false){
        fs.mkdirSync(catpath);
    }
    let filename = path.basename(srcfilepath);
    let destfilepath = path.join(catpath,filename);
    fs.copyFileSync(srcfilepath,destfilepath);
    // for cut past uncomment the cmd below
    // fs.unlinkSync(srcfilepath);

}






