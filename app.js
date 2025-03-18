document.addEventListener("DOMContentLoaded", function() {

let tipPercent = 0;
let bill;
let persons;

let tipInputfield = document.getElementById("tip");

//Buttons mit setter
document.getElementById("tipButton5").addEventListener("click", () => setTip(5));
document.getElementById("tipButton10").addEventListener("click", () => setTip(10));
document.getElementById("tipButton15").addEventListener("click", () => setTip(15));
document.getElementById("tipButton25").addEventListener("click",() => setTip(25));
document.getElementById("tipButton50").addEventListener("click",() => setTip(50));
 
//setter
function setTip(percent){
    tipPercent = percent;
    calculateTip();
}

function roundToTwo(number){
    return Math.round(number*100)/100;
}


function calculateTip(){
    bill = parseFloat(document.getElementById("bill").value) || 0;
    persons = parseFloat(document.getElementById("people").value) || 1;

    if(document.activeElement === tipInputfield){
    tipPercent = parseFloat(tipInputfield.value) || 0;
    }

    
    let tipTotal = bill * (tipPercent/100);
    let TotalAmount = (bill + tipTotal);

    let tipPerson = roundToTwo(tipTotal/persons);
    let amountPerson = roundToTwo(TotalAmount/persons);

    document.getElementById("tipAmount").innerHTML = "$ " + tipPerson;
    document.getElementById("totalAmount").innerHTML = "$ " + amountPerson;
}

document.getElementById("bill").addEventListener("input", calculateTip);
document.getElementById("tip").addEventListener("input", calculateTip);
document.getElementById("people").addEventListener("input", calculateTip);


});