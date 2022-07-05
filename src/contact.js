import Patrick from './img/patrick.jpg'

function showContact() {
    const contactContent = document.createElement('div')
    contactContent.classList.add('main-content')

        const contactTitle = document.createElement('div')
        contactTitle.textContent = "Contact Us"
        contactContent.appendChild(contactTitle)

        const contactImg = new Image()
        contactImg = Patrick
        contactContent.appendChild(contactImg)

        const contactNum = document.createElement('div')
        contactNum.textContent = "123-456-7890"
    
    return contactContent;
}

function loadContact() {
    const main = document.querySelector('#main')
    main.textContent = ''
    main.appendChild(showContact())
}

export default loadContact