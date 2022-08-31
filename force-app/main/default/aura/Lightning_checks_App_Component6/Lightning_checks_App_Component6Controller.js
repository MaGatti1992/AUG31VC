({
	add : function(component, event, helper) {
        var check =event.getSource().getLocalId();
        var a = component.find("aval").get("v.value");
        var b = component.find("bval").get("v.value");
        if(check=='adds')
        {
         	var c =parseInt(a)+parseInt(b);   
        }
        else if(check=='muls')
        {
            var c =parseInt(a)*parseInt(b);
        }
        component.find("res").set("v.value",c);
	}   
})