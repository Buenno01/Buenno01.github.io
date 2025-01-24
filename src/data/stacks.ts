import { IconItemType } from "@/@types/IconItem";

type StackData = {
  [key: string]: IconItemType;
}

const stacks: StackData = {
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
  }
}

export default stacks;