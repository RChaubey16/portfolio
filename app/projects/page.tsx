import ProjectCard from "@/components/ProjectCard";
import TitleDescription from "@/components/ui/TitleDescription";
import { Project } from "@/types/project";
import data from "../../data/data.json";

export default function ProjectsPage() {
  const { projects } = data;
  return (
    <div className="w-full">
      <TitleDescription title="Projects" description="Here are some of my projects." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project: Project) => (
          <ProjectCard
            key={project.projectImage}
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
