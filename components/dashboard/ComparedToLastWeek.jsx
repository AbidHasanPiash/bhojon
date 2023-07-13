import CirclePercentage from "@/components/dashboard/CirclePercentage";

export default function ComparedToLastWeek() {
  return (
    <div>
      <div className="container_layout">
        <div className="m-auto w-40">
          <CirclePercentage value={25} />
        </div>
        <div className="mt-6">
          <h5 className="text-center text-xl text-gray-700 dark:text-gray-300">
            Compared to last week
          </h5>
          <div className="mt-2 flex justify-center gap-4">
            <h3 className="text-3xl font-bold">
              28
            </h3>
            <div className="flex items-end gap-1 text-xl text-green-500">
              <span>▲+</span>
            </div>
          </div>
          <span className="block text-center text-gray-500">
            Order served till now
          </span>
        </div>
        <table className="mt-6 -mb-2 w-full text-gray-600 dark:text-gray-300">
          <tbody>
            <tr>
              <td className="py-2">Total order</td>
              <td className="text-gray-500">395</td>
            </tr>
            <tr>
              <td className="py-2">Order served</td>
              <td className="text-gray-500">383</td>
            </tr>
            <tr>
              <td className="py-2">Order Canceled</td>
              <td className="text-gray-500">12</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
