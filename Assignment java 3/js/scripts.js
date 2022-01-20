// Simple Alert
function simpAlert(){
    alert("Faizan")
}
// Print My Name
function printMyname(){
    var name= prompt("Enter Your Name")

    alert("Your Name Is" + " " + name);

    document.getElementById("result").innerHTML = name;
}
// Print All cities
function printAllCities(){
    document.getElementById("result").innerHTML = "1) Faisalabad 2) Lahore 3) Karachi 4) Islamabad 5) Burewala 6) Shiekhupura 7) Kashmir";
}
// Add Your City
function addYourcity(){
    var cities = [ "1) Faisalabad", "2) Lahore", "3) Karachi", "4) Islamabad", "5) Burewala",  "6) Shiekhupura",  "7) Kashmir" ];

    var enter_city=document.getElementById("input").value;

    cities.push("8)"+ " " + enter_city);

    document.getElementById("result").innerHTML = cities;
}
// generate a table
function generateTable(){
    var num = document.getElementById("input").value;
    for ( var i = 1; i <= 10; i++ ) {
        var multi = num * i;
        document.getElementById("result").innerHTML += num + "*" + i + "=" + multi + "</br>" ;
    }
}   