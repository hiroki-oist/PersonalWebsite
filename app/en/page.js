import Home from "@/components/simple/Home";
import { loadRecentActivities } from "@/lib/recentActivities";

export default function HomePageEn() {
  return <Home lang="en" activities={loadRecentActivities("en")} />;
}
