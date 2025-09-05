import { cookies } from "next/headers";
import Link from "next/link";

export default async function CalendarCard({ calendarData }) {
  const cookieStore = await cookies();

  const role = cookieStore.get("landrup_role");

  return (
    <>
      {!calendarData || calendarData.length < 1 ? (
        <div className="bg-white w-[90%] flex flex-col justify-center items-start h-[9em] mt-[2em] p-[1em] rounded-lg ">
          <h2 className="pt-5">No Activities available.</h2>
        </div>
      ) : (
        <div>
          {calendarData.map((activity) => (
            <Link
              href={
                role?.value === "instructor"
                  ? `/calendar/${activity.id}`
                  : `/activities/${activity.id}`
              }
              key={activity.id}
              className="bg-white w-[90%] flex flex-col justify-center items-start h-[9em] mt-[2em] pl-[1em] rounded-lg"
            >
              <div className="text-black font-semibold text-[2.5em] overflow-hidden text-ellipsis whitespace-nowrap w-full">
                {activity.name}
              </div>
              <div className="font-semibold text-xl ">
                {activity.weekday} {activity.time}
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
