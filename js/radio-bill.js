// get a reference to the sms or call radio buttons
//var billItemTypeRadio = document.querySelector(".billItemTypeRadio")
//get a reference to the add button
var radioBillAddBtn = document.querySelector(".radioBillAddBtn")
var callTotalTwo = document.querySelector(".callTotalTwo")
var smsTotalTwo = document.querySelector(".smsTotalTwo")
var totalTwo = document.querySelector(".totalTwo") 
var orange = document.querySelector(".orange")
var billItemTypeRadio = document.querySelector(".billItemTypeRadio")
// var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
//create a variable that will keep track of the total bill
// var total = 0;
// var call = 0;
// var sms = 0;
//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var radioFunc = radioButtonBill()

function radioButtonBill1(){
    //var billItemTypeRadio = document.querySelector(".billItemTypeRadio")
    var checkedRadioBtn11 = document.querySelector("input[name='billItemType']:checked");
    radioFunc.radioButton(checkedRadioBtn11.value)
    // radioFunc.radioButtonSms(checkedRadioBtn11.value)
    console.log(checkedRadioBtn11.value)
    // if(checkedRadioBtn){
    //     var billItemTypeRadio = checkedRadioBtn.value 
    //     if(billItemTypeRadio === "call"){
    //         call += 2.75
    //     }
    //     if(billItemTypeRadio === "sms"){
    //         sms += 0.75
    //     }
    // }

    callTotalTwo.innerHTML = radioFunc.getCall()
    smsTotalTwo.innerHTML = radioFunc.getSms()
    //var total = call + sms
    totalTwo.innerHTML = radioFunc.GrandTotal()

    if(radioFunc.GrandTotal() >= 30 && radioFunc.GrandTotal() <= 49){
        if(orange.classList.toggle("danger")){
            orange.classList.remove("danger")
        }
        orange.classList.add("warning")
    }
    if(radioFunc.GrandTotal() > 50){
        if(orange.classList.toggle("warning")){
            orange.classList.remove("warning")
        }
        orange.classList.add("danger")
    }

}
radioBillAddBtn.addEventListener("click",radioButtonBill1 )
