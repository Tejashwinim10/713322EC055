import React, { useState } from 'react';
import './App.css'; 
const App = () => {
  const [analyticsData, setAnalyticsData] = useState([
    { id: 1, platform: 'Facebook', likes: 120, comments: 40, shares: 15 },
    { id: 2, platform: 'Twitter', likes: 85, comments: 30, shares: 20 },
    { id: 3, platform: 'Instagram', likes: 200, comments: 70, shares: 50 },
  ]);

  const calculateTotal = (field) => {
    return analyticsData.reduce((total, item) => total + item[field], 0);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Social Media Analytics</h1>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th>Platform</th>
            <th>Likes</th>
            <th>Comments</th>
            <th>Shares</th>
          </tr>
        </thead>
        <tbody>
          {analyticsData.map((item) => (
            <tr key={item.id}>
              <td>{item.platform}</td>
              <td>{item.likes}</td>
              <td>{item.comments}</td>
              <td>{item.shares}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '5px' }}>
        <h2>Overall Engagement Metrics</h2>
        <p><strong>Total Likes:</strong> {calculateTotal('likes')}</p>
        <p><strong>Total Comments:</strong> {calculateTotal('comments')}</p>
        <p><strong>Total Shares:</strong> {calculateTotal('shares')}</p>
      </div>
    </div>
  );
};

export default App;