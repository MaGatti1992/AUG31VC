public class AccountDetailsInTableFormatController 
{
    Public List<Account> lstAccounts{Set;get;}
    public AccountDetailsInTableFormatController ()
    {
        lstAccounts = new List<Account>();
        lstAccounts = [Select id, Name, rating, industry, annualRevenue, phone, fax, type, ownership, Active__c
                                                    from Account
                                                    order by Name];
    }
}