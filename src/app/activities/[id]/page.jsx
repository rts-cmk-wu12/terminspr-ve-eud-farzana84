import BottomNav from "@/components/ui/bottom-nav";
import Image from "next/image";

export const metadata = {
  title: "Activity Details",
  description: "details of a single activity",
};
export default async function ActivityDetailsPage({ params }) {
  const activityId = await params?.id;
  const response = await fetch(
    `http:localhost:4000/api/v1/activities/${activityId}`
  );
  const data = await response.json();
  return (
    <>
      <section>
        <div className="relative">
          <Image
            src={data.asset.url}
            alt="activity"
            width={200}
            height={200}
            className="h-[30em] w-full object-cover"
          />
        </div>
        <div className="p-[2em]">
          <h2 className="text-white ">{data.name}</h2>
          <div className="text-white ">
            {data.minAge}-{data.maxAge} år
            <p>{data.description}</p>
          </div>
        </div>
      </section>
      <BottomNav />
    </>
  );
}
