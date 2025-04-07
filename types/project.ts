export interface Project {
  title: string;
  projectImage: string;
  projectImageAltText: string;
  projectDescription: string;
  tags: string[];
  linkHref: string;
  linkText: string;
}

export interface Data {
  projects: Project[];
  links: {
    logo: string;
    text: string;
    description: string;
    linkHref: string;
    linkText: string;
  }[];
}
