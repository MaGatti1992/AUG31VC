({
	create : function(component, event, helper) {
        var nme= component.get("v.accName");
        var phn = component.get("v.accPhone");
        var ind = component.get("v.accIndustry");
        var rat= component.get("v.accRating");
		var action = component.get("c.callAccount");
        console.log(nme);
        console.log(phn);
        action.setParams({"name":nme,"phone":phn,"rating":rat,"industry":ind});
        console.log('hi');
        action.setCallback(this,function(response){
                           var state=response.getState(); 
                            if(state==='SUCCESS'){
                                var result= response.getReturnValue();
                                component.set("v.flag",true);
                                component.set("v.accId",result);
                                
                                console.log(result);
                            }
                           });
        $A.enqueueAction(action);
        
	},
    cancel:function(component,event,helper){
        component.set("v.accName",null);
        component.set("v.accPhone",null);
        component.set("v.accIndustry");
        component.set("v.accRating");
        component.set("v.flag",false);
    }
})