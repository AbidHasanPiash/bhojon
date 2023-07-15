export default function Setup() {
  return (
    <div>
      <div className="container_gap grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <div className="container_layout space-y-6">
          <h1 className="text-xl font-bold md:text-3xl">Cash Receipt Defaults.</h1>
          <label className="flex items-center justify-between">
            <span className="w-3/4">Default Vat ( % )</span>
            <input type="number" className="input_layout w-10"/>
          </label>
          <label className="flex items-center justify-between">
            <span className="w-3/4">Default Discount ( % )</span>
            <input type="number" className="input_layout w-10"/>
          </label>
          <label className="flex items-center justify-between">
            <span className="w-3/4">Home delivery</span>
            <input type="number" className="input_layout w-10"/>
          </label>
          <div className="flex items-center justify-end">
            <button className="btn_layout_text">
              <span className="btn_text"> <span>Save</span> </span>
            </button>
          </div>
        </div>
        <div className="container_layout space-y-6">
          <h1 className="text-xl font-bold md:text-3xl">Order Options.</h1>
          <label className="flex items-center justify-between">
            <span className="w-3/4">Total table</span>
            <input type="number" className="input_layout w-10"/>
          </label>
          <div className="flex items-center justify-between">
            <h1>Home delivery</h1>
            <label className="relative w-20 h-10 rounded-full cursor-pointer">
              <input type="checkbox" className="peer sr-only"/>
              <span className="absolute w-full h-full rounded-full border border-gray-300 dark:bg-gray-900 dark:border-gray-700 peer-checked:border-cyan-800 dark:peer-checked:border-cyan-300 transition-all duration-300"/>
              <span className="absolute w-8 h-8 rounded-full left-1 top-1 bg-cyan-800 peer-checked:bg-cyan-400 peer-checked:left-11 transition-all duration-300"/>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <h1>Online booking</h1>
            <label className="relative w-20 h-10 rounded-full cursor-pointer">
              <input type="checkbox" className="peer sr-only"/>
              <span className="absolute w-full h-full rounded-full border border-gray-300 dark:bg-gray-900 dark:border-gray-700 peer-checked:border-cyan-800 dark:peer-checked:border-cyan-300 transition-all duration-300"/>
              <span className="absolute w-8 h-8 rounded-full left-1 top-1 bg-cyan-800 peer-checked:bg-cyan-400 peer-checked:left-11 transition-all duration-300"/>
            </label>
          </div>
          <div className="flex items-center justify-end">
            <button className="btn_layout_text">
              <span className="btn_text"> <span>Save</span> </span>
            </button>
          </div>
        </div>
        <div className="container_layout space-y-6">
          <h1 className="text-xl font-bold md:text-3xl">Employees.</h1>
        </div>
      </div>
      <div className="container_gap">
        <div className="container_layout">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold md:text-3xl">Customer detailes.</h1>
            <input type="search" placeholder="Search customer" className="input_layout2 md:w-96" />
            <div className="flex items-center space-x-3">
              <span>Sort by</span>
              <select className="select_layout">
                <option value="default">Default</option>
                <option value="name">Name</option>
                <option value="order">Order</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
