import { IconItemType } from "@/@types/IconItem";

type StackData = {
  [key: string]: IconItemType;
}

const iconItem: StackData = {
  react: {
    name: 'React',
    iconKey: 'react-js',
    backgroundColor: '#23272f',
    textColor: '#61DBFB',
  },
  next: {
    name: 'Next.js',
    iconKey: 'next-js',
    backgroundColor: '#000000',
    textColor: '#fff',
  },
  tailwind: {
    name: 'TailwindCSS',
    iconKey: 'tailwindcss',
    backgroundColor: '#0f172a',
    textColor: '#a5f3fc',
  },
  typescript: {
    name: 'TypeScript',
    iconKey: 'typescript',
    backgroundColor: '#007acc',
    textColor: '#fff',
  },
  liquid: {
    name: 'Liquid',
    iconKey: 'liquid',
    backgroundColor: '#95bf47',
    textColor: '#fff',
  },
  mysql: {
    name: 'MySQL',
    iconKey: 'mysql',
    backgroundColor: '#00758f',
    textColor: '#fff',
  },
  nodejs: {
    name: 'Node.js',
    iconKey: 'nodejs',
    backgroundColor: '#3c873a',
    textColor: '#fff',
  },
  github: {
    name: 'Github',
    iconKey: 'github',
    backgroundColor: 'rgb(0, 0, 0)',
    textColor: 'rgb(255, 255, 255)',
  },
  globe: {
    name: 'Website',
    iconKey: 'globe',
    backgroundColor: '#7bccef',
    textColor: 'rgb(255, 255, 255)',
  },
  document: {
    name: 'Article',
    iconKey: 'document',
    backgroundColor: 'rgb(255, 255, 255)',
    textColor: 'rgb(0, 0, 0)',
  },
  html: {
    name: 'HTML',
    iconKey: 'html',
    backgroundColor: '#E34C26',
    textColor: '#fff',
  },
  css: {
    name: 'CSS',
    iconKey: 'css',
    backgroundColor: '#264de4',
    textColor: '#fff',
  },
  javascript: {
    name: 'JavaScript',
    iconKey: 'javascript',
    backgroundColor: '#f0db4f',
    textColor: '#000',
  },
  docker: {
    name: 'Docker',
    iconKey: 'docker',
    backgroundColor: '#1D63ED',
    textColor: '#fff',
  },
  redux: {
    name: 'Redux',
    iconKey: 'redux',
    backgroundColor: '#764abc',
    textColor: '#fff',
  },
  reacttestinglibrary: {
    name: 'React Testing Library',
    iconKey: 'react-testing-library',
    backgroundColor: '#000',
    textColor: '#fff',
  },
  jest: {
    name: 'Jest',
    iconKey: 'jest',
    backgroundColor: '#C21325',
    textColor: '#fff',
  },
  cypress: {
    name: 'Cypress',
    iconKey: 'cypress',
    backgroundColor: '#000',
    textColor: '#fff',
  },
  mocha: {
    name: 'Mocha',
    iconKey: 'mocha',
    backgroundColor: '#8D6748',
    textColor: '#fff',
  },
  chai: {
    name: 'Chai',
    iconKey: 'chai',
    backgroundColor: '#A30701',
    textColor: '#fff',
  },
  git: {
    name: 'Git',
    iconKey: 'git',
    backgroundColor: '#f34f29',
    textColor: '#fff',
  }
}

export default iconItem;