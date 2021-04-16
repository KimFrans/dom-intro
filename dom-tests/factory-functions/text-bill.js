function Bill1(){
   var smsTotal1 = 0;
   var total1 = 0;
   var callTotal1 = 0;
    
    function billTotal1(billType1){
        console.log(billType1)
        if(billType1 == "sms"){

            smsTotal1 += 0.75
            total1 += 0.75
        }
        else if(billType1 == "call"){
            callTotal1 += 2.75;
            total1 += 2.75

        }
 
    }




    function totalBill(){
        return total1.toFixed(2)
    }

    function getSmsTotal(){

        return smsTotal1.toFixed(2)
    }

    function getCallTotal(){
        console.log(callTotal1)

        return callTotal1.toFixed(2)
    }

    return {
            billTotal1,
            totalBill,
            getSmsTotal,
            getCallTotal
    }
}