'use client'
import { useState } from "react";
import Activities from "@/components/dashboard/Activities";
import ComparedToLastDay from "@/components/dashboard/ComparedToLastDay";
import ComparedToLastWeek from "@/components/dashboard/ComparedToLastWeek";
import { TbCurrencyTaka, TbRefresh } from "react-icons/tb";
import ReceiptModal from "@/components/dashboard/ReceiptModal";
export default function page() {
    const [receiptModal, setReceiptModal] = useState(false);
    const closeReceiptModal = () => {
      setReceiptModal(false);
    }
  return (
    <div>
      <div className="container_gap flex items-center space-x-6">
        <button onClick={()=>setReceiptModal(true)} className="btn_layout_text">
          <span className="btn_text"> <TbCurrencyTaka size={22}/> <span>Receipt</span> </span>
        </button>
        <button className="btn_layout_icon">
          <span className="btn_icon"><TbRefresh size={22}/></span>
        </button>
      </div>
      <div className="container_gap">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Activities/>
          <ComparedToLastDay/>
          <ComparedToLastWeek/>
        </div>
      </div>
      {receiptModal && <ReceiptModal closeReceiptModal={closeReceiptModal}/>}
    </div>
  )
}
