import { HiStar } from "react-icons/hi";
import Image from "next/image";

export default function TestimonialCard({info, index}) {
  let colors = ['bg-green-300', 'bg-amber-300', 'bg-rose-300', 'bg-fuchsia-300', 'bg-cyan-300'];
  let stars = new Array;
  for (let index = 0; index < info.star; index++) {
    stars[index]=<HiStar />
  }
  return (
    <div className={`w-full h-full rounded-2xl text-gray-900 ${colors[index]}`}>
      <div className="w-full h-full flex-col items-center justify-center">
        {/* Upper section of card */}
        <div className="w-full h-3/4 flex flex-col items-center justify-between">
          <div className="flex items-center justify-start w-full gap-2 p-3">
            <Image src={info.img} width={40} height={40} alt="client" className="rounded-full"/>
            <h1>{info.name}</h1>
          </div>
          <h1 className=" text-xl lg:text-2xl text-center"> " {info.testimonial} "</h1>
          <h1 className="p-2 text-sm lg:text-base">{info.restaurant}</h1>
        </div>
        {/* Down section of card */}
        <div className="w-full h-1/4 border-t-2 border-dashed border-gray-900">
          <div className="flex items-center justify-center py-0.5 space-x-2">
            <span className="px-2 text-xs flex items-center justify-center">{stars}</span>
            <span className="px-2 text-xs">{info.date}</span>
          </div>
          <div className="flex-col items-center justify-center w-full">
            <Image src={"/images/common/barcode.png"} width={400} height={100} alt="code" className="w-4/6 mx-auto opacity-80"/>
            <p className="text-center text-xs text-black"> 1 8 9 5 6 2 4 8 7 </p>
          </div>
        </div>
      </div>
    </div>
  );
}
