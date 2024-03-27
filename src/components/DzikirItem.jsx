import React, { useState, useEffect } from 'react'
import { FaCheckDouble } from "react-icons/fa";

const DzikirItem = ({ index,
  noFaedah,
  data,
  isHidden,
  ...props}) => {
  const [isRead, setIsRead] = useState(false);

  const markAsRead = () => {
    setIsRead(!isRead);
  };

  // Function to save the state to localStorage
  const saveStateToLocalStorage = () => {
    localStorage.setItem('isRead', JSON.stringify(isRead));
  };

  // Function to load state from localStorage
  const loadStateFromLocalStorage = () => {
    const storedIsRead = localStorage.getItem('isRead');
    if (storedIsRead !== null) {
      setIsRead(JSON.parse(storedIsRead));
    }
  };

  // Load state from localStorage on initial render
  useEffect(() => {
    loadStateFromLocalStorage();
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    saveStateToLocalStorage();
  }, [isRead]);

  return (
    <div className="my-10"> 
      
      <article className="rounded-xl border-2 border-gray-100 bg-white" {...props} key={data.id}>
        <div className="p-4 sm:p-6 lg:p-8">
          <div>
            {index > 0 && (
              <h3 className="font-medium sm:text-lg">
               <p className="hover:underline">{data.title}</p>
             </h3>
            )

            }
           <div
              className='text-center'
              dangerouslySetInnerHTML={{__html: data.arabic}}
            />
            <div className="my-8">
              <i className='sm:text-sm text-gray-700'>{data.latin}</i>
            </div>

            <p className="text-sm text-gray-700 my-5">
              {!isHidden && data.translate_id} <strong>{data.narrator && `${data.narrator}`}</strong>
            </p>
            <p className='text-sm text-gray-700 my-5 font-bold'>{data.note}</p>
            <div className="mt-2 sm:flex sm:items-center sm:gap-2">
              <div className="flex items-center gap-1 text-gray-500">
                <button className={!isRead ? "text-xs text-gray-800" : "text-xs text-blue-600"} onClick={markAsRead}><FaCheckDouble className='text-xl'/></button>
              </div>

              <span className="hidden sm:block" aria-hidden="true">&middot;</span>

              {/* <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                Lihat faedah
                <a href="#" className="font-medium underline hover:text-gray-700"> John </a>
              </p> */}
            </div>
            <div className="mt-5"></div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default DzikirItem