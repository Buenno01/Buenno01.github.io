import { createElement } from "../elementBuilder.js";

import { sectionContent } from "../lists/projectsSection.js";

function generateTechs(Arr) {
    const listClasses = ['flex', 'justify-center', 'gap-3'];
    const techList = createElement('ul', listClasses);

    const techClasses = [];
    const iconClasses = ['w-6', 'h-6'];
    const iconColorHex = '8BE9FD';
    Arr.forEach((tech) => {
        const newTech = createElement('li', techClasses);
        const icon = createElement('img', iconClasses);
        icon.src = `https://cdn.simpleicons.org/${tech}/${iconColorHex}/`;
        newTech.appendChild(icon);
        techList.appendChild(newTech);
    });

    return techList;
}

function generateLinks(links) {
    const listClasses = ['flex', 'justify-center', 'gap-5'];
    const list = createElement('div', listClasses);

    const linkClasses = [];
    const iconClasses = ['w-6', 'h-6'];
    links.forEach((l) => {
        const newLink = createElement('a', linkClasses);
        newLink.href = l.url;
        newLink.target = '_blank';

        const icon = createElement('img', iconClasses);
        icon.src = l.icon;

        newLink.appendChild(icon);
        list.appendChild(newLink);
    });

    return list;
}

function cardDescription(txt) {
    const textContainerClasses = ['flex', 'flex-col', 'w-11/12', 'self-center', 'justify-center', 'align-start', 'h-32', 'overflow-scroll'];
    const textContainer = createElement('div', textContainerClasses);

    const titleClasses = ['text-cyan', 'font-semibold', 'text-xl', 'self-center'];

    txt.forEach((paragraph) => {
        const classes = paragraph.isTitle ? titleClasses : [];
        const newParagraph = createElement(paragraph.tag, classes);

        textContainer.appendChild(newParagraph);
    });

    return textContainer;
}

function cardimage(img) {
    const containerClasses = ['relative', 'text-cyan']
    const container = createElement('div', containerClasses);

    const hiddenContainerClasses = ['absolute', 'left-0', 'right-0', 'p-2', 'flex', 'flex-col', 'justify-between', 'h-full', 'bg-background', 'bg-opacity-75', 'border-b', 'border-cyan'];
    const hiddenContainer = createElement('div', hiddenContainerClasses);

    hiddenContainer.appendChild(generateLinks(img.links));
    hiddenContainer.appendChild(generateTechs(img.techs));

    const cardImg = createElement('img', []);
    cardImg.src = img.imgUrl;

    [hiddenContainer, cardImg].forEach((newElement) => {
        container.appendChild(newElement);
    });

    return container;
}

function loadProjects() {
    const listClasses = ['flex', 'flex-col', 'md:flex-row', 'md:flex-wrap', 'gap-2', 'md:justify-between'];
    const projectList = createElement('ul', listClasses);

    const cardClasses = ['flex', 'flex-col', 'border', 'rounded-xl', 'p-2', 'md:w-64', 'md:gap-0', 'md:p-3'];

    sectionContent.forEach((project) => {
        const card = createElement('li', cardClasses);
        card.appendChild(cardimage(project.img));
        card.appendChild(cardDescription(project.text));

        projectList.appendChild(card);
    });

    return projectList;
}

export const projectsElement = () => {
    const sectionClasses = ['container', 'max-w-3xl', 'self-center', 'pt-10', 'px-2', 'md:px-0'];
    const projectsSection = createElement('section', sectionClasses);
    projectsSection.id = 'projects';

    const titleClasses = ['text-cyan', 'font-bold', 'text-2xl'];
    const title = createElement('h2', titleClasses);
    title.innerText = 'Projetos.';

    projectsSection.appendChild(title);
    projectsSection.appendChild(loadProjects());
    return projectsSection;
};