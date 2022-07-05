import Patrick from './img/patrick.jpg'

function showContact() {
    const contactContent = document.createElement('div')
    contactContent.classList.add('main-content', 'page')

        const contactTitle = document.createElement('div')
        contactTitle.classList.add('main-title')
        contactTitle.textContent = "Contact Us"
        contactContent.appendChild(contactTitle)

        const contactImg = new Image()
        contactImg.src = Patrick
        contactContent.appendChild(contactImg)

        const contactNum = document.createElement('div')
        contactNum.textContent = "1-800-IMREADY"
        contactContent.appendChild(contactNum)
    
    return contactContent;
}

function loadContact() {
    const main = document.querySelector('#main')
    main.textContent = ''
    main.appendChild(showContact())
}

export default loadContact