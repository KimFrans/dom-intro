//get a reference to the calculate button
// var billStringElement = document.querySelector(".billString");
var calculateBtn = document.querySelector(".calculateBtn");
var totalCal = document.querySelector(".total")
//get a reference to the billTotal element
// var billTotal = document.querySelector(".billTotal");
//get a reference to the billString
//var billString = document.querySelector(".billString");
//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element
function calculateButton(){
    var total = 0;
    var billTotal = document.querySelector(".billTotal");
    var billString = document.querySelector(".billString").value;
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
    billTotal.innerHTML = round;
    if(round <= 20){
        totalCal.classList.remove("warning")
        totalCal.classList.remove("danger")
    }
    if(round > 20){
        totalCal.classList.add("warning");
        totalCal.classList.remove("danger")
    }
    if(round > 30){
        totalCal.classList.add("danger");
        totalCal.classList.remove("warning")
    }
    // var round = total.toFixed(2);
    // billTotal.innerHTML = round;
}
//link the function to a click event on the calculate button
calculateBtn.addEventListener("click", calculateButton);

