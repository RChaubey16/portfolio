import Navbar from "./Navbar";

export default function UserProfile() {
  return (
    <div>
      {/* Avatar */}
      {/* Use shadcn avatar component */}
      <div className="border border-red-500">
        <h3 className="text-xl font-semibold text-white">Ruturaj Chaubey</h3>
        <p className="text-white/80">Software Engineer</p>
        <Navbar />
      </div>
    </div>
  );
}
