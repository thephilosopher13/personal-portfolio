import './pagestyles/indexstyles.css'
import './pagestyles/styles.css'

const homepageModule = (() => {
    const div = document.createElement('div')
    const a = document.createElement('a')

    const appenderFunction = (parent, array) => {
        array.forEach(child => {
            parent.appendChild(child)
        })
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
        learnMoreLink.id = 'learn-more-button'
        learnMoreLink.textContent = 'Learn more about me!'
        homeContentDiv.id = 'home-content'

        appenderFunction(homeContentDiv, [hello, name, iama, learnMoreLink])

        return homeContentDiv
    }


    const attachHomeContent = () => {
        const content = document.getElementById('content')
        const homeContent = createHomeContentDiv()

        content.innerHTML = ''

        content.appendChild(homeContent)
    }

    return {
        attachHomeContent
    }
    

})();

homepageModule.attachHomeContent();
