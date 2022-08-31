({
	addme : function(component, event, helper) 
    {
		var evt = event.getSource();
        var ank = evt.getLocalId();
        
        var a = component.find("firstvalue").get("v.value");
        var b = component.find("secondvalue").get("v.value");
        
        if(ank=="addition")
        {
          var r = parseInt(a)+parseInt(b);
            component.find("resultvalue").set("v.value", r);
        }
         if(ank=="substraction")
        {
          var r = parseInt(a)-parseInt(b);
            component.find("resultvalue").set("v.value", r);
        }
         if(ank=="multiplication")
        {
          var r = parseInt(a)*parseInt(b);
            component.find("resultvalue").set("v.value", r);
        }
	}
})