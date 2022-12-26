let obj ={
    fname:"piyush",
    lname:"kumar",
    arr : [1,2,3,4,5,6,7,8,9],
    sayhi : function greet(param){
        console.log("good morning "+param);
    },
    goodafternoon : function (param){
        console.log("good afternoon");
    },
    sayhello : function (){
        console.log("good night");
    }
}

// console.log(obj);

// to traverse the obj by keys. we use for in loop
// for (let key in obj) {
//        console.log(key+" : "+obj[key]); 
//     }


// console.log(obj.sayhi("piyush"));
// obj.sayhello();

// FUNCTION
// we can add also properties to function. as well as we can also make functions inside a function just like we used to do it in OBJECTS
function fn(){
    console.log("hello from fn");
}
// fn();
fn.newprop = "this is a new prop of fn function";
fn.myfn = function funct(){
    console.log("hello buddy");
}
// console.log(fn.newprop);
// fn();
// fn.myfn();
