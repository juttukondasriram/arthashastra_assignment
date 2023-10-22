// LineChart.js
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const LineChartComponent = ({ data }) => {
  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="Year" />
      <YAxis />
      <CartesianGrid stroke="#ccc" />
      <Line type="line curve" dataKey="Medals" stroke="#8884d8" />
      <Tooltip />
      <Legend />
    </LineChart>
  );
};

export default LineChartComponent;
