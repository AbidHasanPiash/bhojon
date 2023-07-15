import CustomerTableRow from "@/components/setup/CustomerTableRow"

export default function Setup() {
  const Customers = [
    {id:1, name:'name1', phone:'01000000000', visited:3, started:'4-Jun-23', totalbill:860},
    {id:1, name:'name1', phone:'01000000000', visited:3, started:'4-Jun-23', totalbill:860},
    {id:1, name:'name1', phone:'01000000000', visited:3, started:'4-Jun-23', totalbill:860},
    {id:1, name:'name1', phone:'01000000000', visited:3, started:'4-Jun-23', totalbill:860},
    {id:1, name:'name1', phone:'01000000000', visited:3, started:'4-Jun-23', totalbill:860},
    {id:1, name:'name1', phone:'01000000000', visited:3, started:'4-Jun-23', totalbill:860},
    {id:1, name:'name1', phone:'01000000000', visited:3, started:'4-Jun-23', totalbill:860},
    {id:1, name:'name1', phone:'01000000000', visited:3, started:'4-Jun-23', totalbill:860},
    {id:1, name:'name1', phone:'01000000000', visited:3, started:'4-Jun-23', totalbill:860},
    {id:1, name:'name1', phone:'01000000000', visited:3, started:'4-Jun-23', totalbill:860},
    {id:1, name:'name1', phone:'01000000000', visited:3, started:'4-Jun-23', totalbill:860},
    {id:1, name:'name1', phone:'01000000000', visited:3, started:'4-Jun-23', totalbill:860},
    {id:1, name:'name1', phone:'01000000000', visited:3, started:'4-Jun-23', totalbill:860},
  ]
  return (
    <div>
      {/* Options */}
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
      {/* Customers Table */}
      <div className="container_gap">
        <div className="container_layout space-y-6">
          {/* Header */}
          <div className="w-full lg:flex lg:items-center lg:justify-between space-y-3">
            <h1 className="text-xl font-bold md:text-3xl">Customer detailes.</h1>
            <input type="search" placeholder="Search customer" className="input_layout2 w-full md:w-1/2" />
          </div>
          <div className="flex items-center justify-between">
            <button className="btn_layout_text">
              <span className="btn_text"><span>Add Customer</span> </span>
            </button>
            <div className="flex items-center space-x-3">
              <span>Sort by</span>
              <select className="select_layout">
                <option value="default">Default</option>
                <option value="name">Name</option>
                <option value="order">Visited</option>
                <option value="bill">Bill</option>
              </select>
            </div>
          </div>
          {/* Table */}
          <table class="table-auto w-full">
            <thead>
              <tr className='bg-blue-200 dark:bg-blue-950'>
                <th className='p-2 text-left rounded-tl-lg'>ID</th>
                <th className='p-2 text-left'>Name</th>
                <th className='p-2 text-left'>Phone</th>
                <th className='p-2 text-left hidden lg:table-cell'>Visited</th>
                <th className='p-2 text-left hidden lg:table-cell'>Started</th>
                <th className='p-2 text-left'>Total Bill</th>
                <th className='p-2 text-left rounded-tr-lg'>Action</th>
              </tr>
            </thead>
            <tbody>
              {Customers.map((customer, index)=>(
                <CustomerTableRow key={index} index={index} customer={customer} Customers={Customers} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
