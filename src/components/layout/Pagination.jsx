import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Product from './Product';


// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
   ];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
            <div className='md:w-[49%] lg:w-[32%]'>
                <Product  src="assets/clock.png" badge={false}/>
            </div>
        ))}
    </>
  );
}

const Pagination = ({ itemsPerPage }) => {
 // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [itemSelected, setItemSelected] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemSelected(event.selected)
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className='md:flex md:flex-wrap md:justify-between '>
      <Items currentItems={currentItems} />
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        previousClassName='hidden'
        nextClassName='hiddden'
        pageClassName='inline-block border border-solid border-[#F0F0F0] py-2 px-3.5 font-dm font-regular font-sm'
        pageLinkClassName='page-link'
        containerClassName='flex flex-wrap gap-x-3.5 gap-y-3.5 md:gap-y-0 mt-12'
        activeClassName='inline-block border border-solid border-[#F0F0F0] py-2 px-3.5 font-dm font-regular font-sm bg-black text-white'
        breakClassName="page-item"
      />
       <p className='lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 mt-2.5 font-dm font-regular font-sm text-[#767676]'>Product from {itemOffset} to {itemOffset + itemsPerPage} of {items.length}</p>
    </>
  );
}

export default Pagination