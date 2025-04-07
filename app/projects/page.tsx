import ProjectCard from "@/components/ProjectCard";
import data from "../../data/data.json";
import { Project } from "@/types/project";

export default function Projects() {
  const { projects } = data;
  return (
    <div className="w-full">
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
