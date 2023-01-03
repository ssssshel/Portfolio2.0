export interface IProjectItemProps {
  name: string;
  description: string;
  tools: Array<string>;
  details: string;
  img: string;
  url: string;
  repo: string;
  type: string;
}

export interface ISkills {
  index: number,
  esName: string,
  enName: string,
  content: Array<{
    src: string,
    alt: string
  }>
}