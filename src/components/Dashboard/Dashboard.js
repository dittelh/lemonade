import React from 'react';
import './Dashboard.css';
import DashboardItems from './DashboardItems';

const Dashboard = () => {
  let totalOrders = 0;
  if (localStorage.getItem('orders') !== null) {
    totalOrders = JSON.parse(localStorage.getItem('orders')).length;
  }

  const dashboardItems = [
    {
      id: 1,
      title: 'Antal ordre:',
      description: totalOrders,
    },
    {
      id: 2,
      title: 'Profit',
      description:
        'Her skal der stå hvor meget profit, der er lavet med denne million forretning.',
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
