({
	add : function(component, event, helper) {
        var a = component.get("v.aval");
        var b = component.get("v.bval");
        var eve=event.getSource().get("v.name");
        
        if(eve == 'one')
        {
            var v=parseInt(a)+parseInt(b);
        }
        else if(eve == 'two')
        {
            var v=parseInt(a)*parseInt(b);
        }
        else
        {
            var v=parseInt(a)-parseInt(b);
        }
        component.set("v.val",v);
		
	}
})