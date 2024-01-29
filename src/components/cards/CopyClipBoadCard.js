import React, { useRef } from "react";
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PropTypes from "prop-types";
import Tooltip from "../toolTips/ToolTips";

const CopyClipboardButtonStyle = {
  // Add any additional styles if needed
};

const DividerStyle = {
  height: "1px",
  width: "100%",
  backgroundColor: "gray",
  margin: "10px 0",
};

function CopyClipboardCard({ children }) {
    const containerRef = useRef(null);
  
    const handleCopyToClipboard = async () => {
      try {
        const plainTextContent = containerRef.current.innerText;
  
        await navigator.clipboard.writeText(plainTextContent);
        console.log('Plain text content successfully copied to clipboard');
      } catch (err) {
        console.error('Unable to copy plain text content to clipboard', err);
      }
    };
  
    return (
      <div>
        <div style={CopyClipboardButtonStyle}>
          <Tooltip text="Copy to Clipboard">

          <IconButton size="small" onClick={handleCopyToClipboard}>
              <ContentCopyIcon fontSize="small" />
          </IconButton>
          Copy
          </Tooltip>
        </div>
  
        <div style={DividerStyle}></div>
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px",
            marginTop: "10px",
            whiteSpace: "pre-wrap", // Preserve whitespace
          }}
          ref={containerRef}
        >
          {children}
        </div>
      </div>
    );
  }

  CopyClipboardCard.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default CopyClipboardCard;
