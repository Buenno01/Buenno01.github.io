import { Project } from '@/@types/Project';
import iconItem from './iconItem';

const projects: Project[] = [
  {
    slug: 'natura-usa',
    title: 'Natura - USA',
    description: 'Natura is an ecommerce website that sells beauty products, made of natural ingredients from the amazon rainforest. The website is built with Liquid and TypeScript. Hosted on Shopify.',
    image: '/natura-usa-2024.png',
    stacks: [iconItem.liquid, iconItem.typescript],
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero ac nunc ultricies ultricies. Nulla facilisi. Nullam ut est nec fel',
    links: [
      {
        ...iconItem.globe,
        url: 'https://www.naturabrasil.com/'
      },
    ],
  },
  {
    slug: 'carbono-galeria',
    title: 'Carbono Galeria',
    description: 'Carbono Galeria is an art gallery located in São Paulo, Brazil. I developed the website using Liquid template language, focusing on showcasing images and artists. The design features extensive grid layouts for a clean, organized, and visually engaging presentation.',
    image: '/carbono-galeria-2025.png',
    stacks: [iconItem.liquid, iconItem.javascript],
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero ac nunc ultricies ultricies. Nulla facilisi. Nullam ut est nec fel',
    links: [
      {
        ...iconItem.globe,
        url: 'https://www.carbonogaleria.com.br/'
      },
    ],
  },
  {
    slug: 'esca',
    title: 'ESCA Contábil',
    description: 'ESCA Contábil is an accounting firm located in São Paulo, Brazil. The website is built with React and Liquid. It was a inovative project that I developed at Shakers as a front-end developer.',
    image: '/esca-2024.png',
    stacks: [iconItem.react, iconItem.liquid, iconItem.typescript],
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero ac nunc ultricies ultricies. Nulla facilisi. Nullam ut est nec fel',
    links: [
      {
        ...iconItem.globe,
        url: 'https://esca.com.br/'
      },
    ],
  },
  {
    slug: 'ibge-news',
    title: 'IBGE News',
    description: 'This is a news website that fetches data from the IBGE API. The website was a study project at Trybe and is built with React, TypeScript, and Tailwind CSS.',
    image: '/ibge-news-2023.png',
    stacks: [iconItem.react, iconItem.reacttestinglibrary, iconItem.tailwind],
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero ac nunc ultricies ultricies. Nulla facilisi. Nullam ut est nec fel',
    links: [
      {
        ...iconItem.github,
        url: 'https://github.com/Buenno01/ibge-news'
      },
      {
        ...iconItem.globe,
        url: 'https://trybe-news-xi.vercel.app/'
      },
    ],
  },
  {
    slug: 'recipes-app',
    title: 'Recipes App',
    description: 'Recipes App is a web application I developed as a study project at Trybe. It allows users to search for recipes and save them. The app is built with React, TypeScript, Context API, and Tailwind CSS.',
    image: '/recipes-app-2023.png',
    stacks: [iconItem.react, iconItem.reacttestinglibrary, iconItem.tailwind],
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero ac nunc ultricies ultricies. Nulla facilisi. Nullam ut est nec fel',
    links: [
      {
        ...iconItem.github,
        url: 'https://github.com/Buenno01/Recipes-App'
      },
      {
        ...iconItem.globe,
        url: 'https://recipes-app-buenno01.vercel.app/'
      },
    ],
  },
]

export default projects;