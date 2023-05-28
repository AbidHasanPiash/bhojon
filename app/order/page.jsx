'use client'
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import useDeviceType from '@/hooks/useDeviceType';

export default function Order() {
  const deviceType = useDeviceType();  

  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Generate sample data for pagination
  // const data = Array.from({ length: 50 }, (_, index) => `Item ${index + 1}`);
  const data = [
    {
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952"
    },
    {
      albumId: 1,
      id: 2,
      title: "reprehenderit est deserunt velit ipsam",
      url: "https://via.placeholder.com/600/771796",
      thumbnailUrl: "https://via.placeholder.com/150/771796"
    },
    {
      albumId: 1,
      id: 3,
      title: "officia porro iure quia iusto qui ipsa ut modi",
      url: "https://via.placeholder.com/600/24f355",
      thumbnailUrl: "https://via.placeholder.com/150/24f355"
    },
    {
      albumId: 1,
      id: 4,
      title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      url: "https://via.placeholder.com/600/d32776",
      thumbnailUrl: "https://via.placeholder.com/150/d32776"
    },
    {
      albumId: 1,
      id: 5,
      title: "natus nisi omnis corporis facere molestiae rerum in",
      url: "https://via.placeholder.com/600/f66b97",
      thumbnailUrl: "https://via.placeholder.com/150/f66b97"
    },
    {
      albumId: 1,
      id: 6,
      title: "accusamus ea aliquid et amet sequi nemo",
      url: "https://via.placeholder.com/600/56a8c2",
      thumbnailUrl: "https://via.placeholder.com/150/56a8c2"
    },
    {
      albumId: 1,
      id: 7,
      title: "officia delectus consequatur vero aut veniam explicabo molestias",
      url: "https://via.placeholder.com/600/b0f7cc",
      thumbnailUrl: "https://via.placeholder.com/150/b0f7cc"
    },
    {
      albumId: 1,
      id: 8,
      title: "aut porro officiis laborum odit ea laudantium corporis",
      url: "https://via.placeholder.com/600/54176f",
      thumbnailUrl: "https://via.placeholder.com/150/54176f"
    },
    {
      albumId: 1,
      id: 9,
      title: "qui eius qui autem sed",
      url: "https://via.placeholder.com/600/51aa97",
      thumbnailUrl: "https://via.placeholder.com/150/51aa97"
    },
    {
      albumId: 1,
      id: 10,
      title: "beatae et provident et ut vel",
      url: "https://via.placeholder.com/600/810b14",
      thumbnailUrl: "https://via.placeholder.com/150/810b14"
    },
    {
      albumId: 1,
      id: 11,
      title: "nihil at amet non hic quia qui",
      url: "https://via.placeholder.com/600/1ee8a4",
      thumbnailUrl: "https://via.placeholder.com/150/1ee8a4"
    },
    {
      albumId: 1,
      id: 12,
      title: "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
      url: "https://via.placeholder.com/600/66b7d2",
      thumbnailUrl: "https://via.placeholder.com/150/66b7d2"
    },
    {
      albumId: 1,
      id: 13,
      title: "repudiandae iusto deleniti rerum",
      url: "https://via.placeholder.com/600/197d29",
      thumbnailUrl: "https://via.placeholder.com/150/197d29"
    },
    {
      albumId: 1,
      id: 14,
      title: "est necessitatibus architecto ut laborum",
      url: "https://via.placeholder.com/600/61a65",
      thumbnailUrl: "https://via.placeholder.com/150/61a65"
    },
    {
      albumId: 1,
      id: 15,
      title: "harum dicta similique quis dolore earum ex qui",
      url: "https://via.placeholder.com/600/f9cee5",
      thumbnailUrl: "https://via.placeholder.com/150/f9cee5"
    },
    {
      albumId: 1,
      id: 16,
      title: "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt",
      url: "https://via.placeholder.com/600/fdf73e",
      thumbnailUrl: "https://via.placeholder.com/150/fdf73e"
    },
    {
      albumId: 1,
      id: 17,
      title: "natus doloribus necessitatibus ipsa",
      url: "https://via.placeholder.com/600/9c184f",
      thumbnailUrl: "https://via.placeholder.com/150/9c184f"
    },
    {
      albumId: 1,
      id: 18,
      title: "laboriosam odit nam necessitatibus et illum dolores reiciendis",
      url: "https://via.placeholder.com/600/1fe46f",
      thumbnailUrl: "https://via.placeholder.com/150/1fe46f"
    },
    {
      albumId: 1,
      id: 19,
      title: "perferendis nesciunt eveniet et optio a",
      url: "https://via.placeholder.com/600/56acb2",
      thumbnailUrl: "https://via.placeholder.com/150/56acb2"
    },
    {
      albumId: 1,
      id: 20,
      title: "assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error",
      url: "https://via.placeholder.com/600/8985dc",
      thumbnailUrl: "https://via.placeholder.com/150/8985dc"
    }
  ];
  console.log('daraa', data);

  // Items per page
  const itemsPerPage = 10;
  const pageCount = Math.ceil(data?.length / itemsPerPage);

  // Calculate start and end index for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the items for the current page
  const currentPageItems = data?.slice(startIndex, endIndex);
  return (
    <div className='m-6 p-3 rounded-3xl bg-gray-800'>
      <h1>Pagination Example</h1>
      <h1>{deviceType}</h1>

      <ul className='grid grid-cols-4 gap-3 py-16'>
        {currentPageItems?.map((item, index) => (
          <li key={index}>
            <div className='bg-slate-300'>
              <p>{item.title}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className='flex space-x-3 w-full items-center justify-center'>
        <ReactPaginate
          className='flex items-center justify-center space-x-2 w-fit h-10 text-gray-400 bg-gray-700 px-6 rounded-full'
          previousLabel={'<'}
          nextLabel={'>'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          activeClassName="bg-sky-600 text-white rounded-full mx-auto w-6 h-6 flex items-center justify-center text-gray-200"
          pageClassName="mx-auto w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-800"
        />
      </div>
    </div>
  )
}
