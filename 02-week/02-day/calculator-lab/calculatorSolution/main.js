//set global variables
var result;
var inputValues = [];
var operator;
var buttons = document.getElementsByClassName('buttons');
var inputBox = document.getElementById('display');

console.log("result:" + result, "input values:" + inputValues,"operator:" + operator, buttons);

function clear() {
    result = "";
    inputValues = [];
    operator = "";
    inputBox.value = "";
}

//add event listener to all buttons
for (i=0; i<buttons.length;i++) {
    buttons[i].addEventListener('click', function() {
        inputValues.push(this.innerHTML);
        console.log("current values stored:" + inputValues);
    });
}

var myArray = inputValues;


function add() {
    if (inputValues > 3) {

    }
    return myArray;
}
