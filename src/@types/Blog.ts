export type Blog = {
  title: string;
  description: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  published_at: string;
  cover_image: string;
  tag_list: string[];
  slug: string;
  id: number;
}

export type BlogById = {
  title: string;
  description: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  published_at: string;
  cover_image: string;
  tags: string[];
  body_markdown: string;
  body_html: string;
}
