import { Stack } from "./Stack";

export type Project = {
  title: string;
  description: string;
  image: string;
  stacks: Stack[];
  content: string;
}