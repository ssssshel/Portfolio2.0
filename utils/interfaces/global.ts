export interface IProjectItemProps {
  name: string;
  esDescription: string;
  enDescription: string;
  tools: Array<string>;
  esDetails: string;
  enDetails: string;
  img: string;
  url: string;
  repo: string;
  hasWebView: boolean;
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