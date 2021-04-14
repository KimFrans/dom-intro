function calculateButton(billString){

    var total = 0;
    //var billTotal = document.querySelector(".billTotal");
    //var billString = " ";  //document.querySelector(".billString").value;
    var split = billString.split(',');
    //var row = document.querySelector(".billTotal");
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
    
    return round;
}