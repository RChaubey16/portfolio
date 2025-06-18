import Image from "next/image";
import TitleDescription from "./ui/TitleDescription";
import Link from "next/link";
import data from "../data/data.json";

export default function CurrentVentures() {
  const { ventures } = data;
  return (
    <div className="mt-20">
      <TitleDescription
        title="Current Ventures"
        description="Inventing new ways to say 'we’re still in beta'."
        classes=""
      />
      <div className="mt-10 grid grid-cols-1 gap-4">
        {ventures.map((venture, index) => (
          <div className="flex items-center gap-4" key={index}>
            <Image
              src={"/project-icon.svg"}
              alt={"New Project Logo"}
              width={30}
              height={30}
              className="w-[30px] h-[30px] object-cover rounded-lg"
            />
            <div>
              <Link
                href={venture.linkHref}
                className="text-lg text-white/90 font-semibold hover:underline"
                target="_blank"
              >
                {venture.title}
              </Link>
              <p className="text-base text-white/70">{venture.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
