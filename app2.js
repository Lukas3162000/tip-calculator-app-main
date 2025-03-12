let tipPercent;
let bill;
let persons;

function calculateTip(){
    bill = parseFloat(document.getElementById("bill").value) || 0;
    tipPercent = parseFloat(document.getElementById("tip").value) || 0;
    persons = parseFloat(document.getElementById("people").value) || 0;

    let tipTotal = bill * (tipPercent/100);
    let TotalAmount = (bill + tipTotal);

    let tipPerson = (tipTotal/persons);
    let amountPerson = (TotalAmount/persons);

    document.getElementById("tipAmount").innerHTML = "$ " + tipPerson;
    document.getElementById("totalAmount").innerHTML = "$ " + amountPerson;
}

document.getElementById("bill").addEventListener("input", calculateTip);
document.getElementById("tip").addEventListener("input", calculateTip);



/*Buttons*/
function addFive(){
    tipPercent = 5;
    calculateTip();
}

function addTen(){
    tipPercent = 10;
    calculateTip();
}

function addFifteen(){
    tipPercent = 15;
    calculateTip();
}

function addTwentyFive(){
    tipPercent = 25;
    calculateTip();
}

function addFifty(){
    tipPercent = 50;
    calculateTip();
}