import { createElement } from "../elementBuilder.js";

import { landingpageContent } from "../lists/landingpageSection.js";

function landingPageImage() {
    const imageInfo = landingpageContent.image;
    const imgEl = createElement(imageInfo.tag, imageInfo.classes);
    imgEl.src = imageInfo.url;
    imgEl.alt = imageInfo.alt;

    return imgEl;
}

function landingPageDescription() {
    const textContainerClasses = ['py-5', 'text-foreground', 'px-3', 'max-w-xl', 'flex', 'flex-col', 'gap-2', 'mx-auto'];
    const textContainer = createElement('div', textContainerClasses);

    landingpageContent.text.forEach((element) => {
        const newEl = createElement(element.tag, element.classes);
        newEl.innerText = element.content;
        textContainer.appendChild(newEl);
        if (element.link) {
            newEl.target = '_blank'
            newEl.href = element.link;
        }
    });

    return textContainer
}

export const landingPageBuilder = () => {
    const sectionClass = ['container', 'relative', 'overflow-hidden', 'bg-background', 'flex', 'flex-col', 'justify-center', 'min-h-screen', 'align-center', 'content-center'];
    const  landingPageSection = createElement('section', sectionClass);
    landingPageSection.appendChild(landingPageImage());
    landingPageSection.appendChild(landingPageDescription());

    return landingPageSection;
}
