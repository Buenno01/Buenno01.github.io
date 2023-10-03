import { menuItens } from "../lists/menuItens.js";

import { createElement } from "../elementBuilder.js";

function toggleHover(event) {
    console.log(event.target)
    if (event.target.tagName === 'LI'){
        event.target.children[1].classList.toggle('hidden');
        event.target.children[1].classList.toggle('md:flex');
        event.target.classList.toggle('text-cyan')
    } else {
        event.target.nextSibling.classList.toggle('hidden');
        event.target.nextSibling.classList.toggle('md:flex');
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
    const containerClasses = ['flex', 'content-center', 'w-full', 'px-3', 'md:flex-col', 'md:w-auto', 'md:align-center', 'md:justify-center', 'md:pb-1'];
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
    const hoverClasses = ['md:flex-col', 'md:absolute', 'md:left-0', 'md:right-0', 'md:top-12', 'md:content-start', 'md:px-5', 'md:bg-background2', 'md:rounded-b', 'md:py-2', 'hidden'];
    const hoverList = createElement('ul', hoverClasses);

    const hoverItemsClasses = ['text-foreground', 'mt-1', 'hover:text-cyan', 'md:text-start'];

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
    const menuClasses = ['flex', 'flex-col', 'text-center', 'absolute', 'left-0', 'right-0','top-10', 'bg-background', 'w-full', 'm-0','py-3', 'bg-opacity-95', 'hidden', 'md:flex', 'md:flex-row', 'md:static', 'md:bg-opacity-100', 'md:content-baseline', 'md:justify-between', 'md:mr-20', 'md:p-0', 'max-w-xl'];
    const itensList = createElement('nav', menuClasses);


    const itemsClasses = ['flex', 'flex-col', 'content-center', 'align-center', 'cursor-pointer', 'mt-1', 'py-3', 'hover:text-cyan', 'md:align-baseline', 'md:justify-center', 'md:flex-grow', 'md:relative', 'md:mt-0'];
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
    const navbarClasses = ['flex', 'flex-row', 'content-between', 'flex-nowrap', 'bg-background', 'shadow-md', 'text-foreground',  'border-0', 'py-2', 'md:px-3', 'md:py-0'];
    const navbarElement = createElement('header', navbarClasses);

    navbarElement.appendChild(leftMenu());

    return navbarElement;
};
