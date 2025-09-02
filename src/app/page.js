import { Roboto } from 'next/font/google'
import Image from "next/image";
import logo from "../assets/logo.png";
import Button from "@/components/ui/button";
import Link from "next/link";

const roboto = Roboto({
subsets: ['latin'],
  weight: '300',
})

export default function Home() {
  return (
    <div className={`bg-[url(/splash-image.jpg)] w-screen bg-cover bg-center h-screen bg-no-repeat relative
     overflow-y-hidden overflow-x-hidden `}>
      <Image
        src={logo}
        alt="logo image"
        height={150}
        width={250}
       className={`absolute bottom-80 ${roboto.className}`}
     />
         <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
        <Link href="/activities">
          <Button buttontext={"Kom i gang"} />
        </Link>
      </div>
    </div>
  );
}


