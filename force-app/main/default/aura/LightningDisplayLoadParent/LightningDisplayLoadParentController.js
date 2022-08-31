({
	onloadc : function(component, event, helper) 
    {
		var clms=[
            {label:"Account Name",fieldName:"Name",type:"text"},
            {label:"Account Phone",fieldName:"Phone",type:"text"},
            {label:"Account Industry",fieldName:"Industry",type:"text"},
            {label:"Account Rating",fieldName:"Rating",type:"text"}
        ];
            component.set("v.bcolumns",clms);
	},
    invokeMe : function(component, event, helper) 
    {
		var action= component.get("c.methTwo");
        action.setCallback(this,function(response){
            var state=response.getState();
            if(state=='SUCCESS')
            {
                var res=response.getReturnValue();
                component.set("v.acco",res);
            }
        });
        $A.enqueueAction(action);
	}
})