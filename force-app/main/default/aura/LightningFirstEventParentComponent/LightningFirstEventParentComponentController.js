({
	showMe : function(component, event, helper) 
    {
		var studName= event.getParam("studentName");
        var studNumber= event.getParam("studentNumber");
        alert('This is parent.. the name is '+studName+' and the number is '+studNumber);
	}
})