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
    
	getData : function(component, event, helper) {
        var clms = [
            {label:"Account Name",fieldName:"Name",type:"Text"},
            {label:"Account Phone",fieldName:"Phone",type:"Text"},
            {label:"Account Industry",fieldName:"Industry",type:"Text"},
            {label:"Account Rating",fieldName:"Rating",type:"Text"},
        ];
		component.set("v.columns",clms);
	},  
})