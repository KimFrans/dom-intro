describe('radio button bill', function(){
    it('Should get the type of bill selected and display the amount of the bill selected as well as the total bill' , function(){
        var radio = radioButtonBill()
        radio.radioButton("sms")
        
        assert.equal(0.75, radio.GrandTotal().smsTotal  )
        assert.equal(0.75, radio.GrandTotal().total)
    });

    it('Should get the type of bill selected and display the amount of the bill selected as well as the total bill' , function(){
        var radio = radioButtonBill()
        radio.radioButton("call")
        
        assert.equal(2.75, radio.GrandTotal().callTotal  )
        assert.equal(2.75, radio.GrandTotal().total)
    });

    it('Should get the type of bill selected and display the amount of the bill selected as well as the total bill' , function(){
        var radio = radioButtonBill()
        radio.radioButton("call")
        radio.radioButton("call")
        radio.radioButton("call")
        radio.radioButton("call")
        radio.radioButton("call")
        
        assert.equal(13.75, radio.GrandTotal().callTotal  )
        assert.equal(13.75, radio.GrandTotal().total)
    });

    it('Should get the type of bill selected and display the amount of the bill selected as well as the total bill' , function(){
        var radio = radioButtonBill()
        radio.radioButton("sms")
        radio.radioButton("call")
        radio.radioButton("sms")
        radio.radioButton("call")
        radio.radioButton("sms")
        
        assert.equal(2.25, radio.GrandTotal().smsTotal  )
        assert.equal(5.50, radio.GrandTotal().callTotal  )
        assert.equal(7.75, radio.GrandTotal().total)
    });

}); 