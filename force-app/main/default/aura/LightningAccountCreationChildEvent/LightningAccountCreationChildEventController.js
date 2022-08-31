({
	createAccount : function(component, event, helper)
    {
		var soAcc = component.get("v.sAccount");
        var evt = component.getEvent("accEvent");
        evt.setParams({"eAcc":soAcc});
        evt.fire();
	},
    clearScreen : function(component, event, helper)
    {
		component.set("v.sAccount","");
	}
})