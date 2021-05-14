// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector(".billTypeText");
var callTotalOne = document.querySelector(".callTotalOne");
var smsTotalOne = document.querySelector(".smsTotalOne");
var totalOne = document.querySelector(".totalOne");
var red = document.querySelector(".red")
//get a reference to the add button
var billTypeTextVal = document.querySelector(".billTypeText");

var addToBillBtn = document.querySelector(".addToBillBtn");
//create a variable that will keep track of the total bill
// var totalBill = 0;
// var callsTotal = 0;
// var smsTotal = 0;
//add an event listener for when the add button is pressed
// var callsTotal = 0;
// var smsTotal = 0;
//addToBillBtn.addEventListener("click",textBillTotal);
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var textFunc = Bill1();

function textBillTotal(){
 // get a reference to the template script tag
        var templateSource = document.querySelector(".templateBill").innerHTML;
    
        // compile the template
        var userTemplate = Handlebars.compile(templateSource);
        
    textFunc.billTotal1(billTypeTextVal.value);
    //  callTotalOne.innerHTML = textFunc.getCallTotal()
     callTotalOne.innerHTML = userTemplate({ CallTotal: textFunc.getCallTotal()}) 
    //  smsTotalOne.innerHTML = textFunc.getSmsTotal()
     smsTotalOne.innerHTML = userTemplate({ SMSTotal: textFunc.getSmsTotal()})
    //  totalOne.innerHTML = textFunc.totalBill()
     totalOne.innerHTML = userTemplate({ Total: textFunc.totalBill()})

    if(textFunc.totalBill() > 30 && textFunc.totalBill() <= 49){
        if(red.classList.toggle("danger")){
            red.classList.remove("danger")
        }
        red.classList.add("warning");
    }
    if(textFunc.totalBill() >= 50){
        if(red.classList.toggle("warning")){
            red.classList.remove("warning")
        }
        red.classList.add("danger")
    }


       
    

}
addToBillBtn.addEventListener("click",textBillTotal);