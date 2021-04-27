import { LightningElement, track } from 'lwc';

export default class AddParent extends LightningElement {

    @track parentdata = 12;

    //Binding in LWC input is not bidirectional
    genericOnChange(event) {
        this[event.target.name] = event.target.value;
    }

    handleAddParent(){
        this.template.querySelector('c-add-child').addthenumbers();
    }
}