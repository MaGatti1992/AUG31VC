({
	submitme : function(component, event, helper) 
    {
		component.set("v.empName","Mani Kanta");
        component.set("v.empAge",30);
        component.set("v.empSalary", 3500000);
	},
    clearme : function(component, event, helper) 
    {
		component.set("v.empName","");
        component.set("v.empAge","");
        component.set("v.empSalary", "");
	}
})