import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {
    carouselData =[
        {
            src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header: "First Card",
            alternative: "First card accessible description.",
            description : "First card description.",
            href: "javascript:void(0);"
        },
        {
            src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header: "Second Card",
            alternative: "Second card accessible description.",
            description : "Second card description.",
            href: "javascript:void(0);"
        },
        {
            src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header: "Third Card",
            alternative: "Third card accessible description.",
            description : "Third card description.",
            href: "javascript:void(0);"
        }
    ];

    trackprogress;

    changeHandler(event){
        this.trackprogress = event.target.value;
    }

    handleClick(){
        this.template.querySelector('c-p2c-silder').resetSilder();
    }
}