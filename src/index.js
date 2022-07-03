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

    const headerLinks = document.createElement('ul');
    headerLinks.classList.add('header-links');
    header.appendChild(headerLinks);
        
        const menu = document.createElement('li')
        headerLinks.appendChild(menu)

            const menuLink = document.createElement('a')
            menu.appendChild(menuLink)
            menuLink.href = ""
            menuLink.textContent = 'Menu'


        const about = document.createElement('li')
        headerLinks.appendChild(about)

            const aboutLink = document.createElement('a')
            about.appendChild(aboutLink)
            aboutLink.href = ""
            aboutLink.textContent = 'About'


        const location = document.createElement('li')
        headerLinks.appendChild(location)

            const locationLink = document.createElement('a')
            location.appendChild(locationLink)
            locationLink.href = ""
            locationLink.textContent = 'Location'
}
 

createHeader();

function createMainContent() {
    const mainContent = document.createElement('div')
    mainContent.classList.add('main-content')
    document.body.appendChild(mainContent)
    
}

createMainContent();


function createFooter() {
    const footer = document.createElement('div')
    footer.classList.add('footer')
    footer.textContent = 'Copyright © Krusty Krab 2022'
    document.body.appendChild(footer)

}

createFooter();