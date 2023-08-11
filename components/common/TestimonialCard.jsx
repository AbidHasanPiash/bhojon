import { HiStar } from "react-icons/hi";
import Image from "next/image";

export default function TestimonialCard() {
  return (
    <div className="w-full h-full rounded-2xl text-gray-900 bg-green-300">
      <div className="w-full h-full flex-col items-center justify-center">
        {/* Upper section of card */}
        <div className="w-full h-3/4 flex flex-col items-center justify-between">
          <div className="flex items-center gap-2 p-3">
            <Image
              src={"/images/user.jpg"}
              width={40}
              height={40}
              className="rounded-full"
            />
            <h1>Cynthia J. Watts</h1>
          </div>
          <div>
            <h1 className="text-2xl text-center">
              " Your favorite companies are our partners. "
            </h1>
          </div>
          <div className="p-2">Caffe Daruchini</div>
        </div>
        {/* Down section of card */}
        <div className="w-full h-1/4 border-t-2 border-dashed border-gray-900">
          <div className="flex items-center justify-center py-0.5 space-x-2">
            <span className="px-2 flex items-center justify-center">
              {" "}
              <span>5</span> <HiStar />
            </span>
            <span className="px-2">4-6-23</span>
          </div>
          <div className="flex-col items-center justify-center w-full">
            <Image
              src={"/images/common/barcode.png"}
              width={400}
              height={100}
              className="w-5/6 mx-auto opacity-80"
            />
            <p className="text-center text-xs text-black">
              1 8 9 5 6 2 4 8 7 8 9
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
