// const express = require("express");
// const path = require("path");
// const app = express();
// const port = 3000;

// // For serving static files
// app.use("/static",express.static("static"));

// //set the templete engine as pug 
// app.set('view engine', 'pug');

// //set the views directory
// app.get('views', path.join(__dirname,'views'));

// // Our pug demo endpoint
// app.get("/demo", (req, res)=>{ 
//     res.status(200).render('demo', { title: 'Hey piyush', message: 'Hello there and thanks for telling me how to use pug!' })
// });

// app.get("/", (req, res)=>{ 
//     res.status(200).send("This is homepage of my first express app with Harry");
// });

// app.get("/about", (req, res)=>{
//     res.send("This is about page of my first express app with Harry");
// });

// app.post("/about", (req, res)=>{
//     res.send("This is a post request about page of my first express app with Harry");
// });


// app.listen(port, ()=>{
//     console.log(`The application started successfully on port ${port}`);
// });





const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 8000;

// Expess specific stuff
app.use('/static', express.static('static'))  // For serving static files
app.use(express.urlencoded({ extended: true })) //using middleware for getting data from form to express


// pug specific stuff

app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/',(req,res)=>{
    // If you want to pass parameters like title, content you have to follow this method(given below).  
    const con = 'this is the content of the page';
    const params = {'title':'this is the title','content':con};
})
app.post('/',(req,res)=>{
    // body  = req.body
    names = req.body.names
    phone = req.body.phone
    address = req.body.address
    gender = req.body.gender
    physique = req.body.physique
    
    let outputToWrite = `The name of client id ${names}.\nContact number: ${phone}.\nAddress: ${address}.\nGender: ${gender}.\nDescription of their Dream/Ideal physique is: ${physique} `
    
    fs.writeFileSync('output.txt',outputToWrite)

    const params = {'message':'Form submitted successfully'};
    
    res.status(200).render('index.pug',params);
});


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
