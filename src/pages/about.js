const aboutModule = (() => {

    const createAboutMeStoryDiv = () => {
        const myStoryDiv = document.createElement('div')
        const myStoryHeader = document.createElement('h1')
        const myStoryParagraph = document.createElement('p')

        myStoryHeader.classList.add = ('my-story-header')
        myStoryParagraph.classList.add = ('my-story-paragraph')

        myStoryHeader.textContent = 'My story'
        myStoryParagraph.textContent = `Hello there. My name is Lorenzo G. Coloquio, but you can call me Enzo. I'm an aspiring Front-Web developer. Growing up, I was always in one way or the other interested in tech, programming and adjacent topics but I actually was studying to be a lawyer. This interest resulted in me taking a Minor in Information Technology when I was taking up my Undergraduate Degree. However, I only started studying programming in earnest right after I quit law school in early 2023 as I no longer wanted to be a lawyer. What I realized is that what I was actually interested in was problem solving, something that was one of the few things I liked during my stint in Law School, and problem solving is a key skill in programming as well. I learned various web technologies like HTML, CSS and Javascript in order to learn to create websites and built several projects.
        
        I love programming because it is basically applied problem solving. It is a way to basically work out your brain in order to keep it sharp. Plus, there is always new things to learn so my interest in programming never fades.
        
        In my free time, I work out, hang out with my friends, read books, and watch football.`

        myStoryDiv.appendChild(myStoryHeader)
        myStoryDiv.appendChild(myStoryParagraph)

        return myStoryDiv
    }
})()