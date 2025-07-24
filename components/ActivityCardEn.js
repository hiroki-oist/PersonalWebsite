// components/ActivityCard.js
import Link from "next/link";

export default function ActivityCard({ id, title, date, summary, thumbnail }) {
  return (
    <div className="border rounded-lg p-4 flex flex-col h-full shadow-sm">
      {thumbnail && (
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-40 object-cover rounded mb-3"
        />
      )}

      <h3 className="text-lg font-semibold mb-1 line-clamp-2">{title}</h3>
      <p className="text-xs text-gray-500 mb-2">{date}</p>
      <p className="text-sm text-gray-700 flex-grow line-clamp-3">{summary}</p>

      <div className="mt-4 text-right">
        <Link
          href={`/en/activities/${id}`}
          className="inline-block px-3 py-1 text-sm border rounded hover:bg-gray-100"
        >
          View full article →
        </Link>
      </div>
    </div>
  );
}
