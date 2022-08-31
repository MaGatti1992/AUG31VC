({
	getDet : function(component, event, helper)
    {
		var clms=[
            {label:'Account Name', displayName:'Name', type:'text'},
            {label:'Account Phone', displayName:'Phone', type:'text'},
            {label:'Account Industry', displayName:'Industry', type:'text'},
            {label:'Account Rating', displayName:'Rating', type:'text'}
        ];
        component.set("v.bcolumns",clms);
	},
    findOut : function(component, event, helper) 
    {
		var cAcc = event.getParam("eAcc");
        var aaa=component.get("v.bAcc");
        aaa.push(cAcc);
         component.set("v.bAcc",aaa);
        
	}
})