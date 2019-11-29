import { LightningElement, track } from 'lwc';

export default class MyFirstComponent extends LightningElement {

    @track name = 'World';

    setName(event) {
        this.name = event.currentTarget.value;
    }
}