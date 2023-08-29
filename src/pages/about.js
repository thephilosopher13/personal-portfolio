const aboutModule = (() => {

    const div = document.createElement('div')
    const span = document.createElement('span')
    const img = document.createElement('img')
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

    const createSkillDiv = (alt, src1x, src2x, src) => {
        const skillDiv = div.cloneNode()
        const skillImgSpan = span.cloneNode()
        const skillImg = img.cloneNode()
        const skillDescription = p.cloneNode()

        skillDiv.classList.add = 'skill-div'
        skillImgSpan.classList.add = 'skill-img-span'
        skillImg.classList.add = 'skill-img'
        skillImg.alt = alt
        skillImg.srcset = `${src1x} 1x, ${src2x} 2x, `
        skillImg.src = src

        skillImgSpan.appendChild(skillImg)
        skillDiv.appendChild(skillImgSpan)
        skillDiv.appendChild(skillDescription)

        return skillDiv
    }

    const createSkillListDiv = () => {
        const skillListDiv = div.cloneNode()
        const skillListTitle = h1.cloneNode()
        const skillListGrid = div.cloneNode()

        //insert array here containing objects with img src and name of skill
        //run the above skill div creator with that array and the objects' properties as arguments ggez

        skillListDiv.id = 'skill-list'
        skillListGrid.id = 'skill-list-grid'
        skillListTitle.textContent = 'Skills/Tools'

        //append all the skill div to the grid

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