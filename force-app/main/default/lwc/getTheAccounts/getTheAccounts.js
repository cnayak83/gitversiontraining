import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/lwctraining_fetchaccounts.getAccountList'
export default class GetTheAccounts extends LightningElement {
    @wire(getAccountList) accounts;

}