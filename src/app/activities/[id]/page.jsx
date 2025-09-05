import BottomNav from "@/components/ui/bottom-nav";
import Image from "next/image";
import Button from "@/components/ui/button";
import ShowIfAuthed from "@/actions/showIfAuthed";

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

          <ShowIfAuthed>
            <div className="absolute bottom-7 left-[6em]">
              <Button buttontext={"Tilmeld"} />
            </div>
          </ShowIfAuthed>
        </div>
        <div className="p-[2em]">
          <h2 className="text-white ">{data.name}</h2>
          <div className="text-white ">
            <span>
              {data.minAge}-{data.maxAge} år
            </span>
            <p>{data.description}</p>
          </div>
        </div>
      </section>
      <BottomNav />
    </>
  );
}
/*
  return (
    <>
      <section>
        <div className="relative">
          <Image src={newUrl} alt="activity" width={250} height={150} className="h-[30em] w-full object-cover" />

          {role.value === "instructor" ? (
            <></>
          ) : !isTilmeldt ? (
            <TidmeldButton activityId={activityId} />
          ) : (
            <div className="absolute bottom-7 left-[6em]">
              <Button text={"Forlad"} />
            </div>
          )}
        </div>
        <div className="p-[2em]">
          <h2 className="text-white text-[1.9em] font-semibold">{data.name}</h2>
          <div className="text-white text-[1.4em]">
            {data.minAge}-{data.maxAge} år
            <p className="text-[18px]">{data.description}</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}


    
*/
