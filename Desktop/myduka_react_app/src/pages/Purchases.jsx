import { useState, useEffect } from "react"
import DataTable from "react-data-table-component"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Purchases() {
  const [purchases, setPurchases] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    product_id: "",
    quantity: "",
    // created_at: "",
    // updated_at: ""
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/products", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("Products", data);
        setProducts(data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://127.0.0.1:5000/api/purchases", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({
          product_id: formData.product_id,
          quantity: formData.quantity
        }),
      });
      const newPurchase = await res.json();

      console.log("Server Response", newPurchase);

      setPurchases([...purchases, newPurchase]);
      setFormData({
        product_id: "",
        quantity: ""
        // created_at: "",
        // updated_at: ""
      });

    }
    catch (error) {
      console.error("Error", error);
    }
  };

  const columns = [
    {
      name: "ID",
      selector: row => row.product_id,
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
    },
    {
      name: "Updated On",
      selector: row => row.updated_at,
      sortable: true
    }
  ];

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/purchases", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPurchases(data)
        setLoading(false);
      })
      .catch(error => console.error('Error fetching purchases:', error));
  }, []);
  if (loading) {
    return <div>Loading purchases...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mt-5 text-center">
        <h2>Purchases</h2>
        {/* Button trigger modal  */}
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Maka Purchase
        </button>

        {/* Modal  */}
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Purchase Info</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>

                  <div className="input-group mb-3 text-start">
                    <label className="input-group-text">Product</label>

                    <select className="form-select" name="product_id" value={formData.product_id} onChange={handleChange} required>

                      <option value="">Select Product</option>
                      {products.map(prod => (
                        <option key={prod.id} value={prod.id}>
                          {prod.name}
                        </option>
                      ))}
                    </select>
                  </div>


                  <div className="mb-3 text-start">
                    <label>Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      className="form-control"
                      value={formData.quantity}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {/* <div className="mb-3 text-start">
                    <label>Created At</label>
                    <input
                      type="date"
                      name="created_at"
                      className="form-control"
                      value={formData.created_at}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3 text-start">
                    <label>Updated On</label>
                    <input
                      type="date"
                      name="updated_at"
                      className="form-control"
                      value={formData.updated_at}
                      onChange={handleChange}
                      required
                    />
                  </div> */}

                  <button type="submit" className="btn btn-success w-100">
                    Save Purchase
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <DataTable
          columns={columns}
          data={purchases}
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

export default Purchases;