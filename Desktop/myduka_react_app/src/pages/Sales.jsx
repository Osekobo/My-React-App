import { useState, useEffect } from "react"
import DataTable from "react-data-table-component"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Sales() {
  const [sales, setSale] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    sale_id: "",
    quantity: "",
    created_at: ""
  });

  const handleChange = (e) => {
    setFormData({// (object distructuring)
      ...formData,// picking current object
      [e.target.name]: e.target.value // update that object
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://127.0.0.1:5000/api/sales", {
        method: "POST", // method and header are constants
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
      });
      const newSale = await res.json();
      console.log("Server Response", newSale);
      setSale([...sales, newSale.sales]);
      setFormData({
        sale_id: "",
        quantity: "",
        created_at: ""
      });


    }
    catch (error) {
      console.error("Error", error);
    }
  }

  const columns = [
    {
      name: "ID",
      selector: row => row.sale_id,
      sortable: true
    },
    {
      name: "Quantity",
      selector: row => row.quantity,
      sortable: true
    },
    {
      name: "Created At",
      selector: row => row.created_at,
      sortable: true
    }
  ];

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/sales", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setSale(data)
        setLoading(false);
      })
      .catch(error => console.error('Error fetching sales:', error));
  }, []);
  if (loading) {
    return <div>Loading sales...</div>;
  }

  return (
    <div>
      <Navbar />
      <h2 className="text-center">Sales</h2>
      <div className="container my-5 text-center">
        {/* Button trigger modal  */}
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Make Sale
        </button>

        {/* Modal  */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Sale Info</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="saleId" className="form-label">Sale ID</label>
                    <input
                      type="number"
                      name="sale_id"
                      className="form-control"
                      value={formData.sale_id}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3 text-start">
                    <label>Quantity</label>
                    <input
                      type="number"
                      name="quantity"
                      className="form-control"
                      value={formData.quantity}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="createdAt" className="form-label">Created At</label>
                    <input
                      type="date"
                      name="created_at"
                      className="form-control"
                      value={formData.created_at}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Save Sale
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <DataTable
          columns={columns}
          data={sales}
          pagination
          highlightOnHover
          striped
          responsive
        />
      </div>
      <Footer />
    </div>
  )
};

export default Sales;