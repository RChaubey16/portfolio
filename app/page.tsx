import LinkCard from "@/components/LinkCard";
import data from "../data/data.json";

export default function Home() {
  const { links } = data;
  return (
    <div className="h-[100vh]">
      <div className="w-full max-w-4xl mx-auto">
        {/* Profile component */}
        <div>
          {/* Avatar */}
          {/* Use shadcn avatar component */}
          <div className="border border-red-500">
             {/* Name */}
             <h3 className="text-xl font-semibold text-white">Ruturaj Chaubey</h3>
          {/* Designation */}
          <p className="text-white/80">Software Engineer</p>
          </div>
         

        </div>
        {/* Link Cards Container */}
        <div className="space-y-5 w-[700px]">
          {links.map((link, index) => (
            <LinkCard
              key={index}
              logo={link.logo}
              text={link.text}
              description={link.description}
              linkHref={link.linkHref}
              linkText={link.linkText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
