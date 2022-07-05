import _ from "lodash";
import './style.css';
import Background from './krusty-krab.webp';
import Icon from './krabby-patty-icon.webp';

import loadMenu from './menu';
import loadContact from "./contact";
import loadAbout from "./about";
import loadHome from "./home";


function createHeader() {
    const header = document.createElement('div')
    header.classList.add('header')
    

    const homeBtn = document.createElement('input')
    homeBtn.type = 'image'
    homeBtn.src = Icon;
    homeBtn.classList.add('header-buttons')
    header.appendChild(homeBtn)

    homeBtn.addEventListener('click', function(e) {
        if (e.target.classList.contains("active")) {
            setActiveButton(homeBtn)
            loadHome();
        }
    })
        

    const title = document.createElement('div')
    title.classList.add('header-title')
    title.textContent = "The Krusty Krab"
    header.appendChild(title)

    const headerButtons = document.createElement('ul');
    header.appendChild(headerButtons);
        
        const menu = document.createElement('li')
        headerButtons.appendChild(menu)

            const menuBtn = document.createElement('button')
            menuBtn.classList.add('header-buttons');
            menu.appendChild(menuBtn)
            menuBtn.textContent = 'Menu'

            menuBtn.addEventListener('click', function(e) {
                if (e.target.classList.contains("active")) {
                    setActiveButton(menuBtn)
                    loadMenu();
                }
                
            })


        const about = document.createElement('li')
        headerButtons.appendChild(about)

            const aboutBtn = document.createElement('button')
            aboutBtn.classList.add('header-buttons');
            about.appendChild(aboutBtn)
            aboutBtn.textContent = 'About'

            aboutBtn.addEventListener('click', function(e) {
                if (e.target.classList.contains("active")) {
                    setActiveButton(aboutBtn)
                    loadAbout();
                }
            })


        const contact = document.createElement('li')
        headerButtons.appendChild(contact)

            const contactBtn = document.createElement('button')
            contactBtn.classList.add('header-buttons');
            contact.appendChild(contactBtn)
            contactBtn.textContent = 'Contact'

            contactBtn.addEventListener('click', function(e) {
                if (e.target.classList.contains("active")) {
                    setActiveButton(contactBtn)
                    loadContact();
                }
            })
    return header;
}
 

function createMain() {
    const main = document.createElement('div')
    main.classList.add('main')
    main.id = 'main'

    return main;
}


function createFooter() {
    const footer = document.createElement('div')
    footer.classList.add('footer')
    footer.textContent = 'Copyright © Krusty Krab'

    return footer;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".header-buttons");

    buttons.forEach((button) => {
        if(button !== this) {
            button.classList.remove("active");
        }
        button.classList.add("active")
    });
}

function initializeWebsite() {
    const container = document.createElement('div')
    container.id = 'container'
    document.body.appendChild(container)

    container.appendChild(createHeader())
    container.appendChild(createMain())
    container.appendChild(createFooter())

    setActiveButton(document.querySelector(".header-buttons"));
    loadHome();
}

initializeWebsite()