import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Topnav from "../components/Topnav";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function Dashboard() {
  const [dashboard, setDashboard] = useState({ data: [], labels: [] });
  const [stockTrend, setStockTrend] = useState({});
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState("day");
  const token = localStorage.getItem("token");

  const colors = [
    "rgba(255, 99, 132, 0.8)",
    "rgba(54, 162, 235, 0.8)",
    "rgba(255, 206, 86, 0.8)",
    "rgba(75, 192, 192, 0.8)",
    "rgba(153, 102, 255, 0.8)",
    "rgba(255, 159, 64, 0.8)"
  ];

  useEffect(() => {
    setLoading(true);

    Promise.all([
      fetch("http://127.0.0.1:5000/api/dashboard", {
        headers: { Authorization: `Bearer ${token}` }
      }),
      fetch(`http://127.0.0.1:5000/api/product-stock-trend?period=${period}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
    ])
      .then(async ([dashboardRes, trendRes]) => {
        const dashboardData = await dashboardRes.json();
        const trendData = await trendRes.json();
        setDashboard(dashboardData);
        setStockTrend(trendData);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching dashboard:", err);
        setLoading(false);
      });
  }, [token, period]);

  if (loading) return <div>Loading dashboard...</div>;

  // BAR CHART
  const barData = {
    labels: dashboard.labels,
    datasets: [
      {
        label: "Remaining Stock",
        data: dashboard.data,
        backgroundColor: "rgba(54, 162, 235, 0.6)"
      }
    ]
  };

  // LINE CHART (cumulative)
  const dates = [
    ...new Set(
      Object.values(stockTrend).flat().map(item => item.date)
    )
  ];

  const lineDatasets = Object.keys(stockTrend).map((product, i) => {
    const color = colors[i % colors.length];
    let cumulativeSum = 0;
    const data = dates.map(date => {
      const entry = stockTrend[product].find(d => d.date === date);
      if (entry) cumulativeSum += entry.quantity;
      return cumulativeSum;
    });

    return {
      label: product,
      data,
      borderColor: color,
      backgroundColor: color.replace("0.8", "0.2"),
      tension: 0.4,
      fill: true,
      pointRadius: 3
    };
  });

  const lineData = {
    labels: dates,
    datasets: lineDatasets
  };

  return (
    <>
      <Topnav />
      <Navbar />
      <div className="container main-content">
        <h1 className="text-center mt-5">Dashboard</h1>

        {/* BAR CHART */}
        <div style={{ width: "80%", margin: "0 auto" }} className="mt-4">
          <Bar
            data={barData}
            options={{
              responsive: true,
              plugins: {
                legend: { position: "top" },
                title: { display: true, text: "Remaining Stock Per Product" }
              }
            }}
          />
        </div>

        {/* PERIOD SELECTOR */}
        <div className="mt-5 text-center">
          <label className="me-2 fw-semibold">View Trend By:</label>
          <select
            value={period}
            onChange={e => setPeriod(e.target.value)}
            className="form-select d-inline-block w-auto"
          >
            <option value="hour">Hour</option>
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
          </select>
        </div>

        {/* LINE CHART */}
        <div className="mt-4" style={{ width: "80%", margin: "0 auto" }} >
          <h4 className="text-center">Cumulative Product Purchase Trend</h4>
          <Line
            data={lineData}
            options={{
              responsive: true,
              plugins: {
                legend: { position: "top" },
                title: { display: true, text: "Cumulative Purchases Over Time" }
              },
              interaction: {
                mode: "index",
                intersect: false
              },
              stacked: false
            }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
