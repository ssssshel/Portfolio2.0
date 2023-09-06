export interface IProjectItemProps {
  name: string;
  esDescription: string;
  enDescription: string;
  tools: Array<string>;
  esDetails?: string;
  enDetails?: string;
  img: string;
  url?: string;
  repo?: string;
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

export interface ILaboral {
  enterprise: string,
  en: ILaboralExp
  es: ILaboralExp
}

interface ILaboralExp {
  title: string,
  period: string,
  description: string
}