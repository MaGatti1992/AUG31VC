({
	colme : function(component, event, helper) 
    {
		component.set("v.columns",[
            {label:"Contact Name",fieldName:"Name",type:"text"},
            {label:"Contact Phone",fieldName:"Phone",type:"text"},
            {label:"Contact Description",fieldName:"Description",type:"text"}
        ])		
	},
    getdet : function(component, event, helper) 
    {
		var evt=event.getParam("eid");
        var action=component.get("c.getCon");
        action.setParams({"cid":evt});
        action.setCallback(this,function(response){
         var state = response.getState();
         if(state=='SUCCESS')
          {
            var result= response.getReturnValue();
            component.set("v.jack",result);
          }
        });  
        $A.enqueueAction(action);
	}
})