import LinkCard from "@/components/LinkCard";
import data from "../data/data.json";

export default function Home() {
  const { links } = data;
  return (
    <div className="w-full">
      <p className="text-white">Home</p>
    </div>
  );
}
