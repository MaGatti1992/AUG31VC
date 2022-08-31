({
	searchMe : function(component, event, helper) 
    {
		var inp=component.get("v.anme");
        var inpu=component.get("v.aindu");
        
        var action = component.get("c.accIns");
        action.setParams({"accName":inp,"accInd":inpu});
        action.setCallback(this,function(response){
            var state=response.getState();
            if(state=='SUCCESS')
            {
                var res= response.getReturnValue();
                var evt = $A.get("e.c:LightningRelatedACOEvent");
                evt.setParams({"eid":res});
                evt.fire();  
            }
        });
        $A.enqueueAction(action);
	},
    clearMe : function(component, event, helper) 
    {
        component.set("v.anme",{});
        component.set("v.aindu",{});
	}
})