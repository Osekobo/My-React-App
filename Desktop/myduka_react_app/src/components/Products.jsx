// function Product() {

//   return (
//     <>
//       <div className="container">
//         <h1>Products Page</h1>
//       </div>
//     </>
//   );
// }

// export default Product;

import { useState, useEffect } from "react"

function Products() {
  const [products, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/products")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPosts(data)
        setLoading(false);
      })
      .catch(error => console.error('Error fetching posts:', error));
  }, []);
  if (loading) {
    return <div>Loading posts...</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Products</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Buying Price</th>
            <th>Selling Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr>
              <th scope="row">{prod.id}</th>
              <th>{prod.name}</th>
              <th>{prod.buying_price}</th>
              <th>{prod.selling_price}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default Products;