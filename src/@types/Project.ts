import { IconItemType } from "./IconItem";
import { IconLinkType } from "./IconLink";

export type Project = {
  title: string;
  description: string;
  image: string;
  stacks: IconItemType[];
  content: string;
  links: IconLinkType[]
}