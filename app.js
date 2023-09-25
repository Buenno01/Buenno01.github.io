import { navbarBuilder } from "./src/components/navbar.js";

import { landingPageBuilder } from "./src/components/landingpage.js";

const bodyBuilder = () => {
    const body = document.querySelector('body');
    body.innerHTML = '';

    body.appendChild(navbarBuilder());
    body.appendChild(landingPageBuilder());
};

bodyBuilder();
