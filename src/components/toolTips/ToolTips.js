import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Tooltip = ({ children, text }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const buttonRef = useRef(null);

  const handleButtonClick = () => {
    setShowTooltip(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setShowTooltip(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div ref={buttonRef} onClick={handleButtonClick}>
        {children}
      </div>
      {showTooltip && (
        <div
          style={{
            position: "absolute",
            top: "0%",
            left: "14%",
            transform: "translateX(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "white",
            padding: "8px",
            borderRadius: "4px",
            zIndex: 1,
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

export default Tooltip;
