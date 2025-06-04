import TitleDescription from "@/components/ui/TitleDescription";
import data from "../../data/data.json";
import Image from "next/image";

export default function PhotosPage() {
  const { photos } = data;
  return (
    <div className="w-full">
      <TitleDescription
        title="Just Me, Being Impressive"
        description="Handpicked to look like I do interesting things."
        classes="mb-20"
      />
      <div className="grid grid-cols-1 gap-16 mb-6">
        {photos.map((photo, index) => (
          <div>
            <Image
              key={index + 1}
              src={photo.src}
              alt={photo.alt}
              width={500}
              height={400}
              className="w-full h-[400px] object-cover rounded-sm"
            />
            <p className="mt-2 text-base text-center text-white/70">
              {photo.alt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
