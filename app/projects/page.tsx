import ProjectCard from "@/components/ProjectCard";
import TitleDescription from "@/components/ui/TitleDescription";
import { Project } from "@/types/project";
import data from "../../data/data.json";

export const metadata = {
  title: 'Projects | Ruturaj Chaubey',
  description: "A showcase of my projects, experiments, and things I’ve built.",
};

export default function ProjectsPage() {
  const { projects } = data;
  return (
    <div className="w-full">
      <TitleDescription title="Projects" description="Things I’ve built, explored, and enjoyed creating." classes="mb-16" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project: Project, index) => (
          <ProjectCard
            key={index}
            projectTitle={project.title}
            projectImage={project.projectImage}
            projectImageAltText={project.projectImageAltText}
            projectDescription={project.projectDescription}
            tags={project.tags}
            linkHref={project.linkHref}
            linkText={project.linkText}
          /> 
        ))}
      </div>
    </div>
  );
}
