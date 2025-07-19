import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-white md:ml-[25%]">
      <Sidebar />
      <div className="relative w-full">
        <img
          src="/BackGround.png"
          alt="Background"
          className="w-full h-auto object-cover"
        />
      </div>
    </main>
  );
}
