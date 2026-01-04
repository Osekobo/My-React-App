import { useState, useEffect } from "react"
import DataTable from "react-data-table-component"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Topnav from "../components/Topnav";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editProduct, setEditProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  // store values
  const [formData, setFormData] = useState({
    name: "",
    buying_price: "",
    selling_price: "",
    model: "",
    year: "",
    condition: "",
    fuel: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://127.0.0.1:5000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": "Bearer " + localStorage.getItem("token") },
        body: JSON.stringify(formData)
      });
      const newProduct = await res.json();
      setProducts([...products, newProduct]);// add product to product list
      setFormData({
        name: "", buying_price: "", selling_price: "", model: "", year: "", condition: "", fuel: "",
      });
    } catch (error) {
      console.error("Error", error);
    }
  }

  const columns = [
    {
      name: "ID",
      selector: row => row.id, // get value from product object
      sortable: true
    },
    {
      name: "Name",
      selector: row => row.name,
      sortable: true
    },
    {
      name: "Buying Price",
      selector: row => row.buying_price,
      sortable: true
    },
    {
      name: "Selling Price",
      selector: row => row.selling_price,
      sortable: true
    },
    {
      name: "Model",
      selector: row => row.model,
      sortable: true
    },
    {
      name: "Year",
      selector: row => row.year,
      sortable: true
    },
    {
      name: "Condition",
      selector: row => row.condition,
      sortable: true
    },
    {
      name: "Fuel",
      selector: row => row.fuel,
      sortable: true
    },
    {
      name: "Edit Product",
      selector: row => (
        <button
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#productModal"
          onClick={() => {
            setSelectedProduct(row);
            setEditProduct({
              name: row.name,
              buying_price: row.buying_price,
              selling_price: row.selling_price,

              model: row.model,
              year: row.year,
              condition: row.condition,
              fuel: row.fuel
            });
          }}
        >
          Edit Product
        </button>

      ),
      sortable: true
    },
  ];

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/products", {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
      .then(response => response.json())
      .then(data => {
        setProducts(data);// store products
        setLoading(false);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  if (loading) {
    return <div>Loading products...</div>;
  }

  const handleUpdateProduct = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:5000/api/products/${selectedProduct.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify(editProduct)
      });
      if (!res.ok) throw new Error("Failed to update product");

      const updatedProduct = await res.json();
      setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
      setSelectedProduct(updatedProduct);
      setEditProduct(updatedProduct);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };


  return (
    <>
      <Topnav />
      <Navbar />
      <div className="container text-center main-content">
        <h2 className="text-center mt-5">Products</h2>
        {/* Button trigger modal  */}
        <button type="button" className="btn btn-primary my-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Add Product
        </button>

        {/* Modal  */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Product Info</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3 text-start">
                    <label>Product Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3 text-start">
                    <label>Buying Price</label>
                    <input
                      type="number"
                      name="buying_price"
                      className="form-control"
                      value={formData.buying_price}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3 text-start">
                    <label>Selling Price</label>
                    <input
                      type="number"
                      name="selling_price"
                      className="form-control"
                      value={formData.selling_price}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3 text-start">
                    <label>Model</label>
                    <input
                      type="text"
                      name="model"
                      className="form-control"
                      value={formData.model}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3 text-start">
                    <label>Year</label>
                    <input
                      type="number"
                      name="year"
                      className="form-control"
                      value={formData.year}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3 text-start">
                    <label>Condition</label>
                    <input
                      type="text"
                      name="condition"
                      className="form-control"
                      value={formData.condition}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3 text-start">
                    <label>Fuel</label>
                    <input
                      type="text"
                      name="fuel"
                      className="form-control"
                      value={formData.fuel}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-success w-100">
                    Save Product
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>

        <input
          type="text"
          placeholder="Search products..."
          className="form-control my-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />


        <DataTable
          columns={columns}
          data={filteredProducts}
          pagination
          highlightOnHover
          striped
          responsive
        />

        {/* Modal  */}
        <div class="modal fade" id="productModal" tabIndex="-1" aria-labelledby="saleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Product Info</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                {selectedProduct ? (
                  <>
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Buying Price</th>
                          <th>Selling Price</th>

                          <th>Model</th>
                          <th>Year</th>
                          <th>Condition</th>
                          <th>Fuel</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{selectedProduct.name}</td>
                          <td>{selectedProduct.buying_price}</td>
                          <td>{selectedProduct.selling_price}</td>

                          <td>{selectedProduct.model}</td>
                          <td>{selectedProduct.year}</td>
                          <td>{selectedProduct.condition}</td>
                          <td>{selectedProduct.fuel}</td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              value={editProduct.name}
                              onChange={(e) =>
                                setEditProduct({ ...editProduct, name: e.target.value })
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="form-control"
                              value={editProduct.buying_price}
                              onChange={(e) =>
                                setEditProduct({ ...editProduct, buying_price: e.target.value })
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="form-control"
                              value={editProduct.selling_price}
                              onChange={(e) =>
                                setEditProduct({ ...editProduct, selling_price: e.target.value })
                              }
                            />
                          </td>

                          <td>
                            <input
                              type="text"
                              className="form-control"
                              value={editProduct.model}
                              onChange={(e) =>
                                setEditProduct({ ...editProduct, model: e.target.value })
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="form-control"
                              value={editProduct.year}
                              onChange={(e) =>
                                setEditProduct({ ...editProduct, year: e.target.value })
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              value={editProduct.condition}
                              onChange={(e) =>
                                setEditProduct({ ...editProduct, condition: e.target.value })
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              value={editProduct.fuel}
                              onChange={(e) =>
                                setEditProduct({ ...editProduct, fuel: e.target.value })
                              }
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </>
                ) : (
                  <p>No info on this product</p>
                )}
              </div>
              <div class="modal-footer">
                <button class="btn btn-primary" onClick={handleUpdateProduct} >Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;