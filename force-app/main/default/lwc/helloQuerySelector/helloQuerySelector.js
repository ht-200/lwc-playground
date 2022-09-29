import { LightningElement } from 'lwc';

export default class HelloQuerySelector extends LightningElement {
     
     queryElement(){
        let ele = this.template.querySelector('h1')
        console.log(ele.innerText)
    }

    movies = ["Brahamastra", "Wonder Women", "Tamasha", "Rockstar"]
    getMoviesElements(){
        let movieElements = this.template.querySelectorAll('.myclass')
        Array.from(movieElements).forEach( movie => {
            console.log(movie.innerText)
        })

        let parentElement = this.template.querySelector('.mystyle')
        parentElement.innerHTML = '<p>Hello I am added via script by leveragig lwc:dom="manual"</p>'
    }
}