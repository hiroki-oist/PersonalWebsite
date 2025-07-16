import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-white ml-[25%]">
      <Sidebar />
      <div className="w-1/1 relative">
        <img
          src="/BackGround.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
    </main>
  );
}
