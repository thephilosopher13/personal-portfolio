import css from '../assets/css3-original.svg'
import eslint from '../assets/eslint-original.svg'
import git from '../assets/git-original.svg'
import html from '../assets/html5-original.svg'
import javascript from '../assets/javascript-original.svg'
import jest from '../assets/jest-plain.svg'
import linux from '../assets/linux-original.svg'
import nodejs from '../assets/nodejs-original.svg'
import vscode from '../assets/vscode-original.svg'
import webpack from '../assets/webpack-original.svg'
import '../pages/pagestyles/aboutstyles.css'


const aboutModule = (() => {

    const div = document.createElement('div')
    const span = document.createElement('span')
    const p = document.createElement('p')
    const h1 = document.createElement('h1')

    const createAboutMeStoryDiv = () => {
        const myStoryDiv = div.cloneNode()
        const myStoryHeader = h1.cloneNode()
        const myStoryParagraph = p.cloneNode()

        myStoryHeader.classList.add = ('my-story-header')
        myStoryParagraph.classList.add = ('my-story-paragraph')
        myStoryDiv.id = 'my-story'

        myStoryHeader.textContent = 'My story'
        myStoryParagraph.textContent = `Hello there. My name is Lorenzo G. Coloquio, but you can call me Enzo. I'm an aspiring Front-Web developer. Growing up, I was always in one way or the other interested in tech, programming and adjacent topics but I actually was studying to be a lawyer. This interest resulted in me taking a Minor in Information Technology when I was taking up my Undergraduate Degree. However, I only started studying programming in earnest right after I quit law school in early 2023 as I no longer wanted to be a lawyer. What I realized is that what I was actually interested in was problem solving, something that was one of the few things I liked during my stint in Law School, and problem solving is a key skill in programming as well. I learned various web technologies like HTML, CSS and Javascript in order to learn to create websites and built several projects.
        
        I love programming because it is basically applied problem solving. It is a way to basically work out your brain in order to keep it sharp. Plus, there is always new things to learn so my interest in programming never fades.
        
        In my free time, I work out, hang out with my friends, read books, and watch football.`

        myStoryDiv.appendChild(myStoryHeader)
        myStoryDiv.appendChild(myStoryParagraph)

        return myStoryDiv
    }

    const createSkillListDiv = () => {
        const skillListDiv = div.cloneNode()
        const skillListTitle = h1.cloneNode()
        const skillListGrid = div.cloneNode()
        const svgArray = [
            {svg: css, desc: 'CSS'}, 
            {svg: eslint, desc: 'ESLint'}, 
            {svg: git, desc: 'Git'}, 
            {svg: html, desc: 'HTML'}, 
            {svg: javascript, desc: 'Javascript'}, 
            {svg: jest, desc: 'Jest'}, 
            {svg: linux, desc: 'Linux CLI'}, 
            {svg: nodejs, desc: 'Node.js'}, 
            {svg: vscode, desc: 'VSCode'}, 
            {svg: webpack, desc: 'Webpack'}
        ]

        skillListDiv.id = 'skill-list'
        skillListGrid.id = 'skill-list-grid'
        skillListTitle.textContent = 'Skills/Tools'

        svgArray.forEach(svg => {
            const skillItem = div.cloneNode()
            const skillSvgSpan = span.cloneNode()
            const skillDescription = p.cloneNode()

            skillSvgSpan.classList.add('skill-icon')

            skillSvgSpan.innerHTML = svg.svg
            skillDescription.textContent = svg.desc

            skillItem.appendChild(skillSvgSpan)
            skillItem.appendChild(skillDescription)
            skillListGrid.appendChild(skillItem)
        })

        skillListDiv.appendChild(skillListTitle)
        skillListDiv.appendChild(skillListGrid)

        return skillListDiv
    }

    const createAboutMe = () => {
        const myStory = createAboutMeStoryDiv()
        const skills = createSkillListDiv()
        const contentDiv = document.getElementById('content')

        contentDiv.innerHTML = ''

        contentDiv.appendChild(myStory)
        contentDiv.appendChild(skills)
    }

    return {
        createAboutMe
    }
})()

aboutModule.createAboutMe()