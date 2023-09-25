import { createElement } from "../elementBuilder.js";

function landingPageImage() {
    const imageElement = createElement('div', '');

    return imageElement;
}

export const landingPageBuilder = () => {
    const  landingPageSection = createElement('section', 'landing-page');
    landingPageSection.appendChild(landingPageImage());

    return landingPageSection;
}
