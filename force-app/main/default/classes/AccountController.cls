public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static list<Account> getAccountList(){

        return [SELECT Id, Name, Type, Industry from Account LIMIT 5];
    }

    @AuraEnabled(cacheable=true)
    public static list<Account> filterAccountTypeType(String type){

        return [SELECT Id, Name, Type, Industry from Account WHERE Type =:type LIMIT 5];
    }

    @AuraEnabled(cacheable=true)
    public static list<Account> findAccounts(String searchKey){

        String key ='%'+searchKey+'%';
        return [SELECT Id, Name, Type, Industry from Account WHERE Name LIKE :key LIMIT 5];
    }

}
