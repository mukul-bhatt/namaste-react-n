import { useState, useEffect } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resMenuData, setResMenuData] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    const response = await fetch(MENU_API_URL + resId);
    const data = await response.json();
    setResMenuData(data);
  }

  return resMenuData;
};

export default useRestaurantMenu;
