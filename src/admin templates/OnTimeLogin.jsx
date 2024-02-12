import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Tooltip,
  PointElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import React, { useState, useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip
);

const OnTimeLogin = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["John", "Kevin", "Geroge", "Micheal", "Oreo"],
      datasets: [
        {
          label: "Whom'st let the dogs out",
          data: [12, 55, 34, 120, 720],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.4)",
        },
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Whom'st let the dogs out hey",
        },
      },
    });
  }, []);
  return (
    <div className="main-ontimelogin">
      <Line
        className="line-chart"
        height={250}
        options={chartOptions}
        data={chartData}
      />
    </div>
  );
};

export default OnTimeLogin;
