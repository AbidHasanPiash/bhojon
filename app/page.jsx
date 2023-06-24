'use client'
import { useState } from "react";
import Activities from "@/components/dashboard/Activities";
import ComparedToLastDay from "@/components/dashboard/ComparedToLastDay";
import ComparedToLastWeek from "@/components/dashboard/ComparedToLastWeek";
import { TbCurrencyTaka, TbRefresh } from "react-icons/tb";
import ReceiptModal from "@/components/dashboard/ReceiptModal";

export default function Home() {
  const today = new Date();
  const currentDate = today.toDateString();
  const [receiptModal, setReceiptModal] = useState(false);
  const closeReceiptModal = () => {
    setReceiptModal(false);
  }
  return (
    <div>
      <div className="px-6 pt-6 flex justify-between">
        <div className="flex items-center space-x-6">
          <button
            aria-label="bill"
            onClick={()=>setReceiptModal(true)}
            className="h-10 rounded-xl border flex items-center justify-center bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
          >
            <span className="text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white flex items-center justify-center space-x-3 px-3">
              <TbCurrencyTaka size={22}/>
              <span> Receipt {receiptModal}</span>
            </span>
          </button>
          <button
            aria-label="refresh"
            className="h-10 w-10 rounded-xl border flex items-center justify-center bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
          >
            <span className="text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white"><TbRefresh size={22}/></span>
          </button>
        </div>
        <div className="h-10 rounded-xl border dark:border-gray-600 flex items-center justify-center">
          <span className="text-xl text-gray-800 dark:text-white px-3">{currentDate}</span>
        </div>
      </div>
      <div className="px-6 pt-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Activities/>
          <ComparedToLastDay/>
          <ComparedToLastWeek/>
        </div>
      </div>
      {receiptModal && <ReceiptModal closeReceiptModal={closeReceiptModal}/>}
    </div>
  );
}
