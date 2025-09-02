import ActivityCard from "@/components/ui/activity-card";
import Headings from "@/components/typography/headings";

export const metadata = {
  title: "Activities",
  description: "all activities of the school",
};

export default async function Activities() {
  const response = await fetch("http://localhost:4000/api/v1/activities");
  const data = await response.json();

  return (
    <>
      <main className="mb-[5em]">
        <Headings heading="Activitier" />
        <ul>
          {data.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </ul>
      </main>
    </>
  );
}
