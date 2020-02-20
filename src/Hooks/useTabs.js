import { useState } from "react";

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs))
    const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

export default useTabs;
