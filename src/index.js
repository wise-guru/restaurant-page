import _ from "lodash";
import './style.css';
import Background from './krusty-krab.webp';
import Icon from './krabby-patty-icon.webp';

// function component() {
//     const element = document.createElement('div');
 
//     // Lodash, now imported by this script
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     element.classList.add('hello');

//     const myBackground = new Image();
// myBackground.src = Background
// element.appendChild(myBackground)

//     return element;

// }

// const content = document.createElement('div')
// content.id = 'content'
// document.body.appendChild(content)

console.log('Hello world')

function createHeader() {
    const header = document.createElement('div')
    header.classList.add('header')
    document.body.appendChild(header)
    

    const myIcon = new Image();
    myIcon.src = Icon;
    header.appendChild(myIcon)

    const title = document.createElement('div')
    title.textContent = "The Krusty Krab"
    header.appendChild(title)

    const headerLinks = document.createElement('ul');
    headerLinks.classList.add('header-links');
    header.appendChild(headerLinks);
        
        const menu = document.createElement('li')
        headerLinks.appendChild(menu)

            const menuLink = document.createElement('button')
            menu.appendChild(menuLink)
            menuLink.textContent = 'Menu'


        const about = document.createElement('li')
        headerLinks.appendChild(about)

            const aboutLink = document.createElement('button')
            about.appendChild(aboutLink)
            aboutLink.textContent = 'About'


        const location = document.createElement('li')
        headerLinks.appendChild(location)

            const locationLink = document.createElement('button')
            location.appendChild(locationLink)
            locationLink.textContent = 'Location'
}
 

createHeader();

function createMainContent() {
    const mainContent = document.createElement('div')
    mainContent.classList.add('main-content')
    document.body.appendChild(mainContent)

        // const krustyKrabImg = new Image();
        // krustyKrabImg.src = Background;
        // mainContent.appendChild(krustyKrabImg);

        const homepageMsg = document.createElement('div')
        homepageMsg.classList.add('mainMessage')
        mainContent.appendChild(homepageMsg)

            const welcomeTitle = document.createElement('p')
            welcomeTitle.textContent = "Welcome to the Krusty Krab!"
            homepageMsg.appendChild(welcomeTitle)

            // const spongePic = new Image()
            // spongePic.src = Spongebob;
            // homepageMsg.appendChild(spongePic)


            const welcomeMsg = document.createElement('p')
            welcomeMsg.textContent = "Testing, testing"
            homepageMsg.appendChild(welcomeMsg)

    
}

createMainContent();


function createFooter() {
    const footer = document.createElement('div')
    footer.classList.add('footer')
    footer.textContent = 'Copyright © Krusty Krab'
    document.body.appendChild(footer)

}

createFooter();

// function aboutPage() {
    
// }