import { ElementType } from 'react';

export type FooterLinkType = {
  name: string,
  url: string,
  icon: ElementType,
};

export type StacksType = {
  name: string,
  icon: ElementType,
}

export type SocialMediaType = {
  name: string,
  link: string,
  icon: ElementType,
};

export type CertificationType = {
  name: string,
  institution: string,
  icon: ElementType,
  link: string,
};

export type ProjectType = {
  name: string,
  description: string,
  techs: string[],
  deployLink: string,
  repoLink: string,
  image: string,
};

export type Content = {
  name: string,
  role: string,
  age: number,
  techStacks: StacksType[],
  otherStacks: StacksType[],
  aboutMe: string[],
  projects: ProjectType[],
  socialMedia: SocialMediaType[],
  certifications: CertificationType[],
};

export type Data = {
  EN: Content,
  PT: Content,
};
