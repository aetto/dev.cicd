import { LightningElement, track } from 'lwc';

export default class BasicComp extends LightningElement {
    @track dynamicVal = "Aura";
    bindValue(event) {
        this.dynamicVal = event.target.value;
    }
}