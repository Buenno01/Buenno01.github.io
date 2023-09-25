import { socialMedias } from "../lists/socialMedias.js";

import { menuItens } from "../lists/menuItens.js";

import { createElement } from "../elementBuilder.js";

function navbrand() {
    const brand = createElement('h1','navbar-brand');
    brand.innerText = 'Vinícius Bueno Costa';
    return brand;
}

function toggleHover(event) {
    event.target.classList.toggle('hovering');
}

function findMeMenu() {
    const menuItem = createElement('div', 'menu-item');
    menuItem.innerText = 'Find me';
    menuItem.id = 'find-me';
    menuItem.addEventListener('mouseenter', toggleHover);
    menuItem.addEventListener('mouseleave', toggleHover);

    const hoverList = createElement('ul', '');

    socialMedias.forEach((socialMedia) => {
        const newSocialLink = createElement('li', 'menu-item-hover');
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
    const itensList = createElement('nav', 'navbar-menu');
    itensList.appendChild(findMeMenu());

    menuItens.forEach((item) => {
        const newItem = createElement('li', 'menu-item');
        newItem.innerText = item.name;
        itensList.appendChild(newItem);
    });

    return itensList;
}

export const navbarBuilder = () => {
    const navbarElement = document.createElement('header');
    navbarElement.classList.add('navbar');

    navbarElement.appendChild(navbrand());
    navbarElement.appendChild(menuItensBuilder());

    return navbarElement;
};
