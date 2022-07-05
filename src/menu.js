import Kpatty from './img/krabby-patty.webp'
import Kfries from './img/fries.jpeg'
import Kshake from './img/kelp-shake.webp'
import PrettyPatty from './img/pretty-patty.webp'
import Kpizza from './img/krusty-krab-pizza.webp'
import Kchocolate from './img/chocolate.jpg'

function showMenu() {
    const menuContent = document.createElement('div')
    menuContent.classList.add('main-content') 
    document.body.appendChild(menuContent)

    const menuTitle = document.createElement('div')
    menuTitle.textContent = "Menu"
    menuContent.appendChild(menuTitle)

    const menuCards = document.createElement('div')
    menuCards.classList.add('menu-cards')
    

    const krabbyPatty = document.createElement('div')
    krabbyPatty.classList.add('card')
    menuCards.appendChild(krabbyPatty)
        const krabbyPattyTitle = document.createElement('div')
        krabbyPatty.appendChild(krabbyPattyTitle)
        krabbyPattyTitle.textContent = "Krabby Patty"

        const krabbyPattyPrice = document.createElement('div')
        fries.appendChild(krabbyPattyPrice)

        const krabbyPattyImg = new Image()
        krabbyPattyImg.src = Kpatty
        fries.appendChild(krabbyPattyImg)
        
        const krabbyPattyText = document.createElement('div')
        krabbyPatty.textContent = "You like krabby patties, don't you squidward?"
        krabbyPatty.appendChild(krabbyPattyText)

    const fries = document.createElement('div')
    fries.classList.add('card')
    menuCards.appendChild(fries)
        const friesTitle = document.createElement('div')
        fries.appendChild(friesTitle)
        friesTitle.textContent 

        const friesPrice = document.createElement('div')
        fries.appendChild(friesPrice)

        const friesImg = new Image()
        friesImg.src = Kfries
        fries.appendChild(friesImg)
        
        const friesText = document.createElement('div')
        fries.textContent 
        fries.appendChild(friesText)

   const kelpShake = document.createElement('div')
    kelpShake.classList.add('card')
    menuCards.appendChild(kelpShake)
        const kelpShakeTtitle = document.createElement('div')
        kelpShake.appendChild(kelpShakeTtitle)
        kelpShakeTtitle.textContent = "Kelp Shake"

        const kelpShakePrice = document.createElement('div')
        kelpShake.appendChild(kelpShakePrice)

        const kelpShakeImg = new Image()
        kelpShakeImg.src = Kshake
        kelpShake.appendChild(kelpShakeImg)
        
        const kelpShakeText = document.createElement('div')
        kelpShakeText.textContent = "Lorem ipsum"
        kelpShake.appendChild(kelpShakeText)

    const prettyPatty = document.createElement('div')
    prettyPatty.classList.add('card')
    menuCards.appendChild(prettyPatty)
        const prettyPattyTitle = document.createElement('div')
        prettyPatty.appendChild(prettyPattyTitle)
        prettyPattyTitle.textContent = "Lorem ipsum"

        const prettyPattyPrice = document.createElement('div')
        prettyPatty.appendChild(prettyPattyPrice)

        const prettyPattyImg = new Image()
        prettyPattyImg.src = PrettyPatty
        prettyPatty.appendChild(prettyPattyImg)
        
        const prettyPattyText = document.createElement('div')
        prettyPattyText.textContent = "Lorem ipsum"
        prettyPatty.appendChild(prettyPattyText)
    
    const pizza = document.createElement('div')
    pizza.classList.add('card')
    menuCards.appendChild(pizza)
        const pizzaTitle = document.createElement('div')
        pizza.appendChild(pizzaTitle)
        pizzaTitle.textContent = "Krusty Krab Pizza"

        const pizzaPrice = document.createElement('div')
        pizza.appendChild(pizzaPrice)

        const pizzaImg = new Image()
        pizzaImg.src = Kpizza
        pizzaImg.appendChild(pizza``)
        
        const pizzaText = document.createElement('div')
        pizzaText.textContent = "Krusty Krab Pizza, is the pizza..."
        pizza.appendChild(pizzaText)

    const chocolate = document.createElement('div')
    chocolate.classList.add('card')
    menuCards.appendChild(chocolate)
        const chocolateTitle = document.createElement('div')
        chocolate.appendChild(chocolateTitle)
        chocolateTitle.textContent = "CHOCOLATE!"

        const chocolatePrice = document.createElement('div')
        chocolate.appendChild(chocolatePrice)

        const chocolateImg = new Image()
        chocolateImg.src = Kchocolate
        chocolateImg.appendChild(chocolateImg)
        
        const chocolateText = document.createElement('div')
        chocolate.textContent = "Delicious chocolate bar."
        chocolate.appendChild(chocolateText)

}

function loadMenu() {
    const main = document.querySelector('#main')
    main.textContent = ''
    main.appendChild(showMenu())
}

export default loadMenu