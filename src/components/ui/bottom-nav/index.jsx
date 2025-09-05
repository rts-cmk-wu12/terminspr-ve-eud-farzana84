import { GoHome, GoSearch, GoCalendar } from "react-icons/go";
import Link from "next/link";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 w-full h-15 bg-[#EAEAEA] ">
      <div className="flex justify-around items-center h-full">
        <Link href="/activities">
          <div className="flex items-center justify-center h-10 w-10 rounded-full ring-2 ring-black">
            <GoHome size={24} className="text-black" />
          </div>
        </Link>
        <Link href="/search">
          <div className="flex items-center justify-center h-10 w-10 rounded-full ring-2 ring-black">
            <GoSearch size={24} className="text-black" />
          </div>
        </Link>
        <Link href="/calendar">
          <div className="flex items-center justify-center h-10 w-10 rounded-full ring-2 ring-black">
            <GoCalendar size={24} className="text-black" />
          </div>
        </Link>
      </div>
    </nav>
  );
}
