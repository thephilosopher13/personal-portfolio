import linkedin from '../assets/linkedin-plain.svg'
import github from '../assets/github-mark-white.svg'
import email from '../assets/at.svg'
import './Contact.css'

export default function Contact() {
    const contactListArray = [
        {icon: linkedin, desc: 'Enzo Coloquio at LinkedIn', href: 'https://www.linkedin.com/in/lorenzo-coloquio-5630421b0/'},
        {icon: github, desc: 'thephilosopher13', href: 'mailto:lcoloquio11398@gmail.com'},
        {icon: email, desc: 'lcoloquio11398@gmail.com', href: 'https://github.com/thephilosopher13'}
    ]

    return (
        <div id='contact-content'>
            <h1 id='contact-me'></h1>
              {contactListArray.map((contactItem, index) => (
                <ul key={index} className='list-item'>
                    <span className='contact-svg'>{contactItem.icon}</span>
                    <a href={contactItem.href}>{contactItem.desc}</a>
                </ul>
              ))}
        </div>
    )
}