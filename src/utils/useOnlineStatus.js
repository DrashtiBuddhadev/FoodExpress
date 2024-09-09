import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline",()=>{
        setOnlineStatus(false);
    });
    window.addEventListener("online",()=>{
        setOnlineStatus(true);
    });
  }, []); // Dependency array to ensure effect runs only once

  return onlineStatus;
};

export default useOnlineStatus;
