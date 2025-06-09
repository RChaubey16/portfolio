import LinkCard from "@/components/LinkCard";
import data from "../../data/data.json";
import TitleDescription from "@/components/ui/TitleDescription";

export const metadata = {
  title: 'Links | Ruturaj Chaubey',
  description: "Ruturaj's online presence all in one place. Stalking made easy.",
};

export default function LinksPage() {
  const { links } = data;
  return (
    <div className="w-full">
      <TitleDescription
        title="Links"
        description="My online presence all in one place. Stalking made easy."
        classes="mb-16"
      />
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
  );
}
