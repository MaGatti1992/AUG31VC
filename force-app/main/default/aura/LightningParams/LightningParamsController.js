({
	accInsert : function(component, event, helper) 
    {
		var bname= component.get("v.aName");
        var bphone= component.get("v.aPhone");
        var bindustry= component.get("v.aIndustry");
        var brating= component.get("v.aRating");
        
        //calling the class method
        var action=component.get("c.withParams");
        //setting params to the class method
        action.setParams({"name":bname, "phone":bphone, "industry":bindustry, "rating":brating});
        //invoking the method
        action.setCallback(this,function(response){
            										var state = response.getState();
            										if(state=='SUCCESS')
                                                    {
                                                        var res=response.getReturnValue();
                                                        console.log(res);
                                                        component.set("v.aName","");
                                                        component.set("v.aPhone","");
                                                        component.set("v.aIndustry","");
                                                        component.set("v.aRating","");
                                                    }
        											});
        //enqueueing the method
        $A.enqueueAction(action);
	},
    clearInfo : function(component, event, helper) 
    {
		component.set("v.aName","");
        component.set("v.aPhone","");
        component.set("v.aIndustry","");
        component.set("v.aRating","");
	}
})