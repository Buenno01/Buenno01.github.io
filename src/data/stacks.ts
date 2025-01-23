import { Stack } from "@/@types/IconItem";

type StackData = {
  [key: string]: Stack;
}

const stacks: StackData = {
  react: {
    name: 'React',
    IconKey: 'react-js',
    backgroundColor: '#23272f',
    textColor: '#61DBFB',
  },
  next: {
    name: 'Next.js',
    IconKey: 'next-js',
    backgroundColor: '#000000',
    textColor: '#fff',
  },
  tailwind: {
    name: 'TailwindCSS',
    IconKey: 'tailwindcss',
    backgroundColor: '#0f172a',
    textColor: '#a5f3fc',
  },
  typescript: {
    name: 'TypeScript',
    IconKey: 'typescript',
    backgroundColor: '#007acc',
    textColor: '#fff',
  }
}

export default stacks;