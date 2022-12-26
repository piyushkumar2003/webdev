let cp = require("child_process");
console.log("opening");
// if we want to direct to any google page 
// cp.execSync("firefox https:\\www.google.com");

// for running any file
let outputfile = cp.execSync("node samplefile.js");
console.log("opened "+ outputfile);
