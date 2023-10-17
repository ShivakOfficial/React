import React from "react";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

function TopCard({
  title,
  Icon = MonetizationOnIcon,
  amount,
  cirleColor,
  imageColor,
}) {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: 12,
        display: "flex",
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 20,
        paddingBottom: 20,
        marginLeft: 18,
        marginBottom: 12,
      }}
    >
      <div
        style={{
          height: 60,
          width: 60,
          borderRadius: 45,
          backgroundColor: cirleColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon style={{ color: imageColor }} fontSize="large" />
      </div>
      
      <div style={{ marginLeft: 12 }}>
        <p
          style={{
            color: "gray",
            fontSize: 12,
            fontWeight: "600",
            marginBottom: 2,
          }}
        >
          {title}
        </p>
        <p
          style={{
            color: "#383838",
            fontSize: 15,
            fontWeight: "800",
            marginBottom: 0,
          }}
        >
          {amount}{" "}
          
        </p>
        <p
          style={{
            color: "#8C9092",
            fontSize: 12,
            fontWeight: "bold",
            marginBottom: 0,
            
          }}
        >
          ↑ 37.7% this month
        </p>
      </div>
    </div>
  );
}

export default TopCard;
