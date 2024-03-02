"use client";

import { ArrowUpIcon } from "lucide-react";
import { useEffect, useState } from "react";

const GoToTop = () => {
  const [scrollPosition, setSrollPosition] = useState(0);
  const [showGoTop, setshowGoTop] = useState(false);

  const handleVisibleButton = () => {
    const position = window.scrollY;
    setSrollPosition(position);

    if (scrollPosition > 50) {
      return setshowGoTop(true);
    } else if (scrollPosition < 50) {
      return setshowGoTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  });

  if (!showGoTop) {
    return null;
  }

  return (
    <a
      href="#"
      className="btn btn-circle fixed btn-primary bottom-4 btn-outline right-4 z-50"
    >
      <ArrowUpIcon />
    </a>
  );
};

export default GoToTop;
