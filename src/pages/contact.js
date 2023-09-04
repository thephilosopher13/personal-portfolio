import linkedin from '../assets/linkedin-plain.svg'
import github from '../assets/github-mark-white.svg'
import email from '../assets/at.svg'
import "./pagestyles/contactstyles.css"
import './pagestyles/styles.css'

const contactModule = (() => {

    const createContactList = () => {
        const contactListArray = [
            {icon: linkedin, desc: 'Enzo Coloquio at LinkedIn', href: 'https://www.linkedin.com/in/lorenzo-coloquio-5630421b0/'},
            {icon: github, desc: 'thephilosopher13', href: 'mailto:lcoloquio11398@gmail.com'},
            {icon: email, desc: 'lcoloquio11398@gmail.com', href: 'https://github.com/thephilosopher13'}
        ]
        const contactsList = document.createElement('ul')

        contactsList.classList.add('contact-list')
        
        contactListArray.forEach(contactObject => {
            const contactListItem = document.createElement('li')
            const svgSpan = document.createElement('span')
            const link = document.createElement('a')

            contactListItem.classList.add('list-item')
            link.href = contactObject.href
            link.textContent = contactObject.desc
            svgSpan.classList.add('contact-svg')

            svgSpan.innerHTML = contactObject.icon
            contactListItem.appendChild(svgSpan)
            contactListItem.appendChild(link)
            contactsList.appendChild(contactListItem)
        })

        return contactsList
    }

    const createContactDiv = () => {
        const contactMeTitle = document.createElement('h1')
        const contactMeList = createContactList()
        const contactMeDiv = document.createElement('div')

        contactMeTitle.id = 'contact-me'

        contactMeDiv.appendChild(contactMeTitle)
        contactMeDiv.appendChild(contactMeList)

        return contactMeDiv

    }

    const attachContactList = () => {
        const content = document.getElementById('content')
        const contactDiv = createContactDiv()

        content.innerHTML = ''

        content.appendChild(contactDiv)
    }

    return {
        attachContactList
    }

})();

contactModule.attachContactList()