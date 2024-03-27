import React,{useEffect, useState} from 'react'

const Tasbih = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [count, setCount] = useState(() => {
        // Get the initial count from local storage, or default to 0
        return parseInt(localStorage.getItem('tasbihCount')) || 0;
      });
    
      // Update local storage whenever the count changes
      useEffect(() => {
        localStorage.setItem('tasbihCount', count.toString());
      }, [count]);
    
      const handleIncrement = () => {
        setCount(count + 1);
      };
    
      const handleReset = () => {
        setCount(0);
      };

  // Function to check if screen width is below a certain breakpoint (e.g., tablet width)
  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
  };

  // Update isMobile state on window resize
  useEffect(() => {
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);
  return (
    <div className={`fixed ${isMobile ? 'bottom-0' : 'right-6'} bg-slate-100 p-7 shadow-lg flex flex-col justify-center items-center rounded-full`}>
    {/* Sidebar content */}
    <h1>Digital Tasbih</h1>
    <div className="bg-black text-green-400 font-mono text-3xl px-2 py-1 rounded-md mb-4 w-40 text-end">
        {count}
      </div>
      <div className="flex gap-4">
        <button onClick={handleIncrement} className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
          Add
        </button>
        <button onClick={handleReset} className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
          Reset
        </button>
      </div>
  </div>
  )
}

export default Tasbih