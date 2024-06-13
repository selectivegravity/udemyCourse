import { LightningElement } from 'lwc';

export default class QuerySelectorDemo extends LightningElement {
    carList = ["Mercedes","BMW","Audi","Lamborgini","Viper","Mastang"];

    handleclick(){
        const element1 = this.template.querySelector('p');
        const element2 = this.template.querySelectorAll('.carName');
        console.log(element1.innerText);
        Array.from(element2).forEach(item => {
            console.log(item.innerText);
            item.setAttribute("title",item.innerText);
        });
        element1.style.border="1px solid red";
    }

    //lwc:dom = "manual" demo
    handleclick1(){
        const element = this.template.querySelector('.child');
        element.innerHTML = '<p> This is a added section</p>'
    }
}