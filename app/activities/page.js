import Sidebar from "../../components/Sidebar";

export default function Activities() {
  return (
    <main className="flex min-h-screen bg-white md:ml-[25%]">
      <Sidebar />
      <div className="w-1/1 p-8">
        <h1 className="mb-6">活動記録</h1>
        <p className="text-gray-600">ここに活動記録の詳細を表示します。</p>
      </div>
    </main>
  );
}
