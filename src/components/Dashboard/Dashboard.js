import React from 'react';
import './Dashboard.css';
import DashboardItems from './DashboardItems';

const Dashboard = () => {
  let orders = [];
  if (localStorage.getItem('orders') !== null) {
    orders = JSON.parse(localStorage.getItem('orders'));
  }

  const totalPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < orders.length; i++) {
      const order = orders[i];
      for (let j = 0; j < order.length; j++) {
        const orderItem = order[j];
        totalPrice += orderItem.price;
      }
    } 
    return totalPrice;
  };

  const dashboardItems = [
    {
      id: 1,
      title: 'Antal ordre:',
      description: orders.length,
    },
    {
      id: 2,
      title: 'Omsætning:',
      description:
        totalPrice() + ' kr.',
    },
  ];

  return (
    <div className="container customMargin">
      <h1 className="mt-5 Cronus-font">Dashboard</h1>
      <div className="row">
        {dashboardItems.map((dashboardItem) => (
          <div key={dashboardItem.id} className="col-6 col-lg-3 mb-5 dashItem">
            <DashboardItems dashboardItem={dashboardItem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
