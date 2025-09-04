import Header from "@/components/ui/header";
import FetchWithAuth from "@/utils/fetch-auth";
//import FetchData from "@/utils/fetch-data";
import { cookies } from "next/headers";

export default async function CalendarDetails({ params }) {
  const baseUrl = process.env.BASE_URL;

  const calendarActivityId = (await params).id;
  const cookieStore = await cookies();
  const userId = cookieStore.get("landrup_userid");
  const token = cookieStore.get("landrup_token");
  const role = cookieStore.get("landrup_role");

  if (role.value !== "instructor") {
    redirect("/");
  }

  /*const userData = await FetchData(
    `${baseUrl}/api/v1/activities/${calendarActivityId}`
  );
  const users = userData.users;
  */

  const data = await FetchWithAuth(
    `${baseUrl}/api/v1/users/${userId.value}/roster/${calendarActivityId}`,
    token.value
  );
  console.log("data", data);

  return (
    <div className="p-5">
      <Header title={data.name} />

      {Array.isArray(data) && data.length > 0 ? (
        data.map((user) => (
          <div
            key={`${user.firstname}-${user.lastname}-${user.activity}`}
            className=""
          >
            <div className="text-lg text-white font-semibold">
              {user.firstname} {user.lastname}
            </div>
          </div>
        ))
      ) : (
        <div className="text-white">
          No users are currently enrolled in this activity.
        </div>
      )}
    </div>
  );
}
