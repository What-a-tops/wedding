import React, { useState, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    const scrollContainer = document.querySelector(".scroll-container");
    const scrollPosition = scrollContainer?.scrollTop || 0;
    setIsVisible(scrollPosition > 400);
  };

  useEffect(() => {
    const scrollContainer = document.querySelector(".scroll-container");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", toggleVisibility);
      return () =>
        scrollContainer.removeEventListener("scroll", toggleVisibility);
    }
  }, []);

  const handleScrollToTop = () => {
    const scrollContainer = document.querySelector(".scroll-container");
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 p-3 bg-lime-500 text-white rounded-full cursor-pointer 
    shadow-md transition-all duration-300 hover:bg-lime-400 hover:shadow-lg hover:scale-105 ${
      isVisible
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    }`}
      style={{ zIndex: 9999 }}
      onClick={handleScrollToTop}
    >
      <ChevronUpIcon className="w-5 h-5" />
    </div>
  );
};

export default ScrollToTop;
