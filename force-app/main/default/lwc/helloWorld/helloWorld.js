import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    // Controller to HTML
    name = 'Aman';
    //HTML to Controller
    personName = "Vishal";
    title = "";
    changeHandler(event){
        this.title = event.target.value;
    }
    // @track Properties
    address = {
        street: "J Block",
        area: "New Town",
        city: "Kolkata"
    }

    @track numbers = [0,1,3,4,6];
    changeHandler1(event){
        //this.address.city = event.target.value;
        // advanced (without @track decorator)
        this.address = {...this.address,"city":event.target.value};
    }
    changeHandler2(event){
        this.numbers[0] = event.target.value;        
    }

    // Getter in LWC
    // Getting function always returns something.
    num1 = 10;
    num2 = 20;
    users = ["Abhishek","Aman","Singh","Chandel"];

    get getProduct(){
        return this.num1 * this.num2;
    }

    get getFirstUser(){
        return this.users[0];
    }

    //38. Conditional Rendering
    visibility = false;

    showContentFunc (event){
        if(event.target.name==='show')
        {
            this.visibility = true;
        }
        else{
            this.visibility = false;
        }
    }

    sayHi = false;
    checkText (event){
        if(event.target.value.toLowerCase() === 'hello'){
            this.sayHi = true;
        }
        else{
            this.sayHi = false;
        }
    }

    // Template Looping
    carList = ["Mercedes", "BMW", "Audi", "Ferrari", "Bugatti", "Toyota", "Lambo"];

    ceoList = [
        {
            id:1,
            name: "Sunar Pichai",
            company: "Google"
        },
        {
            id:2,
            name: "Tim Cook",
            company: "Microsoft"
        },
        {
            id:3,
            name: "Mark Zuckerberg",
            company: "Facebook"
        },
        {
            id:4,
            name: "Jeff Bezos",
            company: "Facebook"
        }
    ]
}
