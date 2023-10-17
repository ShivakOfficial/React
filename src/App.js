import React from "react";
import "./Style.css";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import TopCard from "./Components/TopCard/TopCard";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import BarChartInReactJs from "./Components/BarChartInReactJs";
import { Grid } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

function App() {
  return (
    <div
      className="App h-screen w-screen"
      style={{
        display: "flex",
        backgroundColor: "#F5F6F8",
      }}
    >
      <Sidebar />
    </div>
  );
}

export default App;
