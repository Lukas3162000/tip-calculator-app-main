/*document.getElementById("bill").addEventListener("input", function(){
    let Bill = this.value;
    let Text = document.querySelector(".Selection p");
}) */

let Bill;
let tip = 0;
let NumberOfPeople;

//Bill
document.getElementById("bill").addEventListener("input", function(event){
    Bill = event.target.value;
    console.log(Bill);
});

//Tip
const tipButtons = document.querySelectorAll(".tipButton");
const customTipInput = document.getElementById("customInput");

tipButtons.forEach(button => {
    button.addEventListener("click", function(){
        const percentage = parseInt(button.textContent);
        tip = percentage;
        console.log(tip);
    })
})

customTipInput.addEventListener("input",function(event){
tip = event.target.value;
console.log(tip);
})

//People

document.getElementById("InputNumber").addEventListener("input", function(event){
NumberOfPeople = event.target.value;
})


//Logic

let TipView;
let TipValue;
TipValue = Bill*tip;
console.log(TipValue);

TipView = document.querySelector(".Numbers h1").textContent;



