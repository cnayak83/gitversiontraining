import { LightningElement } from 'lwc';

export default class MultiplyChild extends LightningElement {

    //Child data 
    childdata = 12;

    //Binding in LWC input is not bidirectional
    genericOnChange(event) {
        this[event.target.name] = event.target.value;
    }

    //Fire the Custom Event Multiply from Child
    handleMultiplyChild() {
        console.log('Multiply with ' + this.childdata + ' Firing Multiply event from Child');
        this.dispatchEvent(new CustomEvent('multiply', {
            detail: this.childdata
        }));
    }

}