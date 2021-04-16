function radioButtonBill(){
    var totals = 0;
    var call = 0;
    var sms = 0;
    
    function radioButton(billItemTypeRadio1){
        if(billItemTypeRadio1 === "call"){
            call += 2.75
            totals += 2.75
        }
        if(billItemTypeRadio1 === "sms"){
            sms += 0.75
            totals += 0.75
        }
    }


    function getSms(){
        return sms.toFixed(2)
    }

    function getCall(){
        return call.toFixed(2)
    }

    function GrandTotal(){
        return totals.toFixed(2)
    }
    return {
        radioButton,
        getSms,
        getCall,
        GrandTotal,
    }

}

