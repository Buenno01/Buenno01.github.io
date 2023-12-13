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
import { ProjectType, SkillType, SocialMediaType } from '../@types/type';
import calculator from '../assets/calculator.png';
import pixelEditor from '../assets/pixel-editor.png';
import todoList from '../assets/todo-list.png';
import weather from '../assets/weather.png';

export const projects: ProjectType[] = [
  {
    name: 'calculator',
    imgUrl: calculator,
    deployUrl: 'https://google.com',
    repoUrl: 'https://google.com',
    techList: ['javascript', 'css', 'html'],
  },
  {
    name: 'pixel-editor',
    imgUrl: pixelEditor,
    deployUrl: 'https://google.com',
    repoUrl: 'https://google.com',
    techList: ['javascript', 'css', 'html'],
  },
  {
    name: 'todo-list',
    imgUrl: todoList,
    deployUrl: 'https://google.com',
    repoUrl: 'https://google.com',
    techList: ['javascript', 'css', 'html'],
  },
  {
    name: 'weather',
    imgUrl: weather,
    deployUrl: 'https://google.com',
    repoUrl: 'https://google.com',
    techList: ['javascript', 'css', 'html'],
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

export const socialMedia: SocialMediaType[] = [
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
