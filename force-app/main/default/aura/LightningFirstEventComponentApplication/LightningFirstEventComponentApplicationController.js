({
	checkMe : function(component, event, helper) 
    {
		var ssName=event.getParam("studentName");
        var ssNumber=event.getParam("studentNumber");
        alert('This is the application.... the name is '+ssName+' and his number is '+ssNumber);
	}
})