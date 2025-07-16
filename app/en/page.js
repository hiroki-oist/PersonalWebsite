import SidebarEn from "../../components/SidebarEn";

export default function HomeEn() {
  return (
    <main className="flex min-h-screen bg-white">
      <SidebarEn />
      <div className="w-3/4 relative">
        <img
          src="/BackGround.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
    </main>
  );
}
