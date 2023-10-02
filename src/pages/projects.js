const projectsModule = (() => {

    const div = document.createElement('div')
    const p = document.createElement('p')
    const a = document.createElement('a')

    const createProjectCard = (src1x, src2x, src, liveLink, codeLink, techsUsed, description) => {
        const projectCardDiv = div.cloneNode()
        const screenshotDiv = div.cloneNode()
        const screenshotImg = document.createElement('img')
        const techsUsedParagraph = p.cloneNode()
        const techsUsedSpan = document.createElement('span')
        const descriptionParagraph = p.cloneNode()
        const liveCodeLink = a.cloneNode()
        const githubCodeLink = a.cloneNode()

        liveCodeLink.href = liveLink
        liveCodeLink.classList.add('live-link')
        githubCodeLink.href = codeLink
        githubCodeLink.classList.add('code-link')
        techsUsedSpan.textContent = 'Technologies Used:'
        techsUsedParagraph.textContent = techsUsed
        descriptionParagraph.textContent = description
        screenshotImg.


    }
})()