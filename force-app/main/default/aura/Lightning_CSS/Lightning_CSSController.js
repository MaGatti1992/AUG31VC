({
	callMe : function(component, event, helper) {
		//Method Invocation from Apex class
		var action= component.get("c.callAccount");
        action.setParams({"name":"K Srinivasan", "rating":"Hot", "industry":"Banking"});
        //write the callback action 
        action.setCallback(this, function(response){
            //get state of response
           var state = response.getState();
            if(state==='SUCCESS'){
                //if success get return value
                var result=response.getReturnValue();
                console.log('id :'+result);
            }
        });
        $A.enqueueAction(action);
	}
})