import { createElement } from "../elementBuilder.js";

import { landingpageText } from "../lists/landingpageText.js";

function landingPageImage() {
    const imageElement = createElement('img', 'landingpage-image');
    imageElement.src = '/assets/minha-foto.jpg';

    return imageElement;
}

function landingPageDescription() {
    const descriptionContainer = createElement('div', 'landingpage-text');
    const title = createElement('h2', 'landingpage-title');
    title.innerText = landingpageText.title;
    const description = createElement('p', 'landingpage-description');
    description.innerText = landingpageText.description;
    const cv = createElement('a', 'landingpage-link');
    cv.innerText = 'Baixar CV';
    cv.href = landingpageText.link;
    cv.target = '_blank'
    descriptionContainer.appendChild(title);
    descriptionContainer.appendChild(description);
    descriptionContainer.appendChild(cv);

    return descriptionContainer
}

export const landingPageBuilder = () => {
    const  landingPageSection = createElement('section', 'landingpage');
    landingPageSection.appendChild(landingPageImage());
    landingPageSection.appendChild(landingPageDescription());

    return landingPageSection;
}
