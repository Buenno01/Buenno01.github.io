import { createElement } from "../elementBuilder.js";

import { sectionContent } from "../lists/projectsSection.js";

function cardDescription(item) {
    const cardContainer = createElement('div', ['card-text-container']);

    const cardTitle = createElement('h3', ['card-title']);
    cardTitle.innerText = item.name;

    const cardDescription = createElement('p', ['card-description']);
    cardDescription.innerText = item.description;

    [cardTitle, cardDescription].forEach((e) => {
        cardContainer.appendChild(e);
    })

    return cardContainer;
}

function cardimage(item) {
    const imgContainer = createElement('div', ['info-container']);
    const techs = createElement('ul', ['card-techs']);
    item.techs.forEach((tech) => {
        const tool = createElement('li', ['tech-item']);
        tool.innerText = tech;
        techs.appendChild(tool);
    });
    const links = createElement('ul', ['card-links']);
    links.innerHTML = `
    <li><a href=${item.urlGitHub} target="_blank">GitHub</a></li>
    <li><a href=${item.urlDeploy} target="_blank">Site</a></li>
    `;
    const div = createElement('div', ['hidden-info']);
    div.appendChild(links);
    div.appendChild(techs);

    const cardImg = createElement('img', ['card-img']);
    cardImg.src = item.img;

    [div, cardImg].forEach((e) => {
        imgContainer.appendChild(e);
    });

    return imgContainer;
}

function toggleHover(e) {
    e.target.classList.toggle('hover');
}

function loadProjects() {
    const projectList = createElement('ul', ['project-list']);

    sectionContent.forEach((project) => {
        const card = createElement('li', ['project-card']);
        card.appendChild(cardimage(project));
        card.appendChild(cardDescription(project));
        card.addEventListener('mouseenter', toggleHover);
        card.addEventListener('mouseleave', toggleHover);

        projectList.appendChild(card);
    });

    return projectList;
}

export const projectsElement = () => {
    const projectsSection = createElement('section', ['container']);
    projectsSection.id = 'projects';

    const title = createElement('h2', ['content-title']);
    title.innerText = 'Projetos.';

    projectsSection.appendChild(title);
    projectsSection.appendChild(loadProjects());
    return projectsSection;
};