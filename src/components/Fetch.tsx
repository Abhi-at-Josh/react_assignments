import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
    
const FetchData= () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

      useEffect(() => {
    axios
      .get('https://reqres.in/api/users') // API endpoint
      .then(response => {
        setUsers(response.data.data); // Store user data
        setLoading(false); // Stop loading
      })
      .catch(error => {
        setError(error.message); // Handle any error
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">User List</h1>

      {loading && <div className="text-center"><div className="spinner-border text-primary" role="status"></div></div>}
      {error && <div className="alert alert-danger text-center">{error}</div>}

      <div className="row">
        {users.map(user => (
          <div key={user.id} className="col-md-4 mb-4">
            <div className="card shadow-lg border-0">
              <img src={user.avatar} className="card-img-top rounded-circle p-3 mx-auto d-block" alt={user.first_name} style={{ width: '100px' }} />
              <div className="card-body text-center">
                <h5 className="card-title">{user.first_name} {user.last_name}</h5>
                <p className="card-text text-muted">ID: {user.id}</p>
                <button className="btn btn-primary">View Profile</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default FetchData;