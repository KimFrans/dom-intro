describe('text input bill', function(){
    it('Should get the type of bill and display the total of the item(s)' , function(){
        var ofwhat = Bill1()
        ofwhat.billTotal1('sms')
        ofwhat.billTotal1('call')
        
        assert.equal(0.75, ofwhat.getTotal1().smsTotal  )
        assert.equal(2.75, ofwhat.getTotal1().callTotal)
        assert.equal(3.50, ofwhat.getTotal1().total)
    });

    it('Should get the type of bill and display the total of the item(s)' , function(){
        var test = Bill1()
        test.billTotal1('sms')
        test.billTotal1('sms')
        test.billTotal1('sms')
        
        assert.equal(2.25, test.getTotal1().smsTotal  )
        assert.equal(2.25, test.getTotal1().total)
    });

    it('Should get the type of bill and display the total of the item(s)' , function(){
        var callLog = Bill1()
        callLog.billTotal1('call')
        callLog.billTotal1('call')
        callLog.billTotal1('call')
        
        assert.equal(8.25, callLog.getTotal1().callTotal)
        assert.equal(8.25, callLog.getTotal1().total)
    });

    it('Should get the type of bill and display the total of the item(s)' , function(){
        var mixed = Bill1()
        mixed.billTotal1('call')
        mixed.billTotal1('sms')
        mixed.billTotal1('call')
        mixed.billTotal1('sms')
        
        assert.equal(1.50, mixed.getTotal1().smsTotal  )
        assert.equal(5.50, mixed.getTotal1().callTotal)
        assert.equal(7.00, mixed.getTotal1().total)
    });



}); 
