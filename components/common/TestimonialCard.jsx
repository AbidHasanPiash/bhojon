import { HiStar } from "react-icons/hi";
import Image from "next/image";
import { ImQuotesLeft } from "react-icons/im";

export default function TestimonialCard({info}) {
  let stars = new Array;
  for (let index = 0; index < info.star; index++) {
    stars[index]=<HiStar />
  }
  return (
    <div className={`w-full h-full rounded-2xl text-gray-900 bg-[url('/images/common/card.png')] bg-contain bg-no-repeat`}>
      <div className="w-full h-full flex-col items-center justify-center">
        {/* Upper section of card */}
        <div className="w-full h-4/6 flex flex-col items-center justify-between">
          <div className="flex items-center justify-start w-full gap-2 p-3">
            <Image src={info.img} width={40} height={40} alt="client" className="rounded-full"/>
            <h1 className="font-bold">{info.name}</h1>
          </div>
          <div className="w-full h-full flex items-center justify-center relative">
            <span className="text-3xl absolute top-4 left-4 text-fuchsia-700"><ImQuotesLeft/></span>
            <h1 className="font-bold px-2.5 text-center text-gray-200"> {info.testimonial} </h1>
            <span className="text-3xl absolute bottom-6 right-4 text-fuchsia-700 rotate-180"><ImQuotesLeft/></span>
          </div>
        </div>
        {/* Down section of card */}
        <div className="w-full h-2/6 border-t-2 border-dashed border-gray-900">
          <div className="flex items-center justify-between py-2">
            <span className="px-2 text-xs flex items-center justify-center">{stars}</span>
            <span className="px-2 text-xs font-bold">{info.date}</span>
          </div>
          <div className="text-center font-bold">
            <h1 className="p-2 text-sm lg:text-base">{info.restaurant}</h1>
          </div>
          <div className="flex-col items-center justify-center w-full">
            <Image src={"/images/common/barcode.png"} width={400} height={100} alt="code" className="w-5/6 mx-auto opacity-75"/>
            <p className="text-center text-xs font-bold tracking-widest text-black"> 1 8 9 5 6 2 4 8 7 </p>
          </div>
        </div>
      </div>
    </div>
  );
}
