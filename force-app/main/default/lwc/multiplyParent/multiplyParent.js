import { LightningElement, track } from 'lwc';

export default class MultiplyParent extends LightningElement {
 
parentdata = 14;
@track parentrecresult;

//Binding in LWC input is not bidirectional
genericOnChange(event){
this[event.target.name] = event.target.value;
}

handleMultiplyParent(event){
    const factor = event.detail;
    console.log('Received Event Multiply: ' + factor);
    this.parentrecresult = this.parentdata * factor;
    console.log('Result is:' + this.parentrecresult);
}

}