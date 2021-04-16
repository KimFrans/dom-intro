describe('calculate bill', function(){
    it('Should get the type of bill and calculate the amount of the total bill' , function(){
        var bill = calculateButton("call, sms, call, sms")

        assert.equal(6.80, bill.finalTotal().round)
    });

    it('Should get the type of bill and calculate the amount of the total bill' , function(){
        var bill = calculateButton("call, sms")
        assert.equal(3.40, bill.finalTotal().round)
    });

    it('Should get the type of bill and calculate the amount of the total bill' , function(){
        var bill = calculateButton("call, call, call, sms, sms")
        assert.equal(9.55, bill.finalTotal().round)
    });



});
