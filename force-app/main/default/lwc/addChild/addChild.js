import { LightningElement, track, api } from 'lwc';

export default class AddChild extends LightningElement {

    childdata = 10;
    @track childrecresult;
    @api addthisnumber;

    //Binding in LWC input is not bidirectional
    genericOnChange(event) {
        this[event.target.name] = event.target.value;
    }

    @api
    addthenumbers(){
        console.log('Add the numbers called to add :' + this.childdata +  ' and ' + this.addthisnumber);
        this.childrecresult = parseInt(this.childdata) + parseInt(this.addthisnumber);
    }
}