function BillWithSettings(){
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;
    var callCostTotal = 0;
    var smsCostTotal = 0;
    var totalSetting = 0;
    var callRadioSetting = 0;
    var smsRadioSetting = 0;

    function setCallCost(callCost){
        theCallCost = parseFloat(callCost)
    }

    function getCallCost(){
        return theCallCost;
    }


    function setSmsCost(smsCost){
        theSmsCost =  parseFloat(smsCost)
    }

    function getSmsCost(){
        return theSmsCost;
    }

    function setWarninglLevel(warningLevel){
        theWarningLevel = parseFloat(warningLevel)
    }

    function getWarningLevel(){
        return theWarningLevel;
    }

    function setCriticalLevel(criticalLevel){
        theCriticalLevel = parseFloat(criticalLevel)
    }

    function getCriticalLevel(){
        return theCriticalLevel;
    }

    function makeCall(){
        if(!hasReachedCriticalLevel()){
            callCostTotal += theCallCost
        }  
    }

    // function getTotalCost(){
    //     return (callCostTotal + smsCostTotal).toFixed(2)
    // }

    function getTotalCallCost(){
        return callRadioSetting.toFixed(2); 
    }

    function getTotalSmsCost(){
        return smsRadioSetting.toFixed(2);
    }

    function sendSms(){
        if(!hasReachedCriticalLevel()){
            smsCostTotal += theSmsCost
        }
    }
    
    function hasReachedCriticalLevel(){
        getTotalSettingsBill() >= getCriticalLevel()
    }

    function totalClassName1(){
        if(getTotalSettingsBill() >= getWarningLevel()){
            return "warning"
        }
    }


    function totalClassName(){
        if(hasReachedCriticalLevel){
            return "critical"
        }
        // if(getTotalCost() >= getWarningLevel()){
        //     return "warning"
        // }
    }

    function radioButtonSettings(radioTypeSettings){
        if(totalSetting < theCriticalLevel){
            if(radioTypeSettings === "call"){
                callRadioSetting += theCallCost
                totalSetting += theCallCost
            }
            if(radioTypeSettings === "sms"){
                smsRadioSetting += theSmsCost
                totalSetting += theSmsCost
            }
        }
        
    }

    function getTotalSettingsBill(){
        console.log("callRa " + typeof smsRadioSetting)
        return totalSetting.toFixed(2)
    }


    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        getWarningLevel,
        setWarninglLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeCall,
        // getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        sendSms,
        totalClassName,
        hasReachedCriticalLevel,
        totalClassName1,
        radioButtonSettings,
        getTotalSettingsBill,
    }
}