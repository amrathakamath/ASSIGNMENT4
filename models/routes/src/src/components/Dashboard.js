import React, { useEffect, useState } from 'react';
import { Table, Spinner } from 'react-bootstrap';
import axios from 'axios';

function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/data')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner animation="border" />;
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {/* Add more columns as needed */}
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            <td>{item.name}</td>
            <td>{item.value}</td>
            {/* Add more columns as needed */}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Dashboard;
