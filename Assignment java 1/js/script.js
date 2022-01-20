// Alert Name
function alertName(){
    var value= prompt("Enter Name")
    alert(value);
}
// Clear Buttons
function outputcleartoastify(){
    document.getElementById("origanalstatement").style.display="none";
    document.getElementById("result").style.display="none";
}
// Alert Number
function alertNumber(){
    var value= prompt("Enter Number")
    alert("The Number is="+value);
}
// Show Variable Numbers
function showVariable(){
    document.getElementById("origanalstatement").style.display="";
    document.getElementById("result").style.display="";

    let variable=" <ul><li>A variable name can't contain any spaces.</li><li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li><li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords.For example, <code>userAlert</code> and <code>myVar</code> are legal.</li><li>Capital letters are fine, but be careful. Variable names are case sensitive. A <code>rose</code> is not a <code>Rose</code>. If you assign the string 'Floribundas' to the variable <code>rose</code>, and then ask JavaScriptfor the value assigned to <code>Rose</code>, you'll come up empty.</li><li>I teach the camelCase naming convention. Why 'camelCase'? Because there is a hump ortwo (or three) in the middle if the name is formed by more than one word. A camelCasename begins in lower case. If there's more than one word in the name, each subsequent word gets an initial cap, creating a hump. If you form a variable name with only one word, like <code>response</code>, there's no hump. It's a camel that's out of food. Please adopt the camelCase convention. It'll make your variable names more readable, and you'll be lesslikely to get variable names mixed up.</li></ul>"

    document.getElementById("result").innerHTML = variable;
}
// Show Camel Case
function showCamelcase(){
    document.getElementById("origanalstatement").style.display="";
    document.getElementById("result").style.display="";
    
    let camel="<ul><li><code>user</code></li><li><code>userRespnose</code></li><li><code>userResponseTime</code></li><li><code>userResponseLimit</code></li></ul>"

    document.getElementById("result").innerHTML = camel;
}
// Sum 2 Numbers
function sum2Numbers(){
    var x= prompt ("Enter First Value")
    var y= prompt ("Enter Second Value")

    var z= parseInt (x) + parseInt (y)

    document.getElementById("origanalstatement").innerHTML ="Let X="+x+";<br>Let Y="+y+";";
    document.getElementById("result").innerHTML = "The Answer is="+z;
}
// Subtract 2 Numbers
function sub2Numbers(){
    var a= prompt("Enter Number")
    var b= prompt("Enter Number")

    var c= a - b

    document.getElementById("origanalstatement").innerHTML ="Let A="+a+";<br>Let B="+b+";";
    document.getElementById("result").innerHTML = "The Answer is="+c;
}
// Multiply 2 Numbers
function mul2Numbers(){
    var p= prompt("Enter Number")
    var q= prompt("Enter Number")

    var r= p * q;

    document.getElementById("origanalstatement").innerHTML ="Let P="+p+";<br>Let Q="+q+";";
    document.getElementById("result").innerHTML = "The Answer is="+r;
}
// Divide 2 Numbers
function div2Numbers(){
    var num1= prompt("Enter Number")
    var num2= prompt("Enter Number")

    var num3= num1 / num2;

    document.getElementById("origanalstatement").innerHTML ="Let Num1="+num1+";<br>Let Num2="+num2+";";
    document.getElementById("result").innerHTML = "The Answer is="+num3;
}
// Some Calculation
function someCal(){
    document.getElementById("origanalstatement").style.display="";
    document.getElementById("result").style.display="";

    let someCalculation = 36 / 6 * 3 + 2 ** 4 - (3 + 5);
    let statement = "Let someCalcultaion = 36 / 6 * 3 + 2 ** 4 - (3 + 5) "

    document.getElementById("origanalstatement").innerHTML = statement ;
    document.getElementById("result").innerHTML = "The Answer is="+someCalculation;
}