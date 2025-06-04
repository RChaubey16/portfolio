import Image from "next/image";
import Link from "next/link";
import TitleDescription from "@/components/ui/TitleDescription";
import data from "../data/data.json";
import { Button } from "./ui/button";

export default function PhotosGrid() {
  const { photos } = data;
  return (
    <>
      <TitleDescription
        title="Just Me, Being Impressive"
        description="Handpicked to look like I do interesting things."
        classes="mb-4"
      />
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {photos.slice(0, 4).map((photo, index) => (
            <Image
              key={index + 1}
              src={photo.src}
              alt={photo.alt}
              width={500}
              height={300}
              className="w-full h-[200px] object-cover rounded-lg"
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Link href={"/photos"}>
            <Button
              variant={"secondary"}
              size={"link"}
              className="text-base cursor-pointer"
            >
              {"View more"}
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
