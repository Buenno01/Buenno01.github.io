import { createElement } from "../elementBuilder.js";

import { aboutMeContent } from "../lists/aboutmeSection.js";

function aboutMeText() {
    const textContainerClasses = ['flex', 'flex-col', 'gap-1', 'max-w-3xl'];
    const textContainer = createElement('div', textContainerClasses);
    aboutMeContent.text.forEach((element) => {
        const newEl = createElement(element.tag, element.classes);
        newEl.innerHTML = element.content;
        textContainer.appendChild(newEl);
    });

    return textContainer;
}

export const aboutmeBuilder = () => {
    const sectionClasses = ['container', 'pt-10', 'flex', 'justify-center', 'self-center', 'px-2', 'md:px-0'];
    const aboutmeSection = createElement('section', sectionClasses);
    aboutmeSection.id = 'about-me';

    aboutmeSection.appendChild(aboutMeText());

    return aboutmeSection;
};
