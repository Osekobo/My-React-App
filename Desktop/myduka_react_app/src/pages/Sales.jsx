import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Sales() {
  const [sales, setSales] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedSale, setSelectedSale] = useState(null);
  const [saleItems, setSaleItems] = useState([]);
  const [saleNumber, setSaleNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    product_id: "",
    quantity: ""
    // created_at: ""
  });

  const handleChange = (e) => {
    setFormData({// (object distructuring)
      ...formData,// picking current object
      [e.target.name]: e.target.value // update that object
    });
  };

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/products", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);


  const fetchSales = () => {
    fetch("http://127.0.0.1:5000/api/sales", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setSales(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching sales:", err));
  };

  useEffect(() => {
    fetchSales();
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();

    const product = products.find(p => Number(p.id) === Number(formData.product_id));
    if (!product) {
      alert("Please select a valid product");
      return;
    }

    const newItem = {
      saleNo: saleNumber,
      product_id: Number(formData.product_id),
      product_name: product.name,
      quantity: Number(formData.quantity)
    };

    setSaleItems(prev => [...prev, newItem]);
    setSaleNumber(prev => prev + 1);
    setFormData({ product_id: "", quantity: "" });
  };


  const confirmSale = async () => {
    if (saleItems.length === 0) return;
    try {
      const res = await fetch("http://127.0.0.1:5000/api/sales", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({ sales: saleItems })
      });

      if (!res.ok) {
        const errData = await res.json();
        console.error("Server error:", errData);
        alert("Failed to save sale: " + JSON.stringify(errData, null, 2));
        return;
      }

      const newSale = await res.json();
      console.log("Sale saved:", newSale);
      // setSale(prev => [...prev, newSale]);
      fetchSales();
      setSaleItems([]);
      setSaleNumber(1);

    } catch (err) {
      console.error("Sale failed", err);
    }
  };


  const columns = [
    {
      name: "Sale Id",
      selector: row => row.sale_id,
      sortable: true
    },

    {
      name: "Sold On",
      selector: row => row.created_at,
      sortable: true
    },
    {
      name: "View Items",
      selector: row => (
        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#saleModal" onClick={() => setSelectedSale(row)}>
          View Items
        </button>
      )
    },
    {
      name: "Pay",
      selector: row => (
        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#paymentModal">
          Proceed to Payment
        </button>
      )
    },
  ];

  if (loading) { return <div>Loading sales...</div>; }

  return (
    <div>
      <Navbar />
      <h2 className="text-center">Sales</h2>
      <div className="container my-5 text-center main-content">
        {/* Button trigger modal  */}
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Make Sale
        </button>

        {/* Modal  */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Sale Info</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form onSubmit={handleSubmit}>


                  <div className="input-group mb-3 text-start">
                    <label className="input-group-text">Product</label>
                    <select className="form-select" name="product_id" value={formData.product_id} onChange={handleChange} required>

                      <option value="">Select Product</option>
                      {products.length > 0 && products.map(prod => (
                        <option key={prod.id} value={prod.id}>
                          {prod.name}
                        </option>
                      ))}
                    </select>
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
                  <button type="submit" className="btn btn-primary w-100" disabled={!formData.product_id || !formData.quantity}>
                    Save Sale
                  </button>
                </form>
                <table class="table table-hover mt-5">
                  <thead>
                    <tr>
                      <th>Sale #</th>
                      <th>Product</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {saleItems.length === 0 ? (
                      <tr>
                        <td colSpan="3" className="text-center text-muted">
                          No items added
                        </td>
                      </tr>
                    ) :
                      saleItems.map((item, index) => (
                        <tr key={index}>
                          <td>{item.saleNo}</td>
                          <td>{item.product_name}</td>
                          <td>{item.quantity}</td>
                        </tr>
                      )
                      )}
                  </tbody>

                </table>
                <div class="text-center mt-3" >
                  <button class="btn btn-outline-success" onClick={confirmSale} disabled={saleItems.length === 0}>Confirm  Sale</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sales Table */}
        <DataTable
          columns={columns}
          data={sales.filter(row => row !== undefined && row !== null)}
          pagination
          highlightOnHover
          striped
          responsive
        />


        {/* Modal  */}
        <div class="modal fade" id="saleModal" tabIndex="-1" aria-labelledby="saleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Receipt For Sale  {selectedSale?.sale_id}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                {selectedSale && selectedSale.items?.length > 0 ? (
                  <>
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>Product Id</th>
                          <th>Car Name</th>
                          <th>Quantity</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedSale.items.map((item, idx) => (
                          <tr key={idx}>
                            <td>{item.product_id}</td>
                            <td>{item.product_name}</td>
                            <td>{item.quantity}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                ) :
                  <p>No items in this sale</p>
                }
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">Print Receipt</button>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Modal */}
        <div class="modal fade" id="paymentModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Payment Details</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
};

export default Sales;