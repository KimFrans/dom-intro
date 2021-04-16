function calculateButton(bbillString){

    var total = 0;
    
    var split = bbillString.split(',');
    
    for(var i=0;i<split.length;i++){
        var trimSplit = split[i].trim();
        if(trimSplit === "call"){
            total+= 2.75;
        }
        else if(trimSplit === "sms"){
            total+= 0.65;
        }
    }  
    var round = total.toFixed(2); 

    function finalTotal(){
        return {
            round : round
        }
    }
    return {
        finalTotal
    }
}