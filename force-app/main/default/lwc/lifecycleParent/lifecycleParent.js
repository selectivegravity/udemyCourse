import { LightningElement } from 'lwc';

export default class LifecycleParent extends LightningElement {
//https://www.sfdcstop.com/2023/08/lifecycle-hooks-in-lwc.html

//constructor(): This is the first method called during the creation of a component. It is used for initializing variables and setting up the initial state of the component.

// connectedCallback(): This method is called when a component is inserted into the DOM. It is often used for tasks that need to be performed once the component is rendered and available in the DOM, such as fetching data from a server.

// disconnectedCallback(): Invoked when a component is removed from the DOM. This method can be used for cleanup tasks such as unsubscribing from event listeners or disposing of resources.

// renderedCallback(): Called after the component's template has been rendered. It is useful for performing actions that need to be executed after the component has been rendered, such as updating the DOM based on data changes.

// errorCallback(): This method is invoked when an error occurs during rendering, in a child component, or in any lifecycle hook. It provides an opportunity to handle errors gracefully and display appropriate error messages.

// reconnectedCallback(): Called when a component is reconnected to the DOM after being disconnected. It can be used for reinitializing state or performing other tasks necessary after reconnection.
    constructor(){
        super();
        console.log('Parent Constructor');
    }
    connectedCallback(){
        //
        console.log('Parent ConnectCallback')
    }
    renderedCallback(){
        // callled on every change on the HTML
        console.log('Parent renderedCallback')
    }

    disconnectedCallback(){
        console.log('Parent disconnectedCallback')
    }

    name;
    changehandler(event){
        this.name = event.target.value;
    }
    isVisible = false;
    handleclick(){
        this.isVisible = !this.isVisible;
    }

    errorCallback(error,stack){
        console.log(error.message);
        console.log(stack);
    }
}