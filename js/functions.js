console.log("hello");
function greet(names,greettext){
    console.log(greettext+" "+names);
    console.log("so "+names + " is a good boy");
}
function greet1(names,greettext ="greetings from JS to" ){
    console.log(greettext+" "+names+"\n"+"so "+names + " is a good boy");
}
let names = "kumar";
let greettext = "good morning";
// greet(names,grgeettext);
// greet1(names);

function sum(a,b,c){
    let d = a + b + c;
    return d;
}
let d = sum(4,5,8);
// console.log(d); 

function maxi(num1,num2,num3){
    if(num1<num2){
        if (num2<num3){
            return num3;
        }else{
            return num2;
        }
    }
    else{
        if (num1<num3){
            return num3;
        }else{
            return num1;
        }
    }
}
let maxnum = maxi(-5,-2,1);
console.log(maxnum+" is a maximum number");