import { LightningElement, track } from 'lwc';
import searchacc from '@salesforce/apex/lwctraining_createAccount.getAccount';
import creteacc from '@salesforce/apex/lwctraining_createAccount.insertAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'

export default class CreateAccount extends LightningElement {
    searchstr;
    @track errmsg;
    @track accounts;
    AccountId;

    //Binding in LWC input is not bidirectional
    genericOnChange(event){
        this[event.target.name] = event.target.value;
    }

    //To Search for the account using apex method
    handleGetAccounts() {
        console.log('Searching for account:' + this.searchstr);
        searchacc({ accname: this.searchstr })
            .then(result => {
                console.log('Result from Search:' + result);
                this.accounts = result;
            })
            .catch(error => {
                this.errmsg = error;
            })
    }

    //To Create an account using the searchstr
    handleCreateAccounts() {
        console.log('Creating account:' + this.searchstr);
        creteacc({ accname: this.searchstr })
            .then(result => {
                this.AccountId = result;
                const event = new ShowToastEvent({
                    title: 'Success',
                    message: 'Account with Id ' + this.AccountId + ' Created',
                });
                this.dispatchEvent(event);
            })
            .catch(error => {
                this.errmsg = error;
            })
    }

    connectedCallback() {
        
    }

}