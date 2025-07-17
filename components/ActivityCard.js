import Link from "next/link";

export default function ActivityCard({ id, title, date, summary, thumbnail }) {
  return (
    <div className="border rounded shadow p-4 flex flex-col">
      {thumbnail && (
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-40 object-cover rounded mb-2"
        />
      )}
      <h2 className="text-lg font-semibold mb-1">{title}</h2>
      <p className="text-sm text-gray-500 mb-2">{date}</p>
      <p className="text-sm flex-grow">{summary}</p>
      <Link
        href={`/activities/${id}`}
        className="mt-2 text-blue-600 text-sm hover:underline self-end"
      >
        詳細 →
      </Link>
    </div>
  );
}
