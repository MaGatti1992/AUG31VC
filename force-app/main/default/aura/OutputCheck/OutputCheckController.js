({
	add : function(component, event, helper)
    {
		var a = component.get("v.aval");
        var b = component.get("v.bval");
        var R = a+b;
        component.set("v.result",R);
	},
    sub : function(component, event, helper)
    {
		var a = component.get("v.aval");
        var b = component.get("v.bval");
        var R = a-b;
        component.set("v.result",R);
	},
    mul : function(component, event, helper)
    {
		var a = component.get("v.aval");
        var b = component.get("v.bval");
        var R = a*b;
        component.set("v.result",R);
	}
})