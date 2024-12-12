import { BsArrowRight } from "react-icons/bs";

export default function PaginationNextBtn({ state, className, ...rest }) {
  return (
    <>
      <button
        {...rest}
        className={`transition-colors duration-300 transform  rounded-md dark:bg-[#2F3D46] ${
          state
            ? "cursor-not-allowed text-gray-500 dark:text-gray-500"
            : ""
        }  ${className}`}
      >
       
        <div className="flex items-center px-4 py-2 bg-gray-800 dark:bg-white dark:text-black text-white text-sm rounded font-medium mb-2 sm:mb-0 ">
          <BsArrowRight />
          <span className="mx-1">Next</span>
        </div>


      </button>
    </>
  );
}
