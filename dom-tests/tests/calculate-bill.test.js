describe('calculate bill', function(){
    it('Should get the type of bill and calculate the amount of the total bill' , function(){
        assert.equal(6.80, calculateButton("call, sms, call, sms"))
    });

    it('Should get the type of bill and calculate the amount of the total bill' , function(){
        assert.equal(3.40, calculateButton("call, sms"))
    });

    it('Should get the type of bill and calculate the amount of the total bill' , function(){
        assert.equal(9.55, calculateButton("call, call, call, sms, sms"))
    });



});
