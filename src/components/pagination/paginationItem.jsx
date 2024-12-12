export default function PaginationItem({ page_number }) {
    return (
      <>
        <button className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-[#2F3D46] dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
          {page_number}
        </button>
      </>
    );
  }
  