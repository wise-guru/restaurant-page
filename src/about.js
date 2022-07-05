import Krabs from './img/krab.jpg'

function showAbout() {
    const aboutContent = document.createElement('div')
    aboutContent.classList.add('main-content', 'page')
    // document.body.appendChild(aboutContent)

    const aboutTitle = document.createElement('div')
    aboutTitle.classList.add('main-title')
    aboutTitle.textContent = "About us"
    aboutContent.append(aboutTitle)

    const aboutImg = new Image()
    aboutImg.src = Krabs
    aboutContent.appendChild(aboutImg)


    const aboutMsg = document.createElement('div')
    aboutMsg.classList.add('main-message')
    aboutContent.appendChild(aboutMsg)
    aboutMsg.textContent = 'The Krusty Krab is a fast food restaurant located in Bikini Bottom, founded and owned by Eugene H. Krabs. It is also the most popular restaurant in Bikini Bottom. Visit us today!'

    return aboutContent;
}

function loadAbout() {
    const main = document.querySelector('#main')
    main.textContent = ''
    main.appendChild(showAbout())
}

export default loadAbout