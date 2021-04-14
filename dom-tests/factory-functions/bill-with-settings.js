function BillWithSettings(){
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;
    var callCostTotal = 0;
    var smsCostTotal = 0;

    function setCallCost(callCost){
        theCallCost = callCost
    }

    function getCallCost(){
        return theCallCost;
    }

    function setSmsCost(smsCost){
        theSmsCost = smsCost
    }

    function getSmsCost(){
        return theSmsCost;
    }

    function setWarninglLevel(warningLevel){
        theWarningLevel = warningLevel
    }

    function getWarningLevel(){
        return theWarningLevel;
    }

    function setCriticalLevel(criticalLevel){
        theCriticalLevel = criticalLevel
    }

    function getCriticalLevel(){
        return theCriticalLevel;
    }

    function makeCall(){
        if(!hasReachedCriticalLevel()){
            callCostTotal += theCallCost
        }  
    }

    function getTotalCost(){
        return callCostTotal + smsCostTotal
    }

    function getTotalCallCost(){
        return callCostTotal
    }

    function getTotalSmsCost(){
        return smsCostTotal;
    }

    function sendSms(){
        if(!hasReachedCriticalLevel()){
            smsCostTotal += theSmsCost
        }
    }
    
    function hasReachedCriticalLevel(){
        getTotalCost() >= getCriticalLevel()
    }

    function totalClassName1(){
        if(getTotalCost() >= getWarningLevel()){
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
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        sendSms,
        totalClassName,
        hasReachedCriticalLevel,
        totalClassName1
    }
}