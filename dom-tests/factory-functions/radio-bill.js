function radioButtonBill(){
    var totals = 0;
    var call = 0;
    var sms = 0;
    
    function radioButton(billItemTypeRadio){
        if(billItemTypeRadio === "call"){
            call += 2.75
        }
        if(billItemTypeRadio === "sms"){
            sms += 0.75
        }
    }

    function GrandTotal(){
        totals = call + sms
        return {
            smsTotal : sms,
            callTotal : call,
            total : totals
        }
    }
    return {
        radioButton,
        GrandTotal,
    }

}

