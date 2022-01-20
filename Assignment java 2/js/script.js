// Concatenate Some Strings
function concatenateStrings(){
    var massage = "Good Day";
    var name = "Faizan Ahmad";
    var banger = "!";

    alert(massage + " " + name + banger)
}
// Ask Name From User
function askName(){
    var name = prompt("Enter Name")
    var massage = "Good Day";
    var banger = "!";

    alert(massage + " " + name + banger)
}
//  Comparison Operator
function compareOperator(){
    
    var Name = prompt("Enter Name")

    if(Name == "Faizan")
    {
        document.getElementById("result").innerHTML = "Good Morning" + " " + Name + "!";
    }
}
// If Else If
function ifElseIf(){
    var num1 = prompt("Enter Value")
    var num2 = prompt("Enter Value")

    if( num1 >= num2 )
    {

        document.getElementById("origanalstatement").innerHTML = "Num 1=" + " " + num1 + ";<br> Num 2= " + " " + num2 + ";";
        document.getElementById("result").innerHTML = "Yes, your condition is true."
    
    }else

    if( num1 == num2 )
    {

        document.getElementById("origanalstatement").innerHTML = "Num 1=" + " " + num1 + ";<br> Num 2= " + " " + num2 + ";";
        document.getElementById("result").innerHTML = "Yes, your condition is true."
    
    }else
    document.getElementById("origanalstatement").innerHTML = "Num 1=" + " " + num1 + ";<br> Num 2= " + " " + num2 + ";";
    document.getElementById("result").innerHTML = "No, your condition is noy true."
}
// Testing Sets Of Operators
function testSetCon(){
    var age = prompt("Enter Your Age")
    var weight = prompt("Enter Your Weight")

    if( age >= 18 && weight <= 70 )
    
    {
        document.getElementById("origanalstatement").innerHTML = "Your Age Is=" + " " + age + ";<br> Your Weight Is= " + " " + weight + ";";
        document.getElementById("result").innerHTML = "You Are A Smart Man."

    }else 

    if( age >= 18 && weight > 70 )

    {

        document.getElementById("origanalstatement").innerHTML = "Your Age Is=" + " " + age + ";<br> Your Weight Is= " + " " + weight + ";";
        document.getElementById("result").innerHTML = "You Are A Fat Man. Go Loose Some Weight."
    
    }else
    
    if( age <= 18 && weight >= 70 )
    
    {

        document.getElementById("origanalstatement").innerHTML = "Your Age Is=" + " " + age + ";<br> Your Weight Is= " + " " + weight + ";";
        document.getElementById("result").innerHTML = "You Are A Fat Man. Go Loose Some Weight."
    
    }else

    document.getElementById("result").innerHTML = "You Are A Baby. Go Home."

}
// If Nested
function ifNested(){
    var age = prompt("Enter Your Age")

    if( age >= 18 )
    {

        var weight = prompt("Enter Your Weight")
        weight = Number(weight)

        if( weight <= 70 )
        {
            alert("You Are A Smart Man.")

        }else
        {
            alert("You Are A Fat Guy.")

        }
    }else
    {

        alert("You Are A Baby.")

    }
}
// Login
function logIn(){
    var userName = prompt("Enter Username:")
    var passWord = prompt("Enter Password:")

    if( userName == "Faizan Ahmad" && passWord == 4518 )
    {
        alert("Welcome"+ " " + userName + " " + "!")
    }else
    alert("Invalid Username or Password.")
}
// Clear Buttons
function outputcleartoastify(){
    document.getElementById("origanalstatement").style.display="none";
    document.getElementById("result").style.display="none";
}
