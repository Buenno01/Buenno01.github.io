import { FaGitAlt, FaReact, FaGithub, FaNodeJs, FaHtml5, FaFigma,
  FaSlack, FaTrello, FaVuejs, FaLinux, FaLinkedinIn } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { SiJest, SiTailwindcss, SiAdobephotoshop,
  SiAdobeillustrator } from 'react-icons/si';
import { BiLogoTypescript } from 'react-icons/bi';
import { IoLogoJavascript } from 'react-icons/io5';
import { FiFramer } from 'react-icons/fi';
import { MdAlternateEmail } from 'react-icons/md';
import { LuGithub, LuInstagram } from 'react-icons/lu';
import { FaBookAtlas } from 'react-icons/fa6';
import { FooterLinkType, ProjectType, SkillType } from '../@types/type';
import calculator from '../assets/calculator.png';
import todoList from '../assets/todo-list.png';
import weather from '../assets/weather.png';
import passwordManager from '../assets/password-manager.png';
import trybeTunes from '../assets/trybe-tunes.png';

const linkCertificadoAlura = 'https://cursos.alura.com.br/user/buenov535/fullCertificate/92319cbe1a7462a83dd563c27e40dc0c';

const tag = {
  tw: 'Tailwind CSS',
  js: 'JavaScript',
  framer: 'Framer',
  react: 'React.js',
  ts: 'TypeScript',
};

export const projects: ProjectType[] = [
  {
    name: 'TrybeTunes',
    imgUrl: trybeTunes,
    deployUrl: 'https://trybetunes-oc8yu0qnq-buenno01.vercel.app/',
    repoUrl: 'https://github.com/Buenno01/trybetunes',
    techList: [tag.react, tag.tw, tag.framer, tag.ts],
  },
  {
    name: 'Password Manager',
    imgUrl: passwordManager,
    deployUrl: 'https://password-manager-lir6nbudf-buenno01.vercel.app',
    repoUrl: 'https://github.com/Buenno01/password-manager',
    techList: [tag.react, tag.tw, tag.ts],
  },
  {
    name: 'todo-list',
    imgUrl: todoList,
    deployUrl: 'https://buenno01.github.io/todo-list/',
    repoUrl: 'https://github.com/Buenno01/todo-list',
    techList: [tag.js, tag.tw],
  },
  {
    name: 'weather',
    imgUrl: weather,
    deployUrl: 'https://weather-mhka0e2zi-buenno01.vercel.app/',
    repoUrl: 'https://github.com/Buenno01/weather',
    techList: [tag.js, 'css', 'html'],
  },
  {
    name: 'calculator',
    imgUrl: calculator,
    deployUrl: 'https://buenno01.github.io/Calculator/',
    repoUrl: 'https://github.com/Buenno01/Calculator',
    techList: [tag.js, 'css', 'html'],
  },
];

export const contents = {
  aboutMe: [
    `Oi, meu nome é Vinícius Bueno Costa, eu entrei na Universidade 
    Federal de Itajubá em 2018, no curso de Engenharia Mecânica, mas 
    durante esse período descobri que o que eu queria, de fato, era me 
    tornar um programador.`,

    `Dessa forma, interrompi meus estudos na UNIFEI e decidi estudar o 
    que eu pudesse sobre programação, iniciei de forma autodidata, com 
    o apoio de materiais técnicos e seguindo alguns cursos.`,

    `Após um ano nesse modelo, percebi que era necessário fazer uma 
    pausa no meu trabalho, que no momento era de garçom, para focar em 
    me desenvolver profissionalmente. Desde então, tenho estudado 
    programação full-stack na Trybe.`,
  ],

};

export const hardSkills: SkillType[] = [
  {
    Icon: FaReact,
    name: 'React',
  },
  {
    Icon: FaNodeJs,
    name: 'Node.js',
  },
  {
    Icon: SiJest,
    name: 'Jest',
  },
  {
    Icon: BiLogoTypescript,
    name: 'TypeScript',
  },
  {
    Icon: IoLogoJavascript,
    name: 'JavaScript',
  },
  {
    Icon: IoLogoCss3,
    name: 'CSS3',
  },
  {
    Icon: FaHtml5,
    name: 'HTML5',
  },
  {
    Icon: SiTailwindcss,
    name: 'Tailwind',
  },
  {
    Icon: FiFramer,
    name: 'Framer',
  },
  {
    Icon: FaVuejs,
    name: 'Vue',
  },
];

export const tools: SkillType[] = [
  {
    Icon: FaGitAlt,
    name: 'Git',
  },
  {
    Icon: FaGithub,
    name: 'GitHub',
  },
  {
    Icon: FaFigma,
    name: 'Figma',
  },
  {
    Icon: FaSlack,
    name: 'Slack',
  },
  {
    Icon: FaTrello,
    name: 'Trello',
  },
  {
    Icon: SiAdobephotoshop,
    name: 'Photoshop',
  },
  {
    Icon: SiAdobeillustrator,
    name: 'Illustrator',
  },
  {
    Icon: FaLinux,
    name: 'Linux',
  },
];

export const socialMedia: FooterLinkType[] = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/viniciusbuenoc',
    Icon: FaLinkedinIn,
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/viniciusbuenoc',
    Icon: LuInstagram,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Buenno01',
    Icon: LuGithub,
  },
  {
    name: 'E-mail',
    url: 'mailto:buenov535@gmail.com',
    Icon: MdAlternateEmail,
  },
];

export const courses: FooterLinkType[] = [
  {
    name: '(Em andamento) Desenvolvimento Full-Stack || Trybe',
    url: 'https://instagram.com/viniciusbuenoc',
    Icon: FaBookAtlas,
  },
  {
    name: 'Bootcamp: IA Generativa com AWS || Trybe',
    url: 'https://linkedin.com/in/viniciusbuenoc',
    Icon: FaBookAtlas,
  },
  {
    name: 'Formação A Partir do Zero: HTML e CSS || Alura',
    url: linkCertificadoAlura,
    Icon: FaBookAtlas,
  },
  {
    name: 'Formação Desenvolva Aplicações Web com JavaScript || Alura',
    url: linkCertificadoAlura,
    Icon: FaBookAtlas,
  },
  {
    name: 'HTML e CSS: Responsividade com Mobile-First || Alura',
    url: linkCertificadoAlura,
    Icon: FaBookAtlas,
  },
];

export const data = {
  aboutMe: contents.aboutMe,
  projects,
  skills: [
    {
      headline: 'Hard-Skills',
      content: hardSkills,
    },
    {
      headline: 'Ferramentas',
      content: tools,
    },
  ],
  socialMedia,
};
