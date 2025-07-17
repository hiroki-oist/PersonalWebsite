import Link from "next/link";

export default function ActivityCard({ id, title, date, summary, thumbnail }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white">
      {/* サムネがあれば表示 */}
      {thumbnail && (
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-48 object-cover rounded mb-3"
        />
      )}
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500">{date}</p>
      <p className="mt-2 text-gray-700 text-sm">{summary}</p>

      <div className="mt-3 text-right">
        <Link
          href={`/activities/${id}`}
          className="inline-block px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          詳細
        </Link>
      </div>
    </div>
  );
}
