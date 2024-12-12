import { BsArrowLeft } from "react-icons/bs";

export default function PaginationPrevBtn({ page, className, ...rest }) {
  return (
    <>
      <button
        {...rest}
        className={`py-2 mx-1 capitalize rounded-md ${
          page === 0
            ? "cursor-not-allowed "
            : ""
        } ${className}`}
      >
        <div className="flex items-center -mx-1 px-4 py-2 bg-gray-800 dark:bg-white dark:text-black text-white text-sm rounded font-medium mb-2 sm:mb-0 sm:mr-2">
          <BsArrowLeft />
          <span className="mx-1">Previous</span>
        </div>
      </button>
    </>
  );
}