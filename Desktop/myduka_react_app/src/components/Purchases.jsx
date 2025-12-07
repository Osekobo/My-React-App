import { useState, useEffect } from "react"

function Purchases() {
  const [purchases, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/purchases")
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
      <h2>Purchases</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Buying Price</th>
            <th>Selling Price</th>
            <th>Selling Price</th>
          </tr>
        </thead>
        <tbody>
          {purchases.map((prod) => (
            <tr>
              <th scope="row">{prod.id}</th>
              <th>{prod.product_id}</th>
              <th>{prod.quantity}</th>
              <th>{prod.created_at}</th>
              <th>{prod.updated_at}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default Purchases;