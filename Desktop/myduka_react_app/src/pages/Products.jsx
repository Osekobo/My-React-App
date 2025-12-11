import { useState, useEffect } from "react"
import DataTable from "react-data-table-component"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // store values
  const [formData, setFormData] = useState({
    name: "",
    buying_price: "",
    selling_price: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      fetch("http://127.0.0.1:5000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
        .then((res) => res.json())

        .then((newProduct) => {// product from bsckend
          console.log("Server Response", newProduct);
          setProducts([...products, newProduct]);// add product to product list
          setFormData({
            name: "",
            buying_price: "",
            selling_price: "",
          });
        })

    }
    catch (error) {
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

  return (
    <div>
      <Navbar />
      <h2 className="text-center mt-3">Products</h2>
      <div className="container my-5 text-center">
        {/* Button trigger modal  */}
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
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

                  <button type="submit" className="btn btn-success w-100">
                    Save Product
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>

        <DataTable
          columns={columns}
          data={products}
          pagination
          highlightOnHover
          striped
          responsive
        />
      </div>
      <Footer />
    </div>
  );
}

export default Products;