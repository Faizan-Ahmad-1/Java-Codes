// Upper Case
function lowerCase(){
    let origanlText = "<p>I love my country Pakistan. </br> I like my city Faisalabad. </br> I love my Homeland.</p>";
    let lowerCasetxt= origanlText.toLowerCase();
    
    document.getElementById("result").innerHTML = lowerCasetxt;
}
// Upper Case
function upperCase(){
    let origanlText = "<p>I love my country Pakistan. </br> I like my city Faisalabad. </br> I love my Homeland.</p>";
    let upperCasetxt= origanlText.toUpperCase();
    
    document.getElementById("result").innerHTML = upperCasetxt;
}
// Capitalize
function capiTalize(){
    let origanlText = "<p>I love my country Pakistan. </br> I like my city Faisalabad. </br> I love my Homeland.</p>";
     let cap = '<span style="text-transform: capitalize">' + origanlText + '</span>';
     document.getElementById("result").innerHTML = cap;

}
// Btter Formating
function  betterFormating(){
    let orignalText = document.getElementById("input").value;

    if( orignalText == "" ){
        alert("Please Enter Text.")
        return;
    }

    text = orignalText.toLowerCase();
    document.getElementById("result").innerHTML = '<span style="text-transform: capitalize">' + text + '</span>';
    
}
// Print All Cities
function printAll(){
    let cities = [ "1) Faisalabad", "2) Lahore", "3) Karachi", "4) Islamabad", "5) Burewala",  "6) Shiekhupura",  "7) Kashmir" ];
    
    document.getElementById("result").innerHTML = cities;
}
// Add Your City
function addCity(){
    let cities = [ "Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala",  "Shiekhupura",  "Kashmir" ];
    let city = document.getElementById("input").value;
    
    if(city == "")   {
        alert("Please Enter City")
        return;
    }
    
    cityFirstLetter = city.slice(0, 1).toUpperCase();
    cityAllLetter = city.slice(1).toLowerCase();
    
    cityWordInCapitalize = cityFirstLetter + cityAllLetter;
    
    let cityFound=false;
    
    for( let i = 0; i < cities.length; i++ ) {
        
        if( cities[i] === cityWordInCapitalize ) {
            
            cityFound = true;
            let html = '<span style= "color: red; font-size: 20px;">' + cityWordInCapitalize + '</span> is already in list.';
            document.getElementById("result").innerHTML = html;
            
        }
    }
    
    if( cityFound === false )   {
        
        cities.push(cityWordInCapitalize);
        let html = '<span style="color: green; forn-size: 20px;">' + cityWordInCapitalize + '</span> is not in list. </br>';
        document.getElementById("result").innerHTML = html;

    }
    
}
// Check City
function checkCity(){
    let cities = [ "Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala",  "Shiekhupura",  "Kashmir" ];

    let city = document.getElementById("input").value;

    if( city == "") {

        alert("Please Enter City");
        return;

    }

    cityFirstLetter = city.slice(0,1).toUpperCase();
    cityAllLetter = city.slice(1).toLowerCase();

    cityWordInCapitalize = cityFirstLetter + cityAllLetter;

    let cityFound = false;
    
    for( let i= 0; i < cities.length; i++ ) {

        if( cities[i] === cityWordInCapitalize ) {
            
            cityFound=true;
            let html = '<span style= "color: red; font-size: 20px;">' + cityWordInCapitalize + '</span> is already in list.';
            document.getElementById("result").innerHTML = html;
            
        }

    }

    if( cityFound === false )   {
        
        let html = '<span style="color: green; forn-size: 20px;">' + cityWordInCapitalize + '</span> is not in list. </br>';
        document.getElementById("result").innerHTML = html;

    }
}
// Find Word
function findWord(){

    let orignalText = "<p>I love my country Pakistan. </br> I like my city Faisalabad. </br> I love my Homeland.</p>";
    let neworignalText = orignalText.toLowerCase();

    let word = document.getElementById("input").value;

    if( word == "" )    {

        alert("Please Enter A Word")
        return;

    }

    word = word.toLowerCase();

    let findWord = neworignalText.indexOf(word);

    if( findWord !== -1 )   {

        let html = 'Your Word <span style= "color: green; font-size: 20px;">' + word + '</span> found in index: ' + findWord;
        document.getElementById("result").innerHTML = html;
        
    }else {

        let html = 'Your word <span style= "color: red; font-size: 20px;">' + word + '</span> does not found in index: ' + findWord;
        document.getElementById("result").innerHTML = html;

    }

}
// Replace Word
function replaceWord(){
    let orignalText = "<p>I love my country Pakistan. </br> I like my city Faisalabad. </br> I love my Homeland.</p>";
    let neworignalText = orignalText.toLowerCase();

    let word = document.getElementById("input").value;

        if( word == "" )    {

            alert('Please Enter Word');
            return;

        }

        let replaceWith = prompt("Please Enter Word You Want to Replace With.")

        word = word.toLowerCase();
        word = new RegExp(word, "g");

        replaceWith = replaceWith.toLowerCase();

        let replaceWord = neworignalText.replace(word, replaceWith);

        document.getElementById("result").innerHTML = replaceWord;
}