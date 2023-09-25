import { createElement } from "../elementBuilder.js";
import { aboutMeContent } from "../lists/aboutmeSection.js";

function aboutMeText() {
    const textContainer = createElement('div', 'about-me-text');
    const title = createElement('h2', 'about-me-title');
    title.innerText = aboutMeContent.title;

    const description = createElement('div', 'about-me-description');
    aboutMeContent.description.forEach((paragraph) => {
        const p = createElement ('p', '');
        p.innerHTML = paragraph;
        description.appendChild(p);
    })

    textContainer.appendChild(title);
    textContainer.appendChild(description);

    return textContainer;
}

function aboutMeImage() {
    const image = createElement('img', 'about-me-image');
    image.src = aboutMeContent.imageUrl;
    image.alt = aboutMeContent.alt;
    return image;
}

export const aboutmeBuilder = () => {
    const aboutmeSection = createElement('section', 'container');
    aboutmeSection.id = 'about-me';

    aboutmeSection.appendChild(aboutMeText());
    aboutmeSection.appendChild(aboutMeImage());

    return aboutmeSection;
};
