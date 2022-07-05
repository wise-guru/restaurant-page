function showAbout() {
    const aboutContent = document.createElement('div')
    aboutContent.classList.add('main-content')
    // document.body.appendChild(aboutContent)

    const aboutTitle = document.createElement('div')
    aboutTitle.classList.add('mainMessage')
    aboutTitle.textContent = "About us"

    const aboutMsg = document.createElement('div')
    aboutContent.appendChild(aboutMsg)
    aboutMsg.textContent = 'The Krusty Krab is a fast food restaurant located in Bikini Bottom, founded and owned by Eugene H. Krabs. It is also the most popular restaurant in Bikini Bottom and one of the main locations of SpongeBob SquarePants. It first appears in the pilot episode "Help Wanted.'

    return aboutContent;
}

function loadAbout() {
    const main = document.querySelector('#main')
    main.textContent = ''
    main.appendChild(showAbout())
}

export default loadAbout