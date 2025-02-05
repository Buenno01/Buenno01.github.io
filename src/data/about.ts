import iconItem from "./iconItem";

const about = {
  name: 'Vinícius Bueno Costa',
  role: 'Fullstack Developer | Shopify Developer',
  description: 'I am a Fullstack Developer with a passion for creating and building new things. I have experience with a wide range of technologies, including React, Next.js, Node.js, and Shopify. I am always looking for new opportunities to learn and grow as a developer.',
  socials: [
    {
      iconKey: 'github',
      name: 'GitHub',
      url: 'https://github.com/Buenno01',
      backgroundColor: '#fff',
      textColor: '#000',
    },
    {
      iconKey: 'linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/viniciusbuenocosta/',
      backgroundColor: '#0e76a8',
      textColor: '#fff',
    }
  ],
  stacks: [
    {
      name: 'Frontend',
      items: [
        iconItem.react,
        iconItem.next,
        iconItem.tailwind,
        iconItem.html,
        iconItem.css,
        iconItem.liquid,
        iconItem.redux,
        iconItem.reacttestinglibrary,
      ]
    },
    {
      name: 'Backend',
      items: [
        iconItem.nodejs,
        iconItem.mysql,
        iconItem.docker,
        iconItem.mocha,
      ]
    },
    {
      name: 'Tools',
      items: [
        iconItem.github,
        iconItem.typescript,
        iconItem.jest,
        iconItem.cypress,
        iconItem.javascript,
        iconItem.git,
      ]
    }
  ]
};

export default about;