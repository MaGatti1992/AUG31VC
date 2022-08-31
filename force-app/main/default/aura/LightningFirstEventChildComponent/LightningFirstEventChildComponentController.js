({
	submitMe : function(component, event, helper) 
    {
		var stuName=component.get("v.stName");
        var stuNumber=component.get("v.stNumber");
        
        var evt=component.getEvent("nickName");
        evt.setParams({"studentName":stuName,"studentNumber":stuNumber});
        evt.fire();
	}
})