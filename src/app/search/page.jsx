import Header from "@/components/ui/header";
import BottomNav from "@/components/ui/bottom-nav";
import ActivityCard from "@/components/ui/activity-card";
import SearchBar from "@/components/ui/search-bar";

export const metadata = {
  title: "Search",
  description: "Search Activities.",
};

export default async function SearchPage({ searchParams }) {
  const searchedTerm = searchParams.search;

  const response = await fetch("http://localhost:4000/api/v1/activities");
  const activities = await response.json();

  const filteredActivities = searchedTerm
    ? activities.filter((activity) =>
        activity.name.toLowerCase().includes(searchedTerm.toLowerCase())
      )
    : activities;

  return (
    <>
      <div className="pb-[5em] flex flex-col">
        <Header title="Søg" />
        <div className=" mt-20">
          <SearchBar />
        </div>
        <ul>
          {filteredActivities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </ul>
      </div>
      <BottomNav />
    </>
  );
}
