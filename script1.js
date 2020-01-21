var button0 = document.getElementById("0");
var button1 = document.getElementById("1");
var button2 = document.getElementById("2");
var button3 = document.getElementById("3");
var button4 = document.getElementById("4");
var button5 = document.getElementById("5");
var button6 = document.getElementById("6");
var button7 = document.getElementById("7");
var button8 = document.getElementById("8");
var button9 = document.getElementById("9");

var buttonClear = document.getElementById("clear");
var buttonPlus = document.getElementById("plus");
var buttonMinus = document.getElementById("minus");
var buttonMultiply = document.getElementById("multiply");
var buttonDivide = document.getElementById("divide");
var buttonDot = document.getElementById("dot");
var buttonPercent = document.getElementById("percent");
var buttonRedo = document.getElementById("redo");

var buttonEquals = document.getElementById("equals");

var isEmpty = true;

var screen = document.getElementById("screen");

button0.addEventListener("click", buttonClick0);
button1.addEventListener("click", buttonClick1);
button2.addEventListener("click", buttonClick2);
button3.addEventListener("click", buttonClick3);
button4.addEventListener("click", buttonClick4);
button5.addEventListener("click", buttonClick5);
button6.addEventListener("click", buttonClick6);
button7.addEventListener("click", buttonClick7);
button8.addEventListener("click", buttonClick8);
button9.addEventListener("click", buttonClick9);

buttonClear.addEventListener("click", buttonClickClear);
buttonMultiply.addEventListener("click", buttonClickMultiply);
buttonPlus.addEventListener("click", buttonClickPlus);
buttonMinus.addEventListener("click", buttonClickMinus);
buttonDivide.addEventListener("click", buttonClickDivide);
buttonDot.addEventListener("click", buttonClickDot);
buttonPercent.addEventListener("click", buttonClickPercent);
buttonRedo.addEventListener("click", buttonClickRedo);

buttonEquals.addEventListener("click", buttonClickEquals);

function showScreen(number){
    if(isEmpty){
        screen.innerHTML = number;
        isEmpty = false;
    } else {
        screen.innerHTML += number;
    }
    
}
function buttonClick0(){
    showScreen(0);
}
function buttonClick1(){
    showScreen(1);
}
function buttonClick2(){
    showScreen(2);
}
function buttonClick3(){
    showScreen(3);
}
function buttonClick4(){
    showScreen(4);
}
function buttonClick5(){
    showScreen(5);
}
function buttonClick6(){
    showScreen(6);
}
function buttonClick7(){
    showScreen(7);
}
function buttonClick8(){
    showScreen(8);
}
function buttonClick9(){
    showScreen(9);
}
function buttonClickClear(){
    screen.innerHTML = 0;
    isEmpty = true;
}
function buttonClickPlus(){
    showScreen("+");
}
function buttonClickMinus(){
    showScreen("-");
}
function buttonClickMultiply(){
    showScreen("*");
}
function buttonClickDivide(){
    showScreen("/");
}
function buttonClickDot(){
    showScreen(".");
}
function buttonClickPercent(){
    if (isEmpty){
        showScreen("0%");

    } else {
        showScreen("%");
    }
    
}
function buttonClickRedo(){
    if(!isEmpty){
        screen.innerHTML = screen.innerHTML.slice(0,-1);
        if(screen.innerHTML === ""){
            screen.innerHTML = 0;
            isEmpty = true;
        }
    }
}
function buttonClickEquals(){
    let str = screen.innerHTML.replace(/[^-()\d/*+.]/g, '');
    screen.innerHTML = eval(str);
}
