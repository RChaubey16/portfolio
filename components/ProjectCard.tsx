import Image from "next/image";
import Link from "next/link";
import Tag from "@/components/ui/Tag";

export interface ProjectCardProps {
  projectTitle: string;
  projectImage: string;
  projectImageAltText: string;
  projectDescription: string;
  tags: string[];
  linkText: string;
  linkHref: string;
}

export default function ProjectCard({
  projectImage,
  projectImageAltText,
  projectTitle,
  projectDescription,
  tags,
  linkHref,
  linkText,
}: ProjectCardProps) {
  return (
    <div className="p-4 bg-dark-a10 rounded-sm border border-dark-a30 relative group transition-all duration-300">
      {/* Project image */}
      <Image
        src={projectImage}
        alt={projectImageAltText}
        width={500}
        height={500}
        className="mb-4 border border-white/20 rounded-sm group-hover:opacity-0 transition-opacity duration-300"
      />
      {/* Project title and description */}
      <div className="group-hover:opacity-0 transition-opacity duration-300">
        <h2 className="text-xl font-bold text-white mb-2">
          {projectImageAltText}
        </h2>
        <p className="text-white">{projectDescription}</p>
        <div className="mt-6 flex gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <Tag key={index} label={tag} />
          ))}
        </div>
      </div>
      {/* Hover effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-a10/90 to-white/20 backdrop-blur-sm rounded-sm pointer-events-none"></div>
        <Link
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-4 py-2 bg-white text-dark-a10 rounded-md font-medium hover:bg-opacity-100 transition-colors z-20"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
}
