describe('text input bill', function(){
    it('Should get the type of bill and display the total of the item(s)' , function(){
        var phoneLog = Bill1()
        phoneLog.billTotal1('sms')
        phoneLog.billTotal1('call')
        
        assert.equal(0.75, phoneLog.getSmsTotal())
        assert.equal(2.75, phoneLog.getCallTotal())
        assert.equal(3.50, phoneLog.totalBill())
    });

    it('Should get the type of bill and display the total of the item(s)' , function(){
        var smsLog = Bill1()
        smsLog.billTotal1('sms')
        smsLog.billTotal1('sms')
        smsLog.billTotal1('sms')
        
        assert.equal(2.25, smsLog.getSmsTotal())
        assert.equal(2.25, smsLog.totalBill())
    });

    it('Should get the type of bill and display the total of the item(s)' , function(){
        var callLog = Bill1()
        callLog.billTotal1('call')
        callLog.billTotal1('call')
        callLog.billTotal1('call')
        
        assert.equal(8.25, callLog.getCallTotal())
        assert.equal(8.25, callLog.totalBill())
    });

    it('Should get the type of bill and display the total of the item(s)' , function(){
        var mixed = Bill1()
        mixed.billTotal1('call')
        mixed.billTotal1('sms')
        mixed.billTotal1('call')
        mixed.billTotal1('sms')
        
        assert.equal(1.50, mixed.getSmsTotal())
        assert.equal(5.50, mixed.getCallTotal())
        assert.equal(7.00, mixed.totalBill())
    });



}); 
