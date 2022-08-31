({
	getcolumns : function(component, event, helper) {
		 var clms = [
            {label:"Account Name",fieldName:"Name",type:"Text"},
            {label:"Account Phone",fieldName:"Phone",type:"Text"},
            {label:"Account Industry",fieldName:"Industry",type:"Text"},
            {label:"Account Rating",fieldName:"Rating",type:"Text"}
        ];
		component.set("v.columns",clms);
	},
    getDtls : function(component, event, helper) 
    {
		var searchtxt = component.get("v.sText");
        var action = component.get("c.srchdata");
        action.setParams({"sctext":searchtxt});
                          
        action.setCallback(this,function(response){
                          var state = response.getState();
                          if(state == 'SUCCESS')
                          {
                          var res = response.getReturnValue();
                          component.set("v.sAcc",res);
                          
                          }
            				
                         });
        $A.enqueueAction(action);
	}
})