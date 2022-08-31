({
	subs : function(component, event, helper) {
        var a=component.get("v.num1");
        var b=component.get("v.num2");
        var re= (a - b);
        component.set("v.res",re);
		
	}
})