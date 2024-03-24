import React, { useState, useEffect } from 'react'

const DzikirItem = ({ index,
  noFaedah,
  data,
  ...props}) => {
  const [isRead, setIsRead] = useState(false);

  const markAsRead = () => {
    setIsRead(true);
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
        {/* {data.dzikr.map((item)=>(
        <div key={item.id}>
          <div className="m-4">
            {item.arabic}
            <br />
            <i>{item.latin}</i>
            
            <br />
            {item.translate_id}
            <br />
            {item.faedah} <b>{item.note}</b>
            {item.narrator}
          </div>
          
        </div>
      ))

      } */}
      
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
              "{data.translate_id}" <strong>{data.narrator && `${data.narrator}`}</strong>
            </p>
            <p className='text-sm text-gray-700 my-5 font-bold'>{data.note}</p>
            <div className="mt-2 sm:flex sm:items-center sm:gap-2">
              <div className="flex items-center gap-1 text-gray-500">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg> */}

                {/* <p className="text-xs">14 comments</p> */}
                {/* {!isRead && <button className="text-xs" onClick={markAsRead}>Mark as Read</button>} */}
                <button className={!isRead ? "text-xs text-gray-800" : "text-xs text-blue-600"} onClick={markAsRead}>Mark as Read</button>
              </div>

              <span className="hidden sm:block" aria-hidden="true">&middot;</span>

              <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                Lihat faedah
                <a href="#" className="font-medium underline hover:text-gray-700"> John </a>
              </p>
            </div>
            <div className="mt-5"></div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default DzikirItem