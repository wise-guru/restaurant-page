function showHome() {
    const homeContent = document.createElement('div')
    homeContent.classList.add('main-content')

        const homepageMsg = document.createElement('div')
        homepageMsg.classList.add('mainMessage')
        homeContent.appendChild(homepageMsg)

            const welcomeTitle = document.createElement('p')
            welcomeTitle.textContent = "Welcome to the Krusty Krab!"
            homepageMsg.appendChild(welcomeTitle)

            const welcomeMsg = document.createElement('p')
            welcomeMsg.textContent = "Testing, testing"
            homepageMsg.appendChild(welcomeMsg)

    return homeContent;
}

function loadHome() {
    const main = document.querySelector('#main')
    main.textContent = ''
    main.appendChild(showHome())
}

export default loadHome 