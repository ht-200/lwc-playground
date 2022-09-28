import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    greeting = "Hello From LWC Playground Data Binding"
    role = "Developer"

    changeHandler(event){
        this.role = event.target.value
    }

    @track address = {
        city:"Bangalore",
        postalCode:"560035",
        state:"Karnataka",
        country:"India"
    }

    trackPropertyHandler(event){
        this.address.country = event.target.value
    }

    user = {
        name:"Himanshu",
        age:33,
        gender:"Male",
        religion:"Hindu"
    }

    trackChangesWithoutUsingTrack(event){
        this.user = {...this.user, "name": event.target.value}
    }
}