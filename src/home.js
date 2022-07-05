import Crew from './img/employees.jpg'

function showHome() {
    const homeContent = document.createElement('div')
    homeContent.classList.add('main-content', 'page')

        const homepageMsg = document.createElement('div')
        homepageMsg.classList.add('mainMessage')
        homeContent.appendChild(homepageMsg)

            const welcomeTitle = document.createElement('p')
            welcomeTitle.classList.add('main-title')
            welcomeTitle.textContent = "Welcome to the Krusty Krab!"
            homepageMsg.appendChild(welcomeTitle)

            const welcomeImg = new Image()
            welcomeImg.src = Crew
            homepageMsg.appendChild(welcomeImg)

            const welcomeMsg = document.createElement('p')
            welcomeMsg.textContent = "Home of the World-Famous Krabby Patty!"
            homepageMsg.appendChild(welcomeMsg)

    return homeContent;
}

function loadHome() {
    const main = document.querySelector('#main')
    main.textContent = ''
    main.appendChild(showHome())
}

export default loadHome 