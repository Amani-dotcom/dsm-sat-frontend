import React, { useEffect, useState } from 'react';

const RankedConsumers = () => {
  const [data, setData] = useState({ top_energy: [], top_co2: [] });

  useEffect(() => {
    fetch('https://dsm-sat-api.onrender.com/api/consumers')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Top Consumers</h2>
      <h3>By Energy (kWh)</h3>
      <ul>
        {data.top_energy.map((d, i) => (
          <li key={i}>House {d.household_id}: {d.energy_consumption_kwh} kWh</li>
        ))}
      </ul>
      <h3>By CO₂ (kg)</h3>
      <ul>
        {data.top_co2.map((d, i) => (
          <li key={i}>House {d.household_id}: {d.co2_emissions_kg} kg</li>
        ))}
      </ul>
    </div>
  );
};

export default RankedConsumers;