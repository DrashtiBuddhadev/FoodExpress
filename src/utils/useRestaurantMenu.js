//custom hook
//restaurantMenu component no longer have to worry about fetching the data.
//it now has only one function to perform that is update UI based on the fetched data.

import { useEffect,useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu=(resId)=>{
    const [resInfo, setResInfo] = useState(null);
    //fetch data
    useEffect(() => {
        fetchMenu();
      }, []);
    
      const fetchMenu = async () => {
        try {
          const data = await fetch(
            MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
          );
          const json = await data.json();
          console.log(json);
          setResInfo(json.data);
        } catch (error) {
          console.error("Failed to fetch:", error);
        }
      };
    return resInfo;
}
export default useRestaurantMenu;