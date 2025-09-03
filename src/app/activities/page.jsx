import ActivityCard from "@/components/ui/activity-card";
import Header from "@/components/ui/header";
import BottomNav from "@/components/ui/bottom-nav";

export const metadata = {
  title: "Activities",
  description: "all activities of the school",
};

export default async function Activities() {
  const response = await fetch("http://localhost:4000/api/v1/activities");
  const data = await response.json();

  return (
    <>
      <div className="mb-[5em]">
        <Header title="Activiteter" />
        <ul>
          {data.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </ul>
      </div>
      <BottomNav />
    </>
  );
}
