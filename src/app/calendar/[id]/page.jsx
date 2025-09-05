import Header from "@/components/ui/header";
import BottomNav from "@/components/ui/bottom-nav";

export default async function activityOverview({ params }) {
  const { id } = await params;

  const response = await fetch(`http://localhost:4000/api/v1/activities/${id}`);
  const activity = await response.json();
  const registeredUsers = activity.users || [];

  // console.log("registeredUsers", registeredUsers);

  return (
    <section className="flex flex-col">
      <Header title={activity.name} />
      <ul className="p-5 mt-40">
        {registeredUsers.map((user) => (
          <li key={user.id} className="text-white text-lg font-semibold mt-5">
            {user.firstname} {user.lastname}
          </li>
        ))}
      </ul>
      <BottomNav />
    </section>
  );
}
