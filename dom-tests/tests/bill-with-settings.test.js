describe('bill with settings', function(){
    it('Should be able to set the call cost' , function(){
        var settingsBill = BillWithSettings();
        settingsBill.setCallCost(1.85)
        assert.equal(1.85, settingsBill.getCallCost())

        var settingsBill = BillWithSettings();
        settingsBill.setCallCost(1.85)
        assert.equal(1.85, settingsBill.getCallCost())
    });

    it('Should be able to set the sms cost' , function(){
        var settingsBill = BillWithSettings();
        settingsBill.setSmsCost(0.85)
        assert.equal(0.85, settingsBill.getSmsCost())

        var settingsBill = BillWithSettings();
        settingsBill.setSmsCost(0.75)
        assert.equal(0.75, settingsBill.getSmsCost())
    });

    it('Should be able to set the call and sms cost' , function(){
        var settingsBill = BillWithSettings();

        settingsBill.setSmsCost(0.85)
        settingsBill.setCallCost(1.75)
        assert.equal(0.85, settingsBill.getSmsCost())
        assert.equal(1.75, settingsBill.getCallCost())
    });

    it('Should be able to set the warning level' , function(){
        var settingsBill = BillWithSettings();

        settingsBill.setWarninglLevel(20)
        //settingsBill.setCallCost(1.75)
        assert.equal(20, settingsBill.getWarningLevel())
        //assert.equal(1.75, settingsBill.getCallCost())
    });

    it('Should be able to set the critical level' , function(){
        var settingsBill = BillWithSettings();

        settingsBill.setCriticalLevel(30)
        //settingsBill.setCallCost(1.75)
        assert.equal(30, settingsBill.getCriticalLevel())
        //assert.equal(1.75, settingsBill.getCallCost())
    });
    
    it('Should be able to use the call cost set' , function(){
        var settingsBill = BillWithSettings();
        
        settingsBill.setCriticalLevel(10);
        settingsBill.setCallCost(1.25);
        settingsBill.setSmsCost(0.75);

        settingsBill.radioButtonSettings("call");
        settingsBill.radioButtonSettings("call");
        settingsBill.radioButtonSettings("call");

        assert.equal(3.75, settingsBill.getTotalSettingsBill());
        assert.equal(3.75, settingsBill.getTotalCallCost());
        assert.equal(0.00, settingsBill.getTotalSmsCost());
    });

    it('Should be able to use the call cost set for 2 calls at 1.85 each' , function(){
        var settingsBill = BillWithSettings();

        settingsBill.setCriticalLevel(10)
        settingsBill.setCallCost(1.85)
        settingsBill.setSmsCost(0.75)

        settingsBill.radioButtonSettings("call");
        settingsBill.radioButtonSettings("call");

        assert.equal(3.70, settingsBill.getTotalSettingsBill())
        assert.equal(3.70, settingsBill.getTotalCallCost())
        assert.equal(0.00, settingsBill.getTotalSmsCost())
    });

    it('Should be able to send 2 sms at 0.85 each' , function(){
        var settingsBill = BillWithSettings();

        settingsBill.setCriticalLevel(10)
        settingsBill.setCallCost(1.85)
        settingsBill.setSmsCost(0.85)

        settingsBill.radioButtonSettings("sms");
        settingsBill.radioButtonSettings("sms");

        assert.equal(1.70, settingsBill.getTotalSettingsBill())
        assert.equal(0.00, settingsBill.getTotalCallCost())
        assert.equal(1.70, settingsBill.getTotalSmsCost())
    });

    it('Should be able to send 2 sms at 0.85 each and make 1 call at 1.35' , function(){
        var settingsBill = BillWithSettings();

        settingsBill.setCriticalLevel(10)
        settingsBill.setCallCost(1.35)
        settingsBill.setSmsCost(0.85)

        settingsBill.radioButtonSettings("call");
        settingsBill.radioButtonSettings("sms");
        settingsBill.radioButtonSettings("sms");

        assert.equal(3.05, settingsBill.getTotalSettingsBill())
        assert.equal(1.35, settingsBill.getTotalCallCost())
        assert.equal(1.70, settingsBill.getTotalSmsCost())
    });
    
});

describe('warning and critical level', function(){
    it('it should return a class name of "warning" if warning level is reached' , function(){
        var settingsBill = BillWithSettings();

        settingsBill.setCallCost(1.35)
        settingsBill.setSmsCost(0.85)
        settingsBill.setWarninglLevel(5)
        settingsBill.setCriticalLevel(10)
        
        settingsBill.radioButtonSettings("call");
        settingsBill.radioButtonSettings("call");
        settingsBill.radioButtonSettings("call");
        settingsBill.radioButtonSettings("call");

        assert.equal("warning", settingsBill.totalClassName1())

    });

    it('it should return a class name of "critical" if critical level is reached' , function(){
        var settingsBill = BillWithSettings();

        settingsBill.setCallCost(2.50)
        settingsBill.setSmsCost(0.85)
        settingsBill.setWarninglLevel(5)
        settingsBill.setCriticalLevel(10)

        settingsBill.radioButtonSettings("call");
        settingsBill.radioButtonSettings("call");
        settingsBill.radioButtonSettings("call");
        settingsBill.radioButtonSettings("call");
        

        assert.equal("critical", settingsBill.totalClassName())

    });

    it('it should stop the total call cost from increasing when the critical level is reached' , function(){
        var settingsBill = BillWithSettings();

        settingsBill.setCallCost(2.50)
        settingsBill.setSmsCost(0.85)
        settingsBill.setCriticalLevel(10)

        settingsBill.radioButtonSettings("call");
        settingsBill.radioButtonSettings("call");
        settingsBill.radioButtonSettings("call");
        settingsBill.radioButtonSettings("call");

        assert.equal("critical", settingsBill.totalClassName())
        assert.equal(10, settingsBill.getTotalSettingsBill())

    });


});