// get a reference to the sms or call radio buttons
//var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings")
// get refences to all the settings fields

//get a reference to the add button
var addButton = document.querySelector(".add-Set")
var callTotalSettings = document.querySelector(".callTotalSettings")
var smsTotalSettings = document.querySelector(".smsTotalSettings")
var totalSettings = document.querySelector(".totalSettings")
//get a reference to the 'Update settings' button
var updateSettings = document.querySelector(".updateSettings")
var grandTotal = document.querySelector(".grandTotal")
var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings")
// create a variables that will keep track of all the settings
// var callCost = 0;
// var smsCost = 0;
// var warningLevel = 0;
// var criticalLevel = 0;
// create a variables that will keep track of all three totals.
// var callTotalThree = 0;
// var smsTotalThree = 0;
// var totalThree = 0;
//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
var settingsRadioFunc = BillWithSettings()

function settingsAddButtonBill() {
    //   var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings")
    var checkedRadioButton3 = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    settingsRadioFunc.radioButtonSettings(checkedRadioButton3.value)
    console.log(checkedRadioButton3.value)
    
    settingsRadioFunc.getCallCost()
    //console.log(settingsRadioFunc.getCallCost())
    settingsRadioFunc.getSmsCost()
    //console.log(settingsRadioFunc.getSmsCost())
    settingsRadioFunc.getWarningLevel()
    //console.log(settingsRadioFunc.getWarningLevel())
    settingsRadioFunc.getCriticalLevel()
    //console.log(settingsRadioFunc.getCriticalLevel())
    // var checkedRadioButton3 = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    // settingsRadioFunc.radioButtonSettings(checkedRadioButton3.value)
    // console.log(checkedRadioButton3.value)
    // if (checkedRadioButton) {
    //     var billItemTypeWithSettings = checkedRadioButton.value

    //     if (totalThree < criticalLevel) {
    //         if (billItemTypeWithSettings === "call") {
    //             callTotalThree += callCost
    //             totalThree += callCost;
    //         }

    //         if (billItemTypeWithSettings === "sms") {
    //             smsTotalThree += smsCost
    //             totalThree += smsCost
    //         }
    //     }

    // }
    callTotalSettings.innerHTML = settingsRadioFunc.getTotalCallCost()
    smsTotalSettings.innerHTML = settingsRadioFunc.getTotalSmsCost()
    //totalThree = callTotalThree + smsTotalThree;
    totalSettings.innerHTML = settingsRadioFunc.getTotalSettingsBill()

    // var warningLevelSetting = document.querySelector(".warningLevelSetting").value
    // var criticalLevelSetting = document.querySelector(".criticalLevelSetting").value
    // warningLevel = parseFloat(warningLevelSetting)
    // criticalLevel = parseFloat(criticalLevelSetting)
    

    if (settingsRadioFunc.getTotalSettingsBill() < settingsRadioFunc.getWarningLevel()) {
        grandTotal.classList.remove("danger")
        grandTotal.classList.remove("warning")
    }


    if (settingsRadioFunc.getTotalSettingsBill() >= settingsRadioFunc.getWarningLevel()) {
        grandTotal.classList.add("warning")
        grandTotal.classList.remove("danger")

    }
    if (settingsRadioFunc.getTotalSettingsBill() >= settingsRadioFunc.getCriticalLevel()) {
        grandTotal.classList.add("danger")
        grandTotal.classList.remove("warning")

    }

}
addButton.addEventListener("click", settingsAddButtonBill)

function settingsBill() {
    var callCostSetting = document.querySelector(".callCostSetting").value
    var smsCostSetting = document.querySelector(".smsCostSetting").value
    var warningLevelSetting = document.querySelector(".warningLevelSetting").value
    var criticalLevelSetting = document.querySelector(".criticalLevelSetting").value

    settingsRadioFunc.setCallCost(callCostSetting)
    //console.log(settingsRadioFunc.getCallCost())
    settingsRadioFunc.setSmsCost(smsCostSetting)
    //console.log(settingsRadioFunc.getSmsCost())
    settingsRadioFunc.setWarninglLevel(warningLevelSetting)
    //console.log(settingsRadioFunc.getWarningLevel())
    settingsRadioFunc.setCriticalLevel(criticalLevelSetting)
    //console.log(settingsRadioFunc.getCriticalLevel())

    // callCost = parseFloat(callCostSetting)
    // smsCost = parseFloat(smsCostSetting)
    // warningLevel = parseFloat(warningLevelSetting)
    // criticalLevel = parseFloat(criticalLevelSetting)

    // if (totalThree < warningLevel) {
    //     grandTotal.classList.remove("danger")
    //     grandTotal.classList.remove("warning")
    // }


    // if (totalThree >= warningLevel) {
    //     grandTotal.classList.add("warning")
    //     grandTotal.classList.remove("danger")

    // }
    // if (totalThree >= criticalLevel) {
    //     grandTotal.classList.add("danger")
    //     grandTotal.classList.remove("warning")

    // }
}
updateSettings.addEventListener("click", settingsBill)