import { navbarBuilder } from "./src/components/navbar.js";

import { landingPageBuilder } from "./src/components/landingpage.js";

import { aboutmeBuilder } from "./src/components/aboutme.js";

import { skillsSectionBuilder } from "./src/components/skills.js";

import { projectsElement } from "./src/components/projects.js";

const bodyBuilder = () => {
    const body = document.querySelector('body');
    body.innerHTML = '';

    body.appendChild(navbarBuilder());
    body.appendChild(landingPageBuilder());
    body.appendChild(aboutmeBuilder());
    body.appendChild(skillsSectionBuilder());
    body.appendChild(projectsElement());
};

bodyBuilder();

console.log(document.querySelector('html').lang)
