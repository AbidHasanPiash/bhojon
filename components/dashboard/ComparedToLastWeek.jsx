import CirclePercentage from "@/components/dashboard/CirclePercentage";

export default function ComparedToLastWeek() {
  return (
    <div>
      <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/50 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10 lg:h-full">
        <div className="m-auto w-40">
          <CirclePercentage value={30} />
        </div>
        <div className="mt-6">
          <h5 className="text-center text-xl text-gray-700 dark:text-gray-300">
            Ask to customize
          </h5>
          <div className="mt-2 flex justify-center gap-4">
            <h3 className="text-3xl font-bold text-gray-700 dark:text-white">
              28
            </h3>
            <div className="flex items-end gap-1 text-green-500">
              <svg
                className="w-3"
                viewBox="0 0 12 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.00001 0L12 8H-3.05176e-05L6.00001 0Z"
                  fill="currentColor"
                />
              </svg>
              <span>2%</span>
            </div>
          </div>
          <span className="block text-center text-gray-500">
            Compared to last week 13
          </span>
        </div>
        <table className="mt-6 -mb-2 w-full text-gray-600 dark:text-gray-300">
          <tbody>
            <tr>
              <td className="py-2">Tailored ui</td>
              <td className="text-gray-500">896</td>
              <td>
                <svg
                  className="ml-auto w-16"
                  viewBox="0 0 68 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity="0.4"
                    width="17"
                    height="21"
                    rx="1"
                    fill="#e4e4f2"
                  />
                  <rect
                    opacity="0.4"
                    x="19"
                    width="14"
                    height="21"
                    rx="1"
                    fill="#e4e4f2"
                  />
                  <rect
                    opacity="0.4"
                    x="35"
                    width="14"
                    height="21"
                    rx="1"
                    fill="#e4e4f2"
                  />
                  <rect
                    opacity="0.4"
                    x="51"
                    width="17"
                    height="21"
                    rx="1"
                    fill="#e4e4f2"
                  />
                  <path
                    d="M0 7C8.62687 7 7.61194 16 17.7612 16C27.9104 16 25.3731 9 34 9C42.6269 9 44.5157 5 51.2537 5C57.7936 5 59.3731 14.5 68 14.5"
                    stroke="url(#paint0_linear_622:13631)"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_622:13631"
                      x1="68"
                      y1="7.74997"
                      x2="1.69701"
                      y2="8.10029"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#E323FF" />
                      <stop offset="1" stop-color="#7517F8" />
                    </linearGradient>
                  </defs>
                </svg>
              </td>
            </tr>
            <tr>
              <td className="py-2">Customize</td>
              <td className="text-gray-500">1200</td>
              <td>
                <svg
                  className="ml-auto w-16"
                  viewBox="0 0 68 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity="0.4"
                    width="17"
                    height="21"
                    rx="1"
                    fill="#e4e4f2"
                  />
                  <rect
                    opacity="0.4"
                    x="19"
                    width="14"
                    height="21"
                    rx="1"
                    fill="#e4e4f2"
                  />
                  <rect
                    opacity="0.4"
                    x="35"
                    width="14"
                    height="21"
                    rx="1"
                    fill="#e4e4f2"
                  />
                  <rect
                    opacity="0.4"
                    x="51"
                    width="17"
                    height="21"
                    rx="1"
                    fill="#e4e4f2"
                  />
                  <path
                    d="M0 12.929C8.69077 12.929 7.66833 9.47584 17.8928 9.47584C28.1172 9.47584 25.5611 15.9524 34.2519 15.9524C42.9426 15.9524 44.8455 10.929 51.6334 10.929C58.2217 10.929 59.3092 5 68 5"
                    stroke="url(#paint0_linear_622:13640)"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_622:13640"
                      x1="34"
                      y1="5"
                      x2="34"
                      y2="15.9524"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#8AFF6C" />
                      <stop offset="1" stop-color="#02C751" />
                    </linearGradient>
                  </defs>
                </svg>
              </td>
            </tr>
            <tr>
              <td className="py-2">Other</td>
              <td className="text-gray-500">12</td>
              <td>
                <svg
                  className="ml-auto w-16"
                  viewBox="0 0 68 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity="0.4"
                    width="17"
                    height="21"
                    rx="1"
                    fill="#e4e4f2"
                  />
                  <rect
                    opacity="0.4"
                    x="19"
                    width="14"
                    height="21"
                    rx="1"
                    fill="#e4e4f2"
                  />
                  <rect
                    opacity="0.4"
                    x="35"
                    width="14"
                    height="21"
                    rx="1"
                    fill="#e4e4f2"
                  />
                  <rect
                    opacity="0.4"
                    x="51"
                    width="17"
                    height="21"
                    rx="1"
                    fill="#e4e4f2"
                  />
                  <path
                    d="M0 6C8.62687 6 6.85075 12.75 17 12.75C27.1493 12.75 25.3731 9 34 9C42.6269 9 42.262 13.875 49 13.875C55.5398 13.875 58.3731 6 67 6"
                    stroke="url(#paint0_linear_622:13649)"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_622:13649"
                      x1="67"
                      y1="7.96873"
                      x2="1.67368"
                      y2="8.44377"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFD422" />
                      <stop offset="1" stop-color="#FF7D05" />
                    </linearGradient>
                  </defs>
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
