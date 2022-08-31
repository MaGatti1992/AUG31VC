({
	insertInfo : function(component, event, helper) 
    {
		var sob = component.get("v.sAcc");
        var action = component.get("c.SObjectIns");	
        action.setParams({"acc":sob});
        
        action.setCallback(this,function(response){
            										var state=response.getState();
            										if(state=='SUCCESS')
                                                    {
                                                        var res=response.getReturnValue();
                                                        console.log(res);
                                                        component.set("v.sAcc","");
                                                    }
            										else
                                                    {
                                                        alert('Try again');
                                                    }
            
        											});
        $A.enqueueAction(action);
	},
    cancelInfo : function(component, event, helper) 
    {
        component.set("v.sAcc","");
    }
   
})