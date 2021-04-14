//var smsTotal1 = 0;
function Bill1(){
   var smsTotal1 = 0;
   var total1 = 0;
   var callTotal1 = 0;
    
    function billTotal1(billType1){
        if(billType1 == "sms"){
            smsTotal1 += 0.75;
        }
        if(billType1 == "call"){
            callTotal1 += 2.75;

        }
 
    }

    function getTotal1(){
        total1 = smsTotal1 + callTotal1
        return {
            smsTotal : smsTotal1,
            callTotal : callTotal1,
            total : total1
        }
    }

    return {
            billTotal1,
            getTotal1,
    }
}