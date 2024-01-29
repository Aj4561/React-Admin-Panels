import React from "react";

const cardStyle = {
    height: "200px",
    width: "28%",
    backgroundColor: "#ffffff",
    boxShadow: "0px 1px 14px 0px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    overflow: "auto",
    marginLeft: "21px",
    marginBottom: "20px",
    marginTop: "20px",
    padding: "24px",
    
};

export default function Card({ children }) {
    return (
        <div style={cardStyle}>
            {children}
        </div>
    );
}
