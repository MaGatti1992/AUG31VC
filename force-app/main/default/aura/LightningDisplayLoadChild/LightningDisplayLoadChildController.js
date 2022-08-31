({
	submitRecs : function(component, event, helper) 
    {
		
        var nacc=component.get("v.acc");
        var action=component.get("c.methOne");
        action.setParams({"acc":nacc});
        action.setCallback(this,function(response){
            var state=response.getState();
            if(state=='SUCCESS')
            {
                var res=response.getReturnValue();
                if(res!='Failed')
                {
                console.log(res);
                var evt=component.getEvent("mani");
                evt.fire();
                }
                else
                {
                    alert('Account creation failed');
                }
            }
            
        });
        $A.enqueueAction(action);
	},
    clearRec : function(component, event, helper) 
    {
        component.set("v.acc",{});
	}
})