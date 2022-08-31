({
	colmeo : function(component, event, helper) 
    {
		component.set("v.columns",[
            {label:"Opportunity Name",fieldName:"Description",type:"text"},
            {label:"Opportunity Phone",fieldName:"Email__c",type:"text"},
            {label:"Opportunity By",fieldName:"CreatedById",type:"text"}
        ])		
	},
    getdet : function(component, event, helper) 
    {
		var evt=event.getParam("eid");
        var action=component.get("c.getOp");
        action.setParams({"oid":evt});
                          action.setCallback(this,function(response){
                          var state=response.getState();
                              if(state=='SUCCESS')
                              {
                                  var res=response.getReturnValue();
                                  component.set("v.john",res);
                              }
                         });  
        $A.enqueueAction(action);
	}
})