import { createElement } from "../elementBuilder.js";

import { sectionContent } from "../lists/projectsSection.js";

function cardDescription(item) {
    const cardContainer = createElement('div', 'card-text-container');

    const cardTitle = createElement('h3', 'card-title');
    cardTitle.innerText = item.name;

    const cardDescription = createElement('p', 'card-description');
    cardDescription.innerText = item.description;

    [cardTitle, cardDescription].forEach((e) => {
        cardContainer.appendChild(e);
    })

    return cardContainer;
}

function cardimage(item) {
    const imgContainer = createElement('div', 'img-')

    const cardImg = createElement('img', 'card-img');
    cardImg.src = item.img;

    return cardImg;
}

function loadProjects() {
    const projectList = createElement('ul', 'project-list');

    sectionContent.forEach((project) => {
        const card = createElement('li', 'project-card');
        card.appendChild(cardimage(project));
        card.appendChild(cardDescription(project));

        projectList.appendChild(card);
    });

    return projectList;
}

export const projectsElement = () => {
    const projectsSection = createElement('section', 'container');
    projectsSection.id = 'projects';

    const title = createElement('h2', 'content-title');
    title.innerText = 'Projetos.';

    projectsSection.appendChild(title);
    projectsSection.appendChild(loadProjects());
    return projectsSection;
};