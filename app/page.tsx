import LinkCard from "@/components/LinkCard";
import data from "../data/data.json";

export default function Home() {
  const { links } = data;
  return (
    <div className="h-[100vh]">
      <div className="w-full max-w-4xl mx-auto">
        {/* Link Cards Container */}
        <div className="space-y-5">
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
