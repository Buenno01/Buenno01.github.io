import { Project } from '@/@types/Project';
import stacks from './stacks';

const projects: Project[] = [
  {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero ac nunc ultricies ultricies. Nulla facilisi. Nullam ut est nec fel',
    image: '/banner1.jpg',
    stacks: [stacks.react, stacks.next, stacks.tailwind, stacks.typescript],
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero ac nunc ultricies ultricies. Nulla facilisi. Nullam ut est nec fel',
  }
]

export default projects;