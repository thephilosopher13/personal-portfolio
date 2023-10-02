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

export function About() {

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

    return (
        <div>
            <div id='my-story'>
                <h1 className='my-story-header'>'My story'</h1>
                <p className='my-story-paragraph'>Hello there. My name is Lorenzo G. Coloquio, but you can call me Enzo. I'm an aspiring Front-Web developer. Growing up, I was always in one way or the other interested in tech, programming and adjacent topics but I actually was studying to be a lawyer. This interest resulted in me taking a Minor in Information Technology when I was taking up my Undergraduate Degree. However, I only started studying programming in earnest right after I quit law school in early 2023 as I no longer wanted to be a lawyer. What I realized is that what I was actually interested in was problem solving, something that was one of the few things I liked during my stint in Law School, and problem solving is a key skill in programming as well. I learned various web technologies like HTML, CSS and Javascript in order to learn to create websites and built several projects.</p>
                <p className='my-story-paragraph'>I love programming because it is basically applied problem solving. It is a way to basically work out your brain in order to keep it sharp. Plus, there is always new things to learn so my interest in programming never fades.</p>
                <p className='my-story-paragraph'>In my free time, I work out, hang out with my friends, read books, and watch football</p>
            </div>
            <div id='skill-list'>
                <h1>Skills/Tools</h1>
                <div id='skill-list-grid'>
                    {svgArray.map((svg, index) => (
                        <div>
                            <span className='skill-icon'>{svg.svg}</span>
                            <p>{svg.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}