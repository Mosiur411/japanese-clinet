import React from "react";
const selectOption = [
  {
    id: 1,
    value: 5
  },
  {
    id: 2,
    value: 10
  },
  {
    id: 3,
    value: 20
  },
  {
    id: 4,
    value: 50
  },
  {
    id: 5,
    value: 100
  },
]

export default function PageCount({ total, current }) {
  return (
    <section className="flex justify-start gap-2 items-center">
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Page { }
        <span className="ml-[1px] font-medium text-gray-700 dark:text-gray-100">
          {current} of {total}
        </span>
        
      </div>
      
    </section>
  );
}