import { socialMedias } from "../lists/socialMedias.js";

import { menuItens } from "../lists/menuItens.js";

import { createElement } from "../elementBuilder.js";

function toggleHover(event) {
    console.log(event.target)
    if (event.target.tagName === 'LI'){
        event.target.children[1].classList.toggle('hidden');
        event.target.classList.toggle('text-cyan')
    } else {
        event.target.nextSibling.classList.toggle('hidden');
        event.target.parentNode.classList.toggle('text-cyan')
    }
}

function showMenu(event) {
    event.target.classList.toggle('selected');
    const menu = document.querySelector('header nav');
    menu.classList.toggle('hidden');
    
    document.querySelector('header p').nextElementSibling.classList.add('hidden');
}

function hamburguerMenu() {
    const hamburguerClass = ['flex', 'flex-col', 'justify-items-center', 'gap-2', 'p-0', 'mr-auto', 'md:hidden', 'cursor-pointer'];
    const stickClass = ['bg-cyan', 'rounded'];
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
    const containerClasses = ['flex', 'content-center', 'w-full', 'md:w-auto', 'px-3'];
    const container = createElement('div', containerClasses);
    const hamburguer = hamburguerMenu();
    container.appendChild(hamburguer);

    const brandClasses = ['text-cyan', 'text-2xl', 'font-bold'];
    const brand = createElement('h1', brandClasses);
    brand.innerText = 'Vbc.';
    container.appendChild(brand)
    return container;
}

function leftMenu() {
    const containerClasses = ['flex', 'flex-row', 'w-full', 'relative'];
    const container = createElement('div', containerClasses);
    container.appendChild(navbrand());
    container.appendChild(menuItensBuilder());

    return container;
}

function createHover(itemHover) {
    const hoverClasses = ['hidden']
    const hoverList = createElement('ul', hoverClasses);

    const hoverItemsClasses = ['text-foreground', 'hover:text-cyan'];

    itemHover.forEach((link) => {
        const newSocialLink = createElement('li', hoverItemsClasses);
        newSocialLink.innerHTML = `
        <a href="${link.link}" target="_blank">
        ${link.name}
        </a>
        `;
        hoverList.appendChild(newSocialLink);
    });
    return hoverList;
}

function menuItensBuilder() {
    const menuClasses = ['flex', 'flex-col', 'text-center', 'absolute', 'top-10', 'bg-background', 'w-full', 'm-0', 'border-b', 'border-foreground', 'md:flex', 'md:static', 'py-3', 'bg-opacity-95', 'hidden'];
    const itensList = createElement('nav', menuClasses);


    const itemsClasses = ['flex', 'flex-col', 'content-center', 'align-center', 'cursor-pointer', 'border-b-0', 'hover:text-cyan'];
    menuItens.forEach((item) => {
        const newItem = createElement('li', itemsClasses);
        if (item.link) {
            newItem.innerHTML = `
        <a href=${item.link}>${item.name}</a>`;
        } else {
            newItem.innerHTML = `<p>${item.name}</p>`
        }
        if (item.hover) {
            const hoverMenu = createHover(item.hover);
            newItem.appendChild(hoverMenu);
            ['click'].forEach((event) => {
                newItem.addEventListener(event, toggleHover);
            })
        }

        itensList.appendChild(newItem);
    });

    return itensList;
}

export const navbarBuilder = () => {
    const navbarElement = createElement('header', ['flex', 'flex-row', 'content-between', 'flex-nowrap', 'py-2']);

    navbarElement.appendChild(leftMenu());

    return navbarElement;
};
