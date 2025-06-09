import TitleDescription from "@/components/ui/TitleDescription";
import data from "@/data/data.json";
import Stack from "@/components/Stack";

export const metadata = {
  title: 'Stack | Ruturaj Chaubey',
  description: "A collection of all the apps, tools and technologies I use on a daily basis.",
};

interface StackItem {
  title: string;
  logo: string;
  altText: string;
  linkHref: string;
}

export default function StackPage() {
  const languageFrameworks: StackItem[] = data["stack:"].language_frameworks;
  const services: StackItem[] = data["stack:"].services;
  const osApps: StackItem[] = data["stack:"].os_apps;

  return (
    <div className="w-full">
      <TitleDescription
        title="Stack"
        description="All the apps, tools and technologies I use on a daily basis."
      />
      <Stack type="Language/Frameworks" technologies={languageFrameworks} />
      <Stack type="Services" technologies={services} />
      <Stack type="OS & Apps" technologies={osApps} />
    </div>
  );
}
