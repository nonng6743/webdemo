"use client";

import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const BitcoinChart = () => {
  const [prices, setPrices] = useState<number[]>([]);
  const [timestamps, setTimestamps] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
      const data = await response.json();
      const price = data.bpi.USD.rate_float;
      const time = new Date().toLocaleTimeString();

      setPrices((prevPrices) => [...prevPrices.slice(-9), price]);
      setTimestamps((prevTimestamps) => [...prevTimestamps.slice(-9), time]);
    };

    // Fetch initial data and set interval for real-time updates
    fetchData();
    const interval = setInterval(fetchData, 5000); // Fetch every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const chartData = {
    labels: timestamps,
    datasets: [
      {
        label: "Bitcoin Price (USD)",
        data: prices,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Real-time Bitcoin Price" },
    },
    scales: {
      x: { title: { display: true, text: "Time" } },
      y: { title: { display: true, text: "Price (USD)" } },
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default BitcoinChart;
