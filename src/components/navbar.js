import { socialMedias } from "../lists/socialMedias.js";

import { menuItens } from "../lists/menuItens.js";

import { createElement } from "../elementBuilder.js";

function toggleHover(event) {
    event.target.classList.toggle('hovering');
}

function showMenu(event) {
    event.target.classList.toggle('selected');
}

function hamburguerMenu() {
    const hamburguerClass = ['flex', 'flex-col', 'justify-items-center', 'gap-2', 'p-0', 'mr-auto', 'md:hidden', 'cursor-pointer'];
    const stickClass = ['bg-cyan-300', 'rounded'];
    const hamburguer = createElement('div', hamburguerClass);

    for (let i = 0; i < 3; i += 1) {
        const sticks = createElement('span', stickClass);
        sticks.style.height = '3px';
        sticks.style.width = '30px';
        hamburguer.appendChild(sticks);
    }
    hamburguer.addEventListener('click', showMenu);

    return hamburguer;
}

function navbrand() {
    const containerClasses = ['flex', 'content-center', 'w-full'];
    const container = createElement('div', containerClasses);
    const hamburguer = hamburguerMenu();
    container.appendChild(hamburguer);

    const brandClasses = ['text-cyan-300', 'text-2xl', 'font-bold'];
    const brand = createElement('h1', brandClasses);
    brand.innerText = 'Vbc.';
    container.appendChild(brand)
    return container;
}

function leftMenu() {
    const containerClasses = ['flex', 'flex-row', 'w-full'];
    const container = createElement('div', containerClasses);
    container.appendChild(navbrand());
    container.appendChild(menuItensBuilder());

    return container;
}

function findMeMenu() {
    const menuItem = createElement('div', ['menu-item']);
    menuItem.innerText = 'Find me';
    menuItem.id = 'find-me';
    menuItem.addEventListener('mouseenter', toggleHover);
    menuItem.addEventListener('mouseleave', toggleHover);

    const hoverList = createElement('ul', []);

    socialMedias.forEach((socialMedia) => {
        const newSocialLink = createElement('li', ['menu-item-hover']);
        newSocialLink.innerHTML = `
        <a href="${socialMedia.link}" target="_blank">
        ${socialMedia.name}
        </a>
        `;
        hoverList.appendChild(newSocialLink);
    });

    menuItem.appendChild(hoverList);
    return menuItem;
}

function menuItensBuilder() {
    const itensList = createElement('nav', ['hidden', 'md:flex']);
    itensList.appendChild(findMeMenu());

    menuItens.forEach((item) => {
        const newItem = createElement('li', ['menu-item']);
        newItem.innerHTML = `
        <a href=${item.link}>${item.name}</a>`;

        itensList.appendChild(newItem);
    });

    return itensList;
}

export const navbarBuilder = () => {
    const navbarElement = createElement('header', ['flex', 'flex-row', 'content-between', 'flex-nowrap', 'p-3']);

    navbarElement.appendChild(leftMenu());

    return navbarElement;
};
