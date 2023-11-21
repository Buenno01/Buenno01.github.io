import { menuItens } from "../lists/menuItens.js";

import { createElement } from "../elementBuilder.js";

function toggleHover() {
    if (this.tagName === 'LI'){
        this.children[1].classList.toggle('hidden');
        this.children[1].classList.toggle('md:flex');
        this.classList.toggle('text-cyan');
    }
    else {
        this.nextSibling.classList.toggle('hidden');
        this.nextSibling.classList.toggle('md:flex');
        this.parentNode.classList.toggle('text-cyan');
    }
}

function showMenu(event) {
    event.target.classList.toggle('selected');
    const menu = document.querySelector('header nav');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
    
    document.querySelector('header p').nextElementSibling.classList.add('hidden');
}

function hamburguerMenu() {
    const hamburguerClass = ['flex', 'flex-col', 'justify-items-center', 'gap-2', 'p-0', 'md:hidden', 'cursor-pointer'];
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
    const containerClasses = ['flex', 'justify-between','content-center', 'w-full', 'px-3', 'md:flex-col', 'md:w-auto', 'md:align-center', 'md:justify-center', 'md:pb-1'];
    const container = createElement('div', containerClasses);
    const hamburguer = hamburguerMenu();
    container.appendChild(hamburguer);

    const imgcontainerClasses = ['flex','md:hidden', 'w-10', 'h-10', 'overflow-hidden', 'rounded-full', 'justify-center', 'self-center', 'border','border-cyan'];
    const imgContainer = createElement('span', imgcontainerClasses);
    const imgClasses = ['my-img', 'w-24', 'h-16', 'relative', 'right-2', 'bottom-1'];
    const img = createElement('img', imgClasses);
    img.src = '/assets/minha-foto.jpg';

    imgContainer.appendChild(img);
    container.appendChild(imgContainer);

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

function rightMenu() {
    const containerClasses = ['hidden' ,'md:flex', 'w-12', 'h-12', 'overflow-hidden', 'rounded-full', 'justify-center', 'self-center', 'border','border-cyan'];
    const container = createElement('span', containerClasses);
    const imgClasses = ['my-img', 'w-24', 'h-16', 'relative', 'right-2', 'bottom-1'];
    const img = createElement('img', imgClasses);
    img.src = '/assets/minha-foto.jpg';

    container.appendChild(img);

    return container;
}

function createHover(itemHover) {
    const hoverClasses = ['md:flex-col', 'md:absolute', 'md:left-0', 'md:right-0', 'md:top-12', 'md:content-start', 'md:px-5', 'md:bg-background2', 'md:rounded-b', 'md:py-2', 'md:border-t', 'hidden'];
    const hoverList = createElement('ul', hoverClasses);

    const hoverItemsClasses = ['text-foreground', 'mt-1', 'hover:text-cyan', 'md:text-start', 'flex', 'gap-2', 'content-center', 'align-center'];
    const iconClasses = ['w-4', 'h-4', 'self-center'];
    const iconColor = '8BE9FD';

    itemHover.forEach((link) => {
        const newListItem = createElement('li', hoverItemsClasses);
        const newLink = createElement('a', ['align-center']);
        newLink.href = link.link;
        newLink.innerText = link.name;

        const icon = createElement('img', iconClasses);
        icon.src = `https://cdn.simpleicons.org/${link.icon}/${iconColor}/`;

        newListItem.appendChild(icon);
        newListItem.appendChild(newLink);

        hoverList.appendChild(newListItem);
    });
    return hoverList;
}

function smoothScroll(event) {
    event.preventDefault();
    const hashItem = this.hash;
    const section = document.querySelector(hashItem);

    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
}

function menuItensBuilder() {
    const menuClasses = ['flex-col', 'text-center', 'absolute', 'left-0', 'right-0','top-10', 'bg-background', 'w-full', 'm-0','py-3', 'bg-opacity-95', 'hidden', 'max-w-xl', 'z-20', 'border-b-2', 'border-cyan', 'md:border-0', 'md:flex', 'md:flex-row', 'md:static', 'md:bg-opacity-100', 'md:content-baseline', 'md:justify-between', 'md:mr-20', 'md:p-0'];
    const itensList = createElement('nav', menuClasses);


    const itemsClasses = ['flex', 'flex-col', 'content-center', 'align-center', 'cursor-pointer', 'mt-1', 'py-3', 'hover:text-cyan', 'md:align-baseline', 'md:justify-center', 'md:flex-grow', 'md:relative', 'md:mt-0', 'md:border-b', 'md:border-background', 'md:hover:border-cyan'];
    menuItens.forEach((item) => {
        const newItem = createElement('li', itemsClasses);
        if (item.link) {
            const newLink = createElement('a', []);
            newLink.href = item.link;
            newLink.innerText = item.name;
            newLink.addEventListener('click', smoothScroll);
            
            newItem.appendChild(newLink);

        } else {
            const newTitle = createElement('p', ['flex', 'gap-2','content-center', 'justify-center']);
            const newCaret = createElement('img', ['w-px']);
            newTitle.innerText = item.name;
            newCaret.src = "/assets/icons/caretDown.svg";
            newCaret.style.filter = 'invert(100%) sepia(100%) saturate(0%) hue-rotate(114deg) brightness(104%) contrast(101%)';

            newTitle.appendChild(newCaret);
            newItem.appendChild(newTitle);
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
    navbarElement.appendChild(rightMenu());

    return navbarElement;
};
