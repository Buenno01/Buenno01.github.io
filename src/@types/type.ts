import { ElementType } from 'react';

export type ProjectType = {
  name: string,
  imgUrl: string,
  deployUrl: string,
  repoUrl: string,
  techList: string[],
};

export type SkillType = {
  name: string,
  Icon: ElementType
};
