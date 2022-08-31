({
	show : function(component, event, helper) {
		var columns=[
            {label:'Name',fieldName:'Name',type:'text'},
            {label:'Phone',fieldname:'Phone',type:'phone'},
            {label:'Industry',fieldName:'Industry',type:'text'},
            {label:'Rating',fieldName:'Rating',type:'text'}
        ];
        component.set("v.column",columns);
        helper.myHelper(component);
	},
    sub : function(component, event, helper) {
        var acccc=component.get("v.accounts");
		var action=component.get("c.createAcc");
        action.setParams({"aa":acccc});
        action.setCallback(this,function(response){
            var state=response.getState();
            if(state==='SUCCESS'){
                helper.myHelper(component);
            }
        });
        $A.enqueueAction(action);
	}
})