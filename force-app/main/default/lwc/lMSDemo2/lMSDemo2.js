import { LightningElement, wire, track } from 'lwc';
import { publish, subscribe, unsubscribe, MessageContext } from 'lightning/messageService';
import LMSChannel1 from '@salesforce/messageChannel/LMSChannel1__c';
export default class LMSDemo2 extends LightningElement {
    
    @track msgrcvd; //message received
    @track currentVal; //current value in this component
    subscription = null;

    //Binding in LWC input is not bidirectional
    genericOnChange(event){
        this[event.target.name] = event.target.value;
    }

    @wire(MessageContext) messageContext;

    //Subscribe to messageChannel when component renders
    connectedCallback(){
    this.subscription = subscribe(
        this.messageContext,
        LMSChannel1,
        (message) => this.handleMessage(message)
      );
    }    

    //unsubscribe when component destroys
    disconnectedCallback() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }


    //what to do with message received
    handleMessage(message) {
        console.log('lmsDemo2: message received:' + JSON.stringify(message));
        if(message.FromWhom == 'lmsdemo1'){
            this.msgrcvd = message.ValuePass;
        }
      }

    //Publish method
    handleSendMsg(){
    const payload = { 
        ValuePass: this.currentVal,
        FromWhom: 'lmsdemo2'
        };
        publish(this.messageContext, LMSChannel1, payload);
    }

}