import React, { useEffect, useState } from "react";
import $ from "jquery";
import "./customCursor.scss";

const CustomCursor = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    $(window).mousemove(function (e) {
      if (showCursor) {
        $(".ring").css(
          "transform",
          `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`
        );
      }
    });
  }, [showCursor]);

  useEffect(() => {
    const handleMouseEnter = () => {
      setShowCursor(false);
    };

    const handleMouseLeave = () => {
      setShowCursor(true);
    };

    $(".t-pointer").on("mouseenter", handleMouseEnter);
    $(".t-pointer").on("mouseleave", handleMouseLeave);

    return () => {
      $(".t-pointer").off("mouseenter", handleMouseEnter);
      $(".t-pointer").off("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    showCursor && (
      <div id="cursor" className="cursor">
        <div className="ring">
          <div>{/* Border */}</div>
        </div>
        <div className="ring">
          <div>{/* Pointer */}</div>
        </div>
      </div>
    )
  );
};

export default CustomCursor;
