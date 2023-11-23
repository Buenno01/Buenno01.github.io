export type HoverItem = {
  title: string
  url: string
};

export type MenuLink = {
  title: string,
  url?: string,
  hover?: HoverItem[],
};
