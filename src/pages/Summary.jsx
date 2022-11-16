import React from "react";
import { Bar } from "react-chartjs-2";
import { options } from "../graphdatautil";
import { data } from "../graphdatautil";

const Summary = () => {
  return (
    <div className="summary">
      {" "}
      <div className="header">AICOE PLATFORM SUMMARY</div>
      <div className="bargraph">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default Summary;
