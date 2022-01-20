// Round A Number
function roundNumber(){
    let number = document.getElementById("input").value;

    if( number == "" )  {

        alert("Please Enter A Number");
        return;

    }

    let roundTheNumber = Math.round(number);
    
    let html = "<h1 class='text-primarytheme p-5'>" + roundTheNumber + "</h1>";

    document.getElementById("result").innerHTML = html;
}
// Ceil A Number
function ceil(){
    let number = document.getElementById("input").value;

    if( number == "" )  {

        alert("Please Enter A Number");
        return;

    }

    let cielTheNumber = Math.ceil(number);
    
    let html = "<h1 class='text-primarytheme p-5'>" + cielTheNumber + "</h1>";

    document.getElementById("result").innerHTML = html;
}
// Floor A Number
function floor(){
    let number = document.getElementById("input").value;

    if( number == "" )  {

        alert("Please Enter A Number");
        return;

    }

    let floorTheNumber = Math.floor(number);
    
    let html = "<h1 class='text-primarytheme p-5'>" + floorTheNumber + "</h1>";

    document.getElementById("result").innerHTML = html;
}
// Random Number
function random(){
    let randomNumber = Math.random();

    let html = "<h1 class='text-primarytheme p-5'>" + randomNumber + "</h1>";

    document.getElementById("result").innerHTML = html;
}
// Throw A Dice
function dice(){
    let randomNumber = Math.random();

    randomNumber = (randomNumber * 6) + 1;

    let dice = Math.floor(randomNumber);
    
    let html = "<h1 class='text-primarytheme p-5'>" + dice + "</h1><span>Generating A Random Number From 1 to 6 </span>";

    document.getElementById("result").innerHTML = html;
}
// Generate Password
function generatePass(){

    let randomString = "";
    let upperCaseAlphabate = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCaseAlphabate = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "~!@#$%^&*-_=+/?.,";
    let possiblestring = upperCaseAlphabate + lowerCaseAlphabate + numbers + symbols;

    for( let i = 0; i < 8; i++ )    {

        let randomNumber = Math.random();
        randomString += possiblestring.charAt(Math.floor(randomNumber * possiblestring.length));
        
    }

    let html = '<h6 class-"text-primarytheme mb-0">' + randomString + '</h6>' + '<p>Generating random string &amp; the length is: <span style="color: red; font-size: 20px;">' + 8 + '</span></p>';

    document.getElementById("result").innerHTML = html;
    
}
// Random String
function randomString(){
    let num = document.getElementById("input").value;

    if ( num == "" )    {

        alert("Please Enter Number.");
        return;

    }
    
    console.log(num);
    console.log(typeof num);

    num = parseFloat(num);

    console.log(typeof num);
    console.log(num);
}
// Controlling Length
function controllingLength(){
    let num = document.getElementById("input").value;

    if ( num == "" )    {

        alert("Please Enter Number.");
        return;

    }
    
    num = Number(num);
    console.log(typeof num);

    num = num.toFixed(2);

    console.log(typeof num);
    console.log(num);
}
// Calculating GST
function calculateGst(){
    let cost = document.getElementById("input").value;

    if ( cost == "" )    {

        alert("Please Enter Cost.");
        return;

    }

    cost= Number(cost);
    
    let tax = cost * (17 / 100);

    let totalCost = cost + tax;
    totalCost = Math.round(totalCost);
    
    document.getElementById("result").innerHTML = 'Your Bill = <span class="text-primarytheme">' + cost + '</span>';
    document.getElementById("result").innerHTML = 'Tax 17% = <span class="text-danger ">' + tax + '</span>';
    document.getElementById("result").innerHTML = 'Total Ammount Including Tax = <span class="text-primarytheme ">' + totalCost + '</span>';

}