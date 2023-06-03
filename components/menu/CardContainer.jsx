'use client'
import {useState} from 'react'
import FoodCard from './FoodCard'
import ReactPaginate from 'react-paginate';
import { BiDownArrow, BiArrowToLeft, BiArrowToRight } from 'react-icons/bi'

export default function CardContainer({category, deleteItem, editItem}) {
    const [isOpen, setIsOpen] = useState(false);

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
          <div className='space-x-5'>
            <span className="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              {category.category}
            </span>
            <span>{category.items.length}</span>
          </div>
          <button
            onClick={()=>setIsOpen((p)=>!p)}
            aria-label="close"
            className="h-10 w-10 rounded-xl border flex items-center justify-center bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
          >
            <span className={`${isOpen&&'rotate-180'} transition-all duration-300 text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-white`}>
              <BiDownArrow size={22}/>
            </span>
          </button>
        </div>
        <div className="max-h-[600px] overflow-y-auto grid gap-6 px-4 sm:px-0 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {currentPageItems?.map((item, itemIndex) => (
            <FoodCard item={item} key={itemIndex} category={category.category} deleteItem={deleteItem} editItem={editItem}/>
        ))}
        </div>
        {data?.length > 8 && <div className='flex space-x-3 w-full items-center justify-center mt-6'>
          <ReactPaginate
            className='flex items-center justify-center space-x-2 w-fit h-10 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-6 rounded-full'
            previousLabel={<BiArrowToLeft size={22}/>}
            nextLabel={<BiArrowToRight size={22}/>}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            pageClassName="mx-auto w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-400 dark:hover:bg-gray-800"
            previousClassName="mx-auto w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-400 dark:hover:bg-gray-800 active:bg-sky-600 active:text-white"
            nextClassName="mx-auto w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-400 dark:hover:bg-gray-800 active:bg-sky-600 active:text-white"
            activeClassName="bg-sky-600 hover:bg-sky-600 text-white rounded-full mx-auto w-6 h-6 flex items-center justify-center text-gray-200"
          />
        </div>}
      </div>
  )
}
