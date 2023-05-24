import CirclePercentage from "./dashboard/CirclePercentage";

export default function CircleAnimation({ dashOffsetValue }) {
    const percentage = (dashOffsetValue * 500)/100;
  return (
    <div className="w-full h-96 flex items-center justify-center space-x-6 bg-[#e3edf7]">
        <div className="w-[160px] h-[160px] relative">
          <div className="w-[160px] h-[160px] p-[20px] rounded-full shadow-outer">
            <div className="w-[120px] h-[120px] flex items-center justify-center rounded-full shadow-inner">
              <div id="dataValue" className="text-3xl font-bold text-gray-900">
                {dashOffsetValue}
              </div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
            className="absolute top-0 left-0"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stopColor="#e91e63" />
                <stop offset="100%" stopColor="#673ab7" />
              </linearGradient>
            </defs>
            <circle
                strokeDasharray={472}
                strokeDashoffset={percentage}
                className="fill-none stroke-[url(#GradientColor)] stroke-[20px] animate-circle-animation"
                cx="80" 
                cy="80" 
                r="70" 
                strokeLinecap="round" />
          </svg>
        </div>
        <CirclePercentage value={50}/>
      </div>
  )
}
