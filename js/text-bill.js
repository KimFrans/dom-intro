// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector(".billTypeText");
var callTotalOne = document.querySelector(".callTotalOne");
var smsTotalOne = document.querySelector(".smsTotalOne");
var totalOne = document.querySelector(".totalOne");
var red = document.querySelector(".red")
//get a reference to the add button
var addToBillBtn = document.querySelector(".addToBillBtn");
//create a variable that will keep track of the total bill
var totalBill = 0;
var callsTotal = 0;
var smsTotal = 0;
//add an event listener for when the add button is pressed
// var callsTotal = 0;
// var smsTotal = 0;
//addToBillBtn.addEventListener("click",textBillTotal);
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
function textBillTotal(){
    var billTypeText = document.querySelector(".billTypeText").value;
    if(billTypeText === "call"){
        callsTotal += 2.75;
    }
    else if (billTypeText === "sms"){
        smsTotal += 0.75;
    }
    
    callTotalOne.innerHTML = callsTotal.toFixed(2);
    smsTotalOne.innerHTML = smsTotal.toFixed(2);
    var totalBill = callsTotal + smsTotal;
    totalOne.innerHTML = totalBill.toFixed(2);

    if(totalBill > 30 && totalBill <= 49){
        if(red.classList.toggle("danger")){
            red.classList.remove("danger")
        }
        red.classList.add("warning");
    }
    if(totalBill >= 50){
        if(red.classList.toggle("warning")){
            red.classList.remove("warning")
        }
        red.classList.add("danger")
    }
}
addToBillBtn.addEventListener("click",textBillTotal);