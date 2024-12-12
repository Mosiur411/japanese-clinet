import React from "react";
import PaginationPrevBtn from "./PaginationPrevBtn";
import PaginationNextBtn from "./PaginationNextBtn";

export default function PaginationBtn({ pageIndex, setPagination, totalPages }) {

  const handlePageClick = (page) => {
    setPagination((prev) => ({ ...prev, pageIndex: page }));
  };
  const renderPageButtons = () => {
    const maxVisiblePages = 5; // Adjust the number of visible page buttons
    // Calculate the range of pages to display
    const startPage = Math.max(0, pageIndex - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages - 1, startPage + maxVisiblePages - 1);

    const pageButtons = [];

    // Display ellipsis at the beginning if necessary
    if (startPage > 0) {
      pageButtons.push(<span key="ellipsis-start">...</span>);
    }

    // Display page buttons within the range
    for (let i = startPage; i <= endPage; i++) {
      const pageAction = i+1 == Number(pageIndex) ? true : false;

      pageButtons.push(
        <button
          key={i}
          onClick={() => handlePageClick(i+1)}
          className={`${pageAction?'bg-[#4ec1ff] text-white' : ''} bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded`}
        >
          {i+1}
        </button>
      );
    }

    // Display ellipsis at the end if necessary
    if (endPage < totalPages - 1) {
      pageButtons.push(<span key="ellipsis-end">...</span>);
    }

    return pageButtons;
  };

  return (
    <div className="flex flex-wrap items-center mt-4 gap-2 sm:mt-0">
      {renderPageButtons()}
      <PaginationPrevBtn
        onClick={() => setPagination((prev) => ({ ...prev, pageIndex: prev.pageIndex - 1 }))}
        disabled={pageIndex === 0}
        page={pageIndex}
      />
      <PaginationNextBtn
        onClick={() => setPagination((prev) => ({ ...prev, pageIndex: prev.pageIndex + 1 }))}
        disabled={pageIndex >= totalPages - 1}
      />
    </div>
  );
}
