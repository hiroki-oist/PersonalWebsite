import Home from "@/components/simple/Home";
import { loadRecentActivities } from "@/lib/recentActivities";

export default function HomePage() {
  return <Home lang="ja" activities={loadRecentActivities("ja")} />;
}
