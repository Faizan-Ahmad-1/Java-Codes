let rightNow = new Date();
document.getElementById("date").innerHTML = rightNow;
let daysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// Get Name of today
function today(){
    let rightNow = new Date();

    let theDay = rightNow.getDay();

    let nameOfToday = daysName[theDay];

    document.getElementById("result").innerHTML = nameOfToday;
}
// Calc days Passed since i was born
function daysFromBorn(){
    let dob = document.getElementById("input").value;
    
    if( dob == "" ) {

        alert("Input DOB");
        return;

    }

    let today = new Date();
    let bornDate = new Date(dob);

    let msDiff = today.getTime() - bornDate.getTime();

    let daysDiff = msDiff / (1000 * 60 * 60 * 24);

    let html = Math.floor(daysDiff) + "Days have been passed since were born."

    document.getElementById("result").innerHTML = html;
}
// When is your next birthday
function nextBirthday(){
    let dob = document.getElementById("input").value;
    
    if( dob == "" ) {

        alert("Input DOB");
        return;

    }

    let today = new Date();
    let nextBirthdayDate = new Date(dob);

    let msDiff = nextBirthdayDate.getTime() - today.getTime();

    let daysDiff = msDiff / ( 1000 * 60 * 60 * 24 );

    let html = "Your Next Birthday is" + Math.floor(daysDiff) +" "+ "Days Away."

    document.getElementById("result").innerHTML = html;
}
// Greet User
function greet(){
    
    var userName = prompt("Enter Name");

    document.getElementById("result").innerHTML = "Good Afternoon" + " " + userName + "!";

}
// tell time 1
function telltime(){
    let now = new Date();
    let theHr = now.getHours();
    let theMin = now.getMinutes();
    let theSec = now.getSeconds();
    
    document.getElementById("result").innerHTML += "</br> You Clicked Button @" + theHr + ":" + theMin + ":" + theSec ;
}
// tell time 2
function telltime2(){
    let now = new Date();
    let theHr = now.getHours();
    let theMin = now.getMinutes();
    let theSec = now.getSeconds();
    
    document.getElementById("result").innerHTML += "</br> You Clicked Button @" + theHr + ":" + theMin + ":" + theSec ;
}
// tell time 3
function telltime3(){
    let now = new Date();
    let theHr = now.getHours();
    let theMin = now.getMinutes();
    let theSec = now.getSeconds();

    document.getElementById("result").innerHTML += "</br> You Clicked Button @" + theHr + ":" + theMin + ":" + theSec ;
}
// Calculate Tax
function calculateTax(){

    var price = prompt("Enter Your Price");

    var taxRate = prompt("How Much Tax Do You Want to Add");

    var tax = price * (taxRate / 100);

    let html = 'Your Tax is :' + " " + tax;

    document.getElementById("result").innerHTML = html;

}
// Caculate Total
function calculateTotalAmount(){

    var price = prompt("Enter Your Price");

    var pR = Number(price);

    var taxRate = prompt("How Much Tax Do You Want to Add");

    var tR = Number(taxRate);

    var tax = pR * (tR / 100);

    var total = pR + tax ;

    let html = 'Your Total Price After Tax is :' + " " + "Rs." + " " + total;

    document.getElementById("result").innerHTML = html;

}