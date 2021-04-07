// get a reference to the sms or call radio buttons
var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings")
// get refences to all the settings fields

//get a reference to the add button
var addButton = document.querySelector(".add-Set")
var callTotalSettings = document.querySelector(".callTotalSettings")
var smsTotalSettings = document.querySelector(".smsTotalSettings")
var totalSettings = document.querySelector(".totalSettings")
//get a reference to the 'Update settings' button
var updateSettings = document.querySelector(".updateSettings")
var grandTotal = document.querySelector(".grandTotal")
// create a variables that will keep track of all the settings
var callCost = 0;
var smsCost = 0;
var warningLevel = 0;
var criticalLevel = 0;
// create a variables that will keep track of all three totals.
var callTotalThree = 0;
var smsTotalThree = 0;
var totalThree = 0;
//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
function radioButtonBill(){
    // var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings")
    var checkedRadioButton = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    console.log('Before IF')
    console.log(warningLevel)
    console.log(typeof (warningLevel))
    if(checkedRadioButton){
    //console.log('after IF')
        var billItemTypeWithSettings = checkedRadioButton.value 
    //console.log(billItemTypeWithSettings)
    

        if(billItemTypeWithSettings === "call"){
            if(totalThree + callCost <= criticalLevel){
                callTotalThree += callCost
                totalThree += callCost;
                console.log("inside")
            }
            // callTotalThree += callCost
            // totalThree += callCost;
            // console.log("inside")
        }
        if(billItemTypeWithSettings === "sms"){
            if(totalThree + smsCost <= criticalLevel){
                smsTotalThree += smsCost
                totalThree += smsCost
            }
            // smsTotalThree += smsCost
            // totalThree += callCost
            // console.log("inside sms")
        }
    }
    // console.log(callTotalThree)
    callTotalSettings.innerHTML = callTotalThree.toFixed(2)
    smsTotalSettings.innerHTML = smsTotalThree.toFixed(2)
    //totalThree = callTotalThree + smsTotalThree;
    totalSettings.innerHTML = totalThree.toFixed(2);

    var warningLevelSetting = document.querySelector(".warningLevelSetting").value
    var criticalLevelSetting = document.querySelector(".criticalLevelSetting").value
    warningLevel = parseFloat(warningLevelSetting)
    criticalLevel = parseFloat(criticalLevelSetting)

    if(totalThree < warningLevel){
        grandTotal.classList.remove("danger")
        grandTotal.classList.remove("warning")
    }
    

    if(totalThree >= warningLevel){
        grandTotal.classList.add("warning")
        grandTotal.classList.remove("danger")
        
    }
    if(totalThree >= criticalLevel){
        grandTotal.classList.add("danger")
        grandTotal.classList.remove("warning")
        
    }

}
addButton.addEventListener("click",radioButtonBill)

function settingsBill(){
    var callCostSetting = document.querySelector(".callCostSetting").value
    var smsCostSetting = document.querySelector(".smsCostSetting").value
    var warningLevelSetting = document.querySelector(".warningLevelSetting").value
    var criticalLevelSetting = document.querySelector(".criticalLevelSetting").value
    callCost = parseFloat(callCostSetting)
    smsCost = parseFloat(smsCostSetting)
    warningLevel = parseFloat(warningLevelSetting)
    criticalLevel = parseFloat(criticalLevelSetting)

    if(totalThree < warningLevel){
        grandTotal.classList.remove("danger")
        grandTotal.classList.remove("warning")
    }
    

    if(totalThree >= warningLevel){
        grandTotal.classList.add("warning")
        grandTotal.classList.remove("danger")
        
    }
    if(totalThree >= criticalLevel){
        grandTotal.classList.add("danger")
        grandTotal.classList.remove("warning")
        
    }
    
}
updateSettings.addEventListener("click", settingsBill)