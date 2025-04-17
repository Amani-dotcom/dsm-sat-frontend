import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div style={{ padding: 20 }}>
    <h1>DSM+SAT Dashboard</h1>
    <ul>
      <li><Link to="/ranked">Ranked Consumers</Link></li>
    </ul>
  </div>
);

export default Home;