import './pagestyles/styles.css'
import './pagestyles/homestyles.css'

const homepageModule = (() => {
    const div = document.createElement('div')
    const a = document.createElement('a')

    const appenderFunction = (parent, array) => {
        array.forEach(child => {
            parent.appendChild(child)
        })
    }

    const createHeader = () => {
        const header = document.createElement('header')
        const headerLinkList = document.createElement('ul')
        const headerListItemTemplate = document.createElement('li')
        const home = headerListItemTemplate.cloneNode()
        const homeLink = a.cloneNode()
        const about = headerListItemTemplate.cloneNode()
        const aboutLink = a.cloneNode()
        const projects = headerListItemTemplate.cloneNode()
        const projectsLink = a.cloneNode()
        const contact = headerListItemTemplate.cloneNode()
        const contactLink = a.cloneNode()
        const arrayOfItems = [home, about, projects, contact]

        homeLink.href = `../home.html`
        homeLink.textContent = 'Home'
        aboutLink.href = `../about.html`
        aboutLink.textContent = 'About'
        projectsLink.href = `../projects.html`
        projectsLink.textContent = 'Projects'
        contactLink.href = `../contact.html`
        contactLink.textContent = 'Contact'

        header.id = 'header'

        home.appendChild(homeLink)
        about.appendChild(aboutLink)
        projects.appendChild(projectsLink)
        contact.appendChild(contactLink)


        arrayOfItems.forEach(item => {
            item.classList.add('link')
        })

        appenderFunction(headerLinkList, arrayOfItems)
        header.appendChild(headerLinkList)

        return header

    }

    const createFooter = () => {
        const footer = document.createElement('footer')
        footer.id = 'footer'
        footer.textContent = '© 2023 Designed and coded by Enzo Coloquio'

        return footer
    }

    const createContentDiv = () => {
        const contentDiv = div.cloneNode()
        contentDiv.id = 'content'

        return contentDiv
    }

    const createHomeContentDiv = () => {
        const homeContentDiv = div.cloneNode()
        const hello = document.createElement('h2')
        const name = document.createElement('h1')
        const iama = document.createElement('h2')
        const learnMoreLink = a.cloneNode()

        hello.textContent = 'Hello there!'
        name.textContent = 'My name is Enzo Coloquio'
        iama.textContent = 'I am an aspiring Front-End Web Developer.'
        learnMoreLink.textContent = 'Learn more about me'
        learnMoreLink.href = `../about.html`

        hello.classList.add('intro-h2')
        iama.classList.add('intro-h2')
        name.classList.add('intro-h1')
        learnMoreLink.textContent = 'learn-more-button'
        homeContentDiv.id = 'home-content'

        appenderFunction(homeContentDiv, [hello, name, iama, learnMoreLink])

        return homeContentDiv
    }

    const createPageLayout = () => {
        const header = createHeader()
        const content = createContentDiv()
        const footer = createFooter()
        const body = document.querySelector('body')

        appenderFunction(body, [header, content, footer])
    }

    const attachHomeContent = () => {
        const content = document.getElementById('content')
        const homeContent = createHomeContentDiv()

        content.innerHTML = ''

        content.appendChild(homeContent)
    }

    return {
        createPageLayout,
        attachHomeContent
    }
    

})();

homepageModule.createPageLayout()
homepageModule.attachHomeContent()

export default homepageModule