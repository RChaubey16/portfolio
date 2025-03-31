import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface LinkCardProps {
  logo: string;
  text: string;
  description: string;
  linkHref: string;
  linkText: string;
}

export default function LinkCard({
  logo,
  text,
  description,
  linkHref,
  linkText,
}: LinkCardProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-dark-a10 rounded-lg border border-dark-a30">
      <div className="p-4 flex items-center">
        <Image src={logo} alt={"GitHub logo"} height={36} width={36} />
        <div className="ml-5">
          <h4 className="text-lg font-semibold text-white">{text}</h4>
          <p className="text-white/70">{description}</p>
        </div>
      </div>
      <Link href={linkHref} target="_blank">
        <Button
          variant={"socialLink"}
          size={"link"}
          className="mb-5 md:mr-4 md:mb-0 text-base cursor-pointer"
        >
          {linkText}
        </Button>
      </Link>
    </div>
  );
}
