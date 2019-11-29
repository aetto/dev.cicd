import { LightningElement, track} from 'lwc';

export default class RenderHtml extends LightningElement {
    //@track 
    toggleContent = true;

    showContent() {

        this.toggleContent = !this.toggleContent;
    }
    get toggleContent() {

        return this.toggleContent;
    }
    set toggleContent(toggleContent) {
        this.toggleContent = !toggleContent;
    }
}