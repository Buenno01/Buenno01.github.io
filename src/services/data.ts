import { FaGitAlt, FaReact, FaGithub, FaFigma,
  FaSlack, FaTrello, FaLinux, FaLinkedinIn } from 'react-icons/fa';
import { SiJest, SiTailwindcss, SiAdobephotoshop,
  SiAdobeillustrator } from 'react-icons/si';
import { SiRedux } from "react-icons/si";
import { BiLogoTypescript } from 'react-icons/bi';
import { IoLogoJavascript } from 'react-icons/io5';
import { FiFramer } from 'react-icons/fi';
import { MdAlternateEmail } from 'react-icons/md';
import { LuGithub, LuInstagram } from 'react-icons/lu';
import { FaBookAtlas } from 'react-icons/fa6';
import calculator from '../assets/calculator.png';
import todoList from '../assets/todo-list.png';
import weather from '../assets/weather.png';
import passwordManager from '../assets/password-manager.png';
import trybeTunes from '../assets/trybe-tunes.png';
import { SiVitest } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa6";

const getAge = () => {
    const birthDate = new Date('2000-03-31');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

const age = getAge();

const techs = {
    tw: 'Tailwind CSS',
    js: 'JavaScript',
    framer: 'Framer',
    react: 'React.js',
    ts: 'TypeScript',
    redux: 'Redux',
};

type StacksType = {
    name: string,
    icon: string,
}

type SocialMediaType = {
    name: string,
    link: string,
    icon: string,
};

type CertificationType = {
    name: string,
    institution: string,
    icon: string,
    link: string,
};

type ProjectType = {
    name: string,
    description: string,
    techs: string[],
    deployLink: string,
    repoLink: string,
    image: string,
};

type Content = {
    name: string,
    role: string,
    age: number,
    techStacks: StacksType[],
    otherStacks: StacksType[],
    aboutMe: string[],
    projects: ProjectType[],
    socialMedia: SocialMediaType[],
    certifications: CertificationType[],
};

type Data = {
    EN: Content,
    PT: Content,
};

const otherStacks: StacksType[] = [
    {
        name: 'Git',
        icon: FaGitAlt,
    },
    {
        name: 'GitHub',
        icon: FaGithub,
    },
    {
        name: 'Figma',
        icon: FaFigma,
    },
    {
        name: 'Slack',
        icon: FaSlack,
    },
    {
        name: 'Trello',
        icon: FaTrello,
    },
    {
        name: 'Linux',
        icon: FaLinux,
    },
    {
        name: 'Photoshop',
        icon: SiAdobephotoshop,
    },
    {
        name: 'Illustrator',
        icon: SiAdobeillustrator,
    },
];

const techStacks: StacksType[] = [
    {
        name: 'React',
        icon: FaReact,
    },
    {
        name: 'Redux',
        icon: SiRedux,
    },
    {
        name: 'TypeScript',
        icon: BiLogoTypescript,
    },
    {
        name: 'JavaScript',
        icon: IoLogoJavascript,
    },
    {
        name: 'Jest',
        icon: SiJest,
    },
    {
        name: 'Framer',
        icon: FiFramer,
    },
    {
        name: 'Vitest',
        icon: SiVitest,
    },
    {
        name: 'Vite',
        icon: TbBrandVite,
    },
    {
        name: 'Tailwind',
        icon: SiTailwindcss,
    },
    {
        name: 'Bootstrap',
        icon: FaBootstrap,
    },
];

const socialMedia: SocialMediaType[] =  [
    {
        icon: FaLinkedinIn,
        link: 'https://www.linkedin.com/in/viniciusbuenocosta/',
        name: 'linkedIn',
    },
    {
        icon: LuGithub,
        link: 'https://github.com/Buenno01',
        name: 'gitHub',
    },
    {
        icon: LuInstagram,
        link: 'https://www.instagram.com/viniciusbuenoc/',
        name: 'instagram',
    },
    {
        icon: MdAlternateEmail,
        link: 'mailto:buenov535@gmail.com',
        name: 'e-mail',
    },
];

const projects: ProjectType[] = [
    {
        deployLink: '',
        repoLink: 'https://github.com/Buenno01/trybewallet',
        description: '',
        image: '',
        name: 'Trybe Wallet',
        techs: [techs.react, techs.redux, techs.ts, techs.tw],
    },
    {
        deployLink: '',
        repoLink: 'https://github.com/Buenno01/trybetunes',
        description: '',
        image: trybeTunes,
        name: 'Trybe Tunes',
        techs: [techs.react, techs.framer, techs.ts, techs.tw],
    },
    {
        deployLink: '',
        repoLink: 'https://github.com/Buenno01/password-manager',
        description: '',
        image: passwordManager,
        name: 'Password Manager',
        techs: [techs.react, techs.tw, techs.ts],
    },
    {
        deployLink: '',
        repoLink: 'https://github.com/Buenno01/weather',
        description: '',
        image: weather,
        name: 'Weather App',
        techs: [techs.js, 'css', 'html'],
    },
    {
        deployLink: '',
        repoLink: 'https://github.com/Buenno01/todo-list',
        description: '',
        image: todoList,
        name: 'To-do List',
        techs: [techs.js, techs.tw],
    },
    {
        deployLink: '',
        repoLink: 'https://github.com/Buenno01/Calculator',
        description: '',
        image: calculator,
        name: 'Calculator',
        techs: [techs.js, 'css', 'html'],
    },
];

const data: Data = {
    EN: {
        name: 'Vinícius Bueno Costa',
        role: 'Full Stack Developer',
        age,
        techStacks,
        otherStacks,
        aboutMe: [
            'Hello, my name is Vinícius Bueno Costa. I enrolled in the Federal University of Itajubá in 2018, pursuing a degree in Mechanical Engineering. However, during this period, I discovered that what I truly wanted was to become a programmer.',
            'As a result, I paused my studies at UNIFEI and decided to learn as much as I could about programming. I began self-teaching, supported by technical materials and by taking some courses.',
            'After a year following this path, I realized it was necessary to take a break from my job, which at the time was as a waiter, to focus on my professional development. Since then, I have been studying full-stack development at Trybe.',
        ],
        certifications: [
            {
                icon: FaBookAtlas,
                institution: 'Trybe',
                link: '',
                name: 'Full Stack Web Development',
            },
            {
                icon: FaBookAtlas,
                institution: 'Trybe',
                link: '',
                name: 'Bootcamp: Generative AI with AWS',
            },
            {
                icon: FaBookAtlas,
                institution: 'Alura',
                link: '',
                name: 'From scratch: HTML and CSS',
            },
            {
                icon: FaBookAtlas,
                institution: 'Alura',
                link: '',
                name: 'Develop web applications with JavaScript',
            },
            {
                icon: FaBookAtlas,
                institution: 'Alura',
                link: '',
                name: 'HTML and CSS: Responsiveness with mobile first',
            },
        ],
        projects,
        socialMedia,
    },
    PT: {
        name: 'Vinícius Bueno Costa',
        role: 'Desenvolvedor Full Stack',
        age,
        techStacks,
        otherStacks,
        aboutMe: [
            'Oi, meu nome é Vinícius Bueno Costa, eu entrei na Universidade Federal de Itajubá em 2018, no curso de Engenharia Mecânica, mas durante esse período descobri que o que eu queria, de fato, era me tornar um programador.',
            'Dessa forma, interrompi meus estudos na UNIFEI e decidi estudar o que eu pudesse sobre programação, iniciei de forma autodidata, com o apoio de materiais técnicos e seguindo alguns cursos.',
            'Após um ano nesse modelo, percebi que era necessário fazer uma pausa no meu trabalho, que no momento era de garçom, para focar em me desenvolver profissionalmente. Desde então, tenho estudado programação full-stack na Trybe.',
        ],
        certifications: [
            {
                icon: FaBookAtlas,
                institution: 'Trybe',
                link: '',
                name: 'Desenvolvimento Web Full Stack',
            },
            {
                icon: FaBookAtlas,
                institution: 'Trybe',
                link: '',
                name: 'Bootcamp: IA generativa com AWS',
            },
            {
                icon: FaBookAtlas,
                institution: 'Alura',
                link: '',
                name: 'A Partir do Zero: HTML e CSS',
            },
            {
                icon: FaBookAtlas,
                institution: 'Alura',
                link: '',
                name: 'Desenvolva aplicações web com JavaScript',
            },
            {
                icon: FaBookAtlas,
                institution: 'Alura',
                link: '',
                name: 'HTML e CSS: Responsividade com mobile-first',
            },
        ],
        projects,
        socialMedia,
    },
};

export default data;