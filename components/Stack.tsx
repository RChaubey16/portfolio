import { FC } from 'react';
import TechLogo from "./TechLogo";

interface Technology {
  title: string;
  logo: string;
  altText: string;
  linkHref: string;
}

interface StackProps {
  type: string;
  technologies: Technology[];
}

const Stack: FC<StackProps> = ({ type, technologies }) => {
  return (
    <div className="mt-16">
      <h4 className="mb-6 text-lg font-semibold text-white">
        {type}
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {technologies.map((item, index) => (
          <TechLogo
            key={`${item.title}-${index}`}
            title={item.title}
            logo={item.logo}
            altText={item.altText}
            linkHref={item.linkHref}
          />
        ))}
      </div>
    </div>
  );
};

export default Stack;
