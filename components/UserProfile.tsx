import Navbar from "./Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserProfile() {
  return (
    <div className="hidden lg:block">
      <Avatar className="w-22 h-full mb-4">
        <AvatarImage src="/static/photos/avatar-profile.jpg" className="object-cover scale-110" />
        <AvatarFallback>RC</AvatarFallback>
      </Avatar>
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-white">Ruturaj Chaubey</h3>
        <p className="mt-1 text-white/80">Software Engineer</p>
      </div>
      <Navbar />
    </div>
  );
}
