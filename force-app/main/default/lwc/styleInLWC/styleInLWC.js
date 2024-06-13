import { LightningElement } from 'lwc';

export default class StyleInLWC extends LightningElement {
    percentage = 10;

    renderNumber(event) {
        this.percentage = event.target.value;
    }

    get getWidth() {
        return `width:${this.percentage}%`;
    }
}
