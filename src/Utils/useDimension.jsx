import React, { useEffect, useState } from "react";

const useDimension = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleInnerWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleInnerWidth);

    return () => {
      window.removeEventListener("resize", handleInnerWidth);
    };
  });
  return screenWidth;
};

export default useDimension;
