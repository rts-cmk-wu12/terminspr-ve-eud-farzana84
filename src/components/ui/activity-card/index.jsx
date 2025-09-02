import Link from "next/link";
import Image from "next/image";

export default function ActivityCard({ activity }) {
  return (
    <section className="p-8">
      <Link href={`/activities/${activity.id}`}>
        <div>
          <Image
            src={activity.asset.url}
            height={300}
            width={400}
            alt="activity-pic"
            className="h-96 w-full rounded-t-3xl rounded-bl-3xl object-cover"
          />
          <div className="relative">
            <div className="absolute bottom-0 w-full bg-[#f0cdf5] h-20 rounded-tr-3xl rounded-bl-xl opacity-75 px-4 py-3">
              <h2 className="text-lg font-semibold">{activity.name}</h2>
              <p className="font-semibold text-sm">
                {activity.minAge}-{activity.maxAge} år
              </p>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
