import { Project } from '@/@types/Project';
import iconItem from './iconItem';

const projects: Project[] = [
  {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero ac nunc ultricies ultricies. Nulla facilisi. Nullam ut est nec fel',
    image: '/banner1.jpg',
    stacks: [iconItem.react, iconItem.liquid, iconItem.typescript],
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero ac nunc ultricies ultricies. Nulla facilisi. Nullam ut est nec fel',
    links: [
      {
        ...iconItem.github,
        url: '/'
      },
      {
        ...iconItem.globe,
        url: '/'
      },
      {
        ...iconItem.document,
        url: '/'
      },
    ],
  },
  {
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero ac nunc ultricies ultricies. Nulla facilisi. Nullam ut est nec fel',
    image: '/banner2.jpg',
    stacks: [iconItem.nodejs, iconItem.mysql, iconItem.typescript],
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero ac nunc ultricies ultricies. Nulla facilisi. Nullam ut est nec fel',
    links: [
      {
        ...iconItem.github,
        url: '/'
      },
      {
        ...iconItem.globe,
        url: '/'
      },
      {
        ...iconItem.document,
        url: '/'
      },
    ],
  },
  {
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero ac nunc ultricies ultricies. Nulla facilisi. Nullam ut est nec fel',
    image: '/banner3.jpg',
    stacks: [iconItem.react, iconItem.next, iconItem.tailwind, iconItem.typescript],
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero ac nunc ultricies ultricies. Nulla facilisi. Nullam ut est nec fel',
    links: [
      {
        ...iconItem.github,
        url: '/'
      },
      {
        ...iconItem.globe,
        url: '/'
      },
      {
        ...iconItem.document,
        url: '/'
      },
    ],
  },
  {
    title: 'Project 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero ac nunc ultricies ultricies. Nulla facilisi. Nullam ut est nec fel',
    image: '/banner1.jpg',
    stacks: [iconItem.react, iconItem.next, iconItem.tailwind, iconItem.typescript],
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero ac nunc ultricies ultricies. Nulla facilisi. Nullam ut est nec fel',
    links: [
      {
        ...iconItem.github,
        url: '/'
      },
      {
        ...iconItem.globe,
        url: '/'
      },
      {
        ...iconItem.document,
        url: '/'
      },
    ],
  },
  {
    title: 'Project 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero ac nunc ultricies ultricies. Nulla facilisi. Nullam ut est nec fel',
    image: '/banner2.jpg',
    stacks: [iconItem.react, iconItem.next, iconItem.tailwind, iconItem.typescript],
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero ac nunc ultricies ultricies. Nulla facilisi. Nullam ut est nec fel',
    links: [
      {
        ...iconItem.github,
        url: '/'
      },
      {
        ...iconItem.globe,
        url: '/'
      },
      {
        ...iconItem.document,
        url: '/'
      },
    ],
  },
  {
    title: 'Project 6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero ac nunc ultricies ultricies. Nulla facilisi. Nullam ut est nec fel',
    image: '/banner3.jpg',
    stacks: [iconItem.react, iconItem.next, iconItem.tailwind, iconItem.typescript],
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero ac nunc ultricies ultricies. Nulla facilisi. Nullam ut est nec fel',
    links: [
      {
        ...iconItem.github,
        url: '/'
      },
      {
        ...iconItem.globe,
        url: '/'
      },
      {
        ...iconItem.document,
        url: '/'
      },
    ],
  },
]

export default projects;