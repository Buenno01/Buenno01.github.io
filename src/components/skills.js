import { createElement } from "../elementBuilder.js";
import { skillsContent } from "../lists/skillsSection.js";

export const skillsSectionBuilder = () => {
    const skillsSection = createElement('section', 'container');
    skillsSection.id = 'skills';

    const title = createElement('h2', 'skills-title');
    title.innerText = 'Habilidades.';

    const skillList = createElement('ul', 'skills-list');
    skillsContent.forEach((skill) => {
        const skillElement = createElement('li', 'skills-item');
        skillElement.innerHTML = `<img src=${skill.imgUrl} alt=${skill.alt}>`;
        skillList.appendChild(skillElement);
    });

    skillsSection.appendChild(title);
    skillsSection.appendChild(skillList);

    return skillsSection;
}
