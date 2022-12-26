// Alert in in-browers javaScript:- this gives alert to users when page is reloded. it takes a string as a argument.
// alert("this is a message");

// prompt:- askes user of information.first argument can be a string(here it is a question) and second argument can be default  argument. 
// let Names = prompt("What is your name?", "Guest");
// console.log(Names);

//Confirm
let Delpost = confirm("Do you really want to delete this post?");
// console.log(Delpost);
if(Delpost){
    console.log("Your post has been deleted succesfully");
}else{
    console.log("Your post is not Deleted");
}