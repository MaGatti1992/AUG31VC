public class AccountRelatedRecord
{
	public void RelatedRecordCreation()
    {
        Account accRecord = new Account();
        accRecord.Name = 'Raj Shekhar';
        insert accRecord;
        
        if(accRecord.Id != null)
        {
            Contact conRecord = new Contact();
            conRecord.LastName = 'Manikanta';
            conRecord.AccountId = accRecord.Id;
            Insert conRecord;
        }
    }
}