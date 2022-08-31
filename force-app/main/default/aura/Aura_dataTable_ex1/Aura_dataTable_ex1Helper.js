({
	myHelper : function(component) {
		var action=component.get("c.getAcc");
        action.setCallback(this,function(response){
            var state=response.getState();
            if(state==='SUCCESS'){
                component.set("v.con",response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
	}
})