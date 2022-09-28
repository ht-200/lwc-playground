import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

    /* Data Binding Example */
    greeting = "Hello From LWC Playground Data Binding"
    role = "Developer"

    changeHandler(event){
        this.role = event.target.value
    }

    /* Data Binding and Property Tracking using @track */
    @track address = {
        city:"Bangalore",
        postalCode:"560035",
        state:"Karnataka",
        country:"India"
    }

    trackPropertyHandler(event){
        this.address.country = event.target.value
    }

    /* Data Binding and Property Tracking using spread operator ( Cloning and updating the required property ) */
    user = {
        name:"Himanshu",
        age:33,
        gender:"Male",
        religion:"Hindu"
    }

    trackChangesWithoutUsingTrack(event){
        this.user = {...this.user, "name": event.target.value}
    }

    /* Getters Example */
    languages = [ "Hindi", "Urdu", "Tamil", "Telgu", "Kannada"]

    get myLanguage(){
        return this.languages[0]
    }

    /* Conditional Rendering using if:else directive */
    isVisible = false
    onButtonClick(){
        this.isVisible = true
    }

    /* Template Looping */
    cars = ["Maruti", "Hyundai", "Tata", "Suzuki", "Renault", "Volkswagen"]

    /* Template Iterator */
    bikes = [
        {
            id:1,
            manufacturer:"Royal Enfield",
            model: "Thunderbird",
            cc: 500
        },
        {
            id:2,
            manufacturer:"Yamaha",
            model: "FZ V2",
            cc: 180
        },
        {
            id:3,
            manufacturer:"Suzuki",
            model: "Access",
            cc: 125
        },
        {
            id:4,
            manufacturer:"Honda",
            model: "Activa",
            cc: 110
        }
    ]
}