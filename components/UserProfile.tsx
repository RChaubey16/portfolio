import Navbar from "./Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import data from "@/data/data.json";

export default function UserProfile() {
const { name, role, profileImage } = data;
  return (
    <div className="hidden lg:block">
      <Avatar className="w-22 h-full mb-4">
        <AvatarImage src={profileImage} className="object-cover scale-110" />
        <AvatarFallback>RC</AvatarFallback>
      </Avatar>
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="mt-1 text-white/80">{role}</p>
      </div>
      <Navbar />
    </div>
  );
}
