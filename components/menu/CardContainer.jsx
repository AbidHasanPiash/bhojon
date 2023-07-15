'use client'
import {useState} from 'react'
import FoodCard from './FoodCard'
import ReactPaginate from 'react-paginate';
import { BiDownArrow, BiArrowToLeft, BiArrowToRight } from 'react-icons/bi'

export default function CardContainer({category, deleteItem, editItem}) {
  const [isOpen, setIsOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  const data = category?.items;
  // Items per page
  const itemsPerPage = 8;
  const pageCount = Math.ceil(data?.length / itemsPerPage);
  // Calculate start and end index for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // Get the items for the current page
  const currentPageItems = data?.slice(startIndex, endIndex);
  return (
    <div className={`${isOpen?'max-h-screen':'max-h-24'} transition-all duration-300 overflow-hidden mb-6 p-6 rounded-3xl bg-white border border-gray-200/50 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10`}>
        <div className='pb-10 flex items-center justify-between'>
          <div className='text-2xl font-bold md:text-4xl space-x-5'>
            <span> {category.category} </span>
            <span> {category.items.length} </span>
          </div>
          <button onClick={()=>setIsOpen((p)=>!p)} className="btn_layout_icon">
            <span className={`${isOpen&&'rotate-180'} transition-all duration-300 btn_icon`}>
              <BiDownArrow size={22}/>
            </span>
          </button>
        </div>
        <div className="max-h-[600px] overflow-y-auto grid gap-6 px-4 sm:px-0 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {currentPageItems?.map((item, itemIndex) => (
            <FoodCard item={item} key={itemIndex} category={category.category} deleteItem={deleteItem} editItem={editItem}/>
        ))}
        </div>
        {data?.length > 8 && <div className='rp_layout'>
          <ReactPaginate
            className='rp_container'
            previousLabel={<BiArrowToLeft size={22}/>}
            nextLabel={<BiArrowToRight size={22}/>}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            pageClassName="rp_common"
            previousClassName="rp_common"
            nextClassName="rp_common"
            activeClassName="rp_active"
          />
        </div>}
      </div>
  )
}
