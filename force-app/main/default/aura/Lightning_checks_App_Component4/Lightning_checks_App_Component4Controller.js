({
	addme : function(component, event, helper) {
		var a = component.get("v.aval");
        var b = component.get("v.bval");
        var re = parseInt(a)+parseInt(b);
        component.set("v.res",re);
	},
    multiplyme : function(component, event, helper) {
		var a = component.get("v.aval");
        var b = component.get("v.bval");
        var re = parseInt(a)*parseInt(b);
        component.set("v.res",re);
	}
})