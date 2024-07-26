/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export function Accordian({ title, body, index }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div key={index} className="border-b border-gray-300 last:border-b-0">
      <button
        type="button"
        className="w-full px-6 py-4 text-left font-medium text-gray-800 hover:bg-bslightgreen focus:outline-none focus:bg-bslightgreen"
        onClick={toggleAccordion}
      >
        {title}
        <span
          className={`float-right transform ${isOpen
            ? 'rotate-180' : 'rotate-0'}  
                                 transition-transform duration-300`}
        >
          <svg className="h-3 w-3 fill-bg-bsnavyblue" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xmlSpace="preserve" stroke="#000000">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path> </g>
          </svg>
        </span>
      </button>
      {isOpen
        && <div className="px-6 py-4 text-gray-600">{body}</div>}
    </div>
  );
}

export default Accordian;
