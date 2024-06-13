import { LightningElement } from 'lwc';
import signInReference from './signIn.html'
import signUpReference from './signUp.html'
import defaultRefernce from './renderMethod.html'

export default class RenderMethod extends LightningElement {
    selectedButton = '';
    render(){
        return this.selectedButton === 'Signin'?signInReference:
        this.selectedButton === 'Signup'?signUpReference:
        defaultRefernce;
    }
    handleClick(event){
        this.selectedButton = event.target.label;
    }
}