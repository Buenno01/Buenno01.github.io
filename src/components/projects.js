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

    const iconClasses = ['w-6', 'h-6', 'fill-cyan'];
    links.forEach((l) => {
        const newLink = createElement('a', iconClasses);
        newLink.href = l.url;
        newLink.target = '_blank';
        newLink.innerHTML = l.icon;



        list.appendChild(newLink);
    });

    return list;
}

function cardDescription(txt) {
    const textContainerClasses = ['flex', 'flex-col', 'w-11/12', 'self-center', 'justify-start', 'align-start', 'h-32', 'overflow-y-scroll', 'overscroll-none', 'pt-2'];
    const textContainer = createElement('div', textContainerClasses);

    const titleClasses = ['text-cyan', 'font-semibold', 'text-xl', 'text-center'];

    txt.forEach((paragraph) => {
        const classes = paragraph.isTitle ? titleClasses : [];
        const newParagraph = createElement(paragraph.tag, classes);
        newParagraph.innerText = paragraph.content;

        textContainer.appendChild(newParagraph);
    });

    return textContainer;
}

function toggleHide(event) {
    event.target.classList.toggle('hidden');
    event.target.classList.toggle('flex');
}

function cardimage(img) {
    const containerClasses = ['relative', 'text-cyan']
    const container = createElement('div', containerClasses);

    const hiddenContainerClasses = ['absolute', 'left-0', 'right-0', 'p-2', 'hidden', 'flex-col', 'justify-between', 'h-full', 'bg-background', 'bg-opacity-75', 'border-b', 'border-cyan'];

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

function addAppear(event) {
    if (event.target.tagName === 'LI') {
        event.target.children[0].children[0].classList.remove('hidden');
        event.target.children[0].children[0].classList.add('flex');
    }
}

function removeAppear(event) {
    if (event.target.tagName === 'LI') {
        event.target.children[0].children[0].classList.add('hidden');
        event.target.children[0].children[0].classList.remove('flex');
    }
}

function loadProjects() {
    const listClasses = ['flex', 'flex-col', 'gap-2', 'md:flex-row', 'md:flex-wrap', 'md:gap-0', 'md:justify-between', 'pt-2'];
    const projectList = createElement('ul', listClasses);

    const cardClasses = ['flex', 'flex-col', 'border', 'rounded-xl', 'p-2', 'md:w-56', 'md:p-3', 'md:mb-5', 'group'];

    sectionContent.forEach((project) => {
        const card = createElement('li', cardClasses);
        card.appendChild(cardimage(project.img));
        card.appendChild(cardDescription(project.text));
        card.addEventListener('click', addAppear);
        card.addEventListener('mouseenter', addAppear);
        card.addEventListener('mouseleave', removeAppear);

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