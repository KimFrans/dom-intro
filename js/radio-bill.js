// get a reference to the sms or call radio buttons
//var billItemTypeRadio = document.querySelector(".billItemTypeRadio")
//get a reference to the add button
var radioBillAddBtn = document.querySelector(".radioBillAddBtn")
var callTotalTwo = document.querySelector(".callTotalTwo")
var smsTotalTwo = document.querySelector(".smsTotalTwo")
var totalTwo = document.querySelector(".totalTwo") 
var orange = document.querySelector(".orange")
//create a variable that will keep track of the total bill
var total = 0;
var call = 0;
var sms = 0;
//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
function radioButtonBill(){
    var billItemTypeRadio = document.querySelector(".billItemTypeRadio")
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if(checkedRadioBtn){
        var billItemTypeRadio = checkedRadioBtn.value 
        if(billItemTypeRadio === "call"){
            call += 2.75
        }
        if(billItemTypeRadio === "sms"){
            sms += 0.75
        }
    }

    callTotalTwo.innerHTML = call.toFixed(2)
    smsTotalTwo.innerHTML = sms.toFixed(2)
    var total = call + sms
    totalTwo.innerHTML = total.toFixed(2)

    if(total >= 30 && total <= 49){
        if(orange.classList.toggle("danger")){
            orange.classList.remove("danger")
        }
        orange.classList.add("warning")
    }
    if(total > 50){
        if(orange.classList.toggle("warning")){
            orange.classList.remove("warning")
        }
        orange.classList.add("danger")
    }

}
radioBillAddBtn.addEventListener("click",radioButtonBill )
