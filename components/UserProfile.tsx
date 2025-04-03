import Navbar from "./Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserProfile() {
  return (
    <div className="hidden lg:block">
      <Avatar className="w-22 h-full mb-4">
        <AvatarImage src="https://media.licdn.com/dms/image/v2/D4D03AQFKqx8NhwbCfQ/profile-displayphoto-shrink_200_200/B4DZXz3rV6GwAY-/0/1743553218770?e=1749081600&v=beta&t=9IbAbpPq6NXdB_EL5MIjMHebsLqryBgLAPMICAd2PE8" />
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
