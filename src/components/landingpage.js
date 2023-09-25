import { createElement } from "../elementBuilder.js";

import { landingpageContent } from "../lists/landingpageSection.js";

function landingPageImage() {
    const imageElement = createElement('img', 'landingpage-image');
    imageElement.src = landingpageContent.imageUrl;
    imageElement.alt = landingpageContent.alt

    return imageElement;
}

function landingPageDescription() {
    const descriptionContainer = createElement('div', 'landingpage-text');
    const title = createElement('h2', 'landingpage-title');
    title.innerText = landingpageContent.title;
    const description = createElement('p', 'landingpage-description');
    description.innerText = landingpageContent.description;
    const cv = createElement('a', 'landingpage-link');
    cv.innerText = 'Baixar CV';
    cv.href = landingpageContent.link;
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
