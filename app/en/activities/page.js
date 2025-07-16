import SidebarEn from "../../../components/SidebarEn";

export default function Activities() {
  return (
    <main className="flex min-h-screen bg-white">
      <SidebarEn />
      <div className="w-3/4 p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">活動記録</h1>
        <p className="text-gray-600">ここに活動記録の詳細を表示します。</p>
      </div>
    </main>
  );
}
