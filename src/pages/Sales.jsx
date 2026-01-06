import { useState, useEffect, useRef } from "react";
import DataTable from "react-data-table-component";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Receipt from "../components/Receipt";
import Topnav from "../components/Topnav";

function Sales() {
  const [sales, setSales] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedSale, setSelectedSale] = useState(null);
  const [saleItems, setSaleItems] = useState([]);
  const [saleNumber, setSaleNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const receiptRef = useRef();
  const [formData, setFormData] = useState({
    product_id: "",
    quantity: ""
    // created_at: ""
  });


  const handlePrint = () => {
    const printContents = receiptRef.current.innerHTML;
    const printWindow = window.open("", "", "width=800,height=600");

    printWindow.document.write(`
    <html>
      <head>
        <title>Sale Receipt</title>
        <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        />
      </head>
      <body>
        <div class="container mt-4">
          ${printContents}
        </div>
      </body>
    </html>
  `);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };



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
    <>
      <Topnav />
      <Navbar />
      <div className="container text-center main-content">
        <h2 className="text-center mt-5">Sales</h2>
        {/* Button trigger modal  */}
        <button type="button" class="btn btn-primary my-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
              <div class="modal-body" ref={receiptRef}>
                {selectedSale && selectedSale.items?.length > 0 ? (
                  <>
                    <h5 className="text-center mb-3">
                      Receipt #{selectedSale.sale_id}
                    </h5>
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
                    <p className="text-end mt-3">
                      <strong>Date:</strong> {new Date().toLocaleDateString()}
                    </p>
                  </>
                ) :
                  <p>No items in this sale</p>
                }
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" onClick={handlePrint}>Print Receipt</button>
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
                {/* receipt start */}
                <div className="container my-4">
                  <div className="card shadow p-4">
                    <h2 className="text-center mb-4">CAR SALE RECEIPT</h2>

                    {/* Receipt Info */}
                    <div className="d-flex justify-content-between mb-3">
                      <div>
                        <strong>Receipt No:</strong>
                      </div>
                      <div>
                        <strong>Date:</strong>
                      </div>
                    </div>

                    <hr />

                    {/* Seller & Buyer */}
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <h5>Seller Information</h5>
                        <p><strong>Name:</strong></p>
                        <p><strong>Phone:</strong> </p>
                        <p><strong>Address:</strong> </p>
                      </div>

                      <div className="col-md-6">
                        <h5>Buyer Information</h5>
                        <p><strong>Name:</strong> </p>
                        <p><strong>Phone:</strong> </p>
                        <p><strong>ID No:</strong> </p>
                      </div>
                    </div>

                    <hr />

                    {/* Vehicle Details */}
                    <h5>Vehicle Details</h5>
                    <table className="table table-bordered mb-3">
                      <tbody>
                        <tr>
                          <td><strong>Make</strong></td>
                          <td></td>
                          <td><strong>Model</strong></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td><strong>Year</strong></td>
                          <td></td>
                          <td><strong>Color</strong></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td><strong>Engine No</strong></td>
                          <td></td>
                          <td><strong>Chassis / VIN</strong></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td><strong>Registration No</strong></td>
                          <td></td>
                          <td><strong>Fuel Type</strong></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td><strong>Mileage</strong></td>
                          <td colSpan="3"></td>
                        </tr>
                      </tbody>
                    </table>

                    <hr />

                    {/* Sale Details */}
                    <h5>Sale Details</h5>
                    <table className="table table-bordered mb-3">
                      <tbody>
                        <tr>
                          <td><strong>Sale Price</strong></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td><strong>Payment Method</strong></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td><strong>Transaction Reference</strong></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>

                    <hr />

                    {/* Declaration */}
                    <p>
                      <strong>Declaration:</strong><br />
                      I, the seller, confirm that I am the lawful owner of the vehicle described
                      above and that it is sold as-is with no outstanding loans or encumbrances.
                    </p>

                    <hr />

                    {/* Signatures */}
                    <div className="row mt-4">
                      <div className="col-md-6 text-center">
                        <p>__________________________</p>
                        <p><strong>Seller Signature</strong></p>
                      </div>
                      <div className="col-md-6 text-center">
                        <p>__________________________</p>
                        <p><strong>Buyer Signature</strong></p>
                      </div>
                    </div>

                    <p className="text-center mt-4">
                      <em>Thank you for your business</em>
                    </p>
                  </div>
                </div>
                {/* receipt end */}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Receipt />
      <Footer />
    </>
  )
};

export default Sales;