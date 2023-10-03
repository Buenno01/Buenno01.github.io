import { createElement } from "../elementBuilder.js";

import { skillsContent } from "../lists/skillsSection.js";

function generateSkillList() {
    const skillListClasses = ['flex', 'gap-2', 'md:gap-5'];
    const skillList = createElement('ul', skillListClasses);
    
    skillsContent.imgs.forEach((skill) => {
        const skillElement = createElement('li', []);
        const logo = createElement('img', skillsContent.imgClasses);
        logo.src = skill.imgUrl;
        logo.alt = skill.alt;
        skillElement.appendChild(logo);
        skillList.appendChild(skillElement);
    });

    return skillList;
}

export const skillsSectionBuilder = () => {
    const sectionClasses = ['container', 'self-center', 'pt-10'];
    const skillsSection = createElement('section', sectionClasses);
    skillsSection.id = 'skills';

    const titleClasses = ['text-2xl', 'font-bold', 'text-cyan'];
    const title = createElement('h3', titleClasses);
    title.innerText = 'Habilidades.';

    skillsSection.appendChild(title);
    skillsSection.appendChild(generateSkillList());

    return skillsSection;
}
