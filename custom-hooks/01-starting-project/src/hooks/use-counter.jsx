import { useState, useEffect } from 'react';

const useCounter = (num) => {
    // console.log("In useCounter")
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + num);
      }, 1000);

      return () => clearInterval(interval);
    }, [num]);

    return counter;
};

export default useCounter;