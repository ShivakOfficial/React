import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const data = [
  { value: 35, label: "B" },
  { value: 35, label: "C" },
  { value: 30, label: "D" },
];

const size = {
  width: 300,
  height: 200,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 12,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {"67% "}
      Total New Customers
    </StyledText>
  );
}

export default function PieChartCus() {
  return (
    <div
      style={{
        width: "40%",

        backgroundColor: "white",
      }}
    >
      <div
        style={{
          padding: "3px",
          //paddingRight:"12px",
          //  alignItems: "baseline",
          //paddingLeft:"5px",
          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
      >
        <h4
          style={{ fontSize: "20px", fontWeight: "bold", paddingTop: "12px" }}
        >
          Customers
        </h4>
        <p
          style={{
            fontSize: 10,
            opacity: 0.8,
          }}
        >
          Customers that buy Products
        </p>
      </div>
      <div
        style={{
          display: "flex",
          paddingBlock: 15,
        }}
      >
        <PieChart
          series={[{ data, innerRadius: 60 }]}
          {...size}
          //   disableAxisListener={true}
          slotProps={{
            legend: { hidden: true },
          }}
        >
          <PieCenterLabel>Total New Customers</PieCenterLabel>
        </PieChart>
      </div>
    </div>
  );
}
