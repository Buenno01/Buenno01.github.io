import { createElement } from "../elementBuilder.js";

import { skillsContent } from "../lists/skillsSection.js";

function generateSkillList() {
    const skillListClasses = ['flex', 'gap-2', 'md:gap-5', 'flex-wrap', 'pt-2'];
    const skillList = createElement('ul', skillListClasses);
    
    skillsContent.imgs.forEach((skill) => {
        const skillElement = createElement('li', ['relative', 'inline-block']);
        const logo = createElement('img', skillsContent.imgClasses);
        logo.src = `https://skillicons.dev/icons?i=${skill.imgUrl}`;
        logo.alt = skill.alt;
        logo.title = skill.alt;
        skillElement.appendChild(logo);
        skillList.appendChild(skillElement);
    });

    return skillList;
}

export const skillsSectionBuilder = () => {
    const sectionClasses = ['container', 'self-center', 'pt-10', 'max-w-3xl', 'px-2', 'md:px-0'];
    const skillsSection = createElement('section', sectionClasses);
    skillsSection.id = 'skills';

    const titleClasses = ['text-2xl', 'font-bold', 'text-cyan'];
    const title = createElement('h3', titleClasses);
    title.innerText = 'Habilidades.';

    skillsSection.appendChild(title);
    skillsSection.appendChild(generateSkillList());

    return skillsSection;
}
