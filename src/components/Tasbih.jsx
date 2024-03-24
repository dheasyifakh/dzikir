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
    <div className={`fixed ${isMobile ? 'bottom-0' : 'right-10'} w-64 h-64 bg-gray-200 p-4 shadow-lg`}>
    {/* Sidebar content */}
    <h1>Digital Tasbih</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
  </div>
  )
}

export default Tasbih