// If else
function ifEsle(){

    var now = new Date();

    var today = now.getDay();
    
    if ( today === 0 )  {
        alert("Today Is Sunday.");
    }else if ( today === 1 )    {
        alert("Today Is Monday.");
    }else if ( today === 2 )    {
        alert("Today Is Tuesday.");
    }else if ( today === 3 )    {
        alert("Today Is Wednesday.")
    }else if ( today === 4 )    {
        alert("Today Is Thursday.")
    }else if ( today === 5 )    {
        alert("Today Is Friday.")
    }else if ( today === 6 )    {
        alert("Today Is Saturday.")
    }
}
// switch
function sW(){
    var now = new Date();
    
    var today = now.getDay();

    switch (today) {
        case 0:
            document.getElementById("result").innerHTML = "It's Sunday.";
            break;
        case 1:
            document.getElementById("result").innerHTML = "It's Monday.";
            break;
        case 2:
            document.getElementById("result").innerHTML = "It's Tuesday.";
            break;
        case 3:
            document.getElementById("result").innerHTML = "It's Wednesday.";
            break;
        case 4:
            document.getElementById("result").innerHTML = "It's Thursday.";
            break;
        case 5:
            document.getElementById("result").innerHTML = "It's Friday.";
            break;
        case 6:
            document.getElementById("result").innerHTML = "It's Saturday.";
            break;
    
        default:
            document.getElementById("result").innerHTML = "It's Some Other Day";
            break;
    }
}
// Keep Asking The Name
function keepAsking(){
    do {
        var name = prompt("Enter Your Name.")
    }while ( name === null );

    document.getElementById("result").innerHTML = name;
}