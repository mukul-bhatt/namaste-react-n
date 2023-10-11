import { useState, useEffect } from "react";


const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);

  useEffect(() => {
    const timer = setInterval(()=>{
      console.log("TIMER hu mai")
    }, 1000)
  
    return () => {
      clearInterval(timer);
    }
  }, [])
  
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <h3>Count: {count}</h3>
      <h3 onClick={() => setCount2(count2 + 1)}>Count2: {count2}</h3>
      <h3>Location: Champawat</h3>
    </div>
  );
};

export default User;
