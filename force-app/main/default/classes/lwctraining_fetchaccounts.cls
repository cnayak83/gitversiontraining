public class lwctraining_fetchaccounts {
    @AuraEnabled(cacheable=true) //This property ensures that LWC checks cache 1st before making a server call
    public static List<Account> getAccountList() {
        return [
            SELECT Id, Name
            FROM Account
            LIMIT 10
        ];
    }
}