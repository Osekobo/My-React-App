import { useState, useEffect } from "react"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Dashboard() {
  const [dashboard, setPosts] = useState({ data: [], labels: [] });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/dashboard", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("Dashboard Data:", data);
        setPosts(data)
        setLoading(false);
      })
      .catch(error => console.error('Error fetching dashboard:', error));
  }, []
  );
  if (loading) {
    return <div>Loading dashboard...</div>;
  }
  const chartData = {
    labels: dashboard.labels,
    datasets: [
      {
        label: "Remaining Stock",
        data: dashboard.data,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1
      }
    ]
  };
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Remaining Stock Per Product" }
    }
  };
  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Dashboard</h1>
      <div style={{ width: "80%", margin: "0 auto" }}>
        <Bar data={chartData} options={chartOptions} />
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;