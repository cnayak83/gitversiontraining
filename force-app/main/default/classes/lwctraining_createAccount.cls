public class lwctraining_createAccount {
   
    //Search the accounts
    @AuraEnabled(cacheable=true) //This property ensures that LWC checks cache 1st before making a server call
    public static List<Account> getAccount(string accname) {
        if(string.isBlank(accname)){return null;}
        return [
            SELECT Id, Name
            FROM Account
            where name = :accname
        ];
    }
    
    //Create the account and return the ID
    @auraEnabled
    public static Id insertAccount(string accname) {
        if(string.isBlank(accname)){return null;}
        account a = new account(); a.name=accname;
        insert a;
        return a.Id;
    }
}