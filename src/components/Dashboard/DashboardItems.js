import React from 'react';
import './Dashboard.css';
import { Card } from 'react-bootstrap';


const DashboardItems = ({dashboardItem}) => {
  return (
    <Card className="card-custom dashCard">
      <Card.Body className='dashCardBody'>
        <Card.Title className="Cronus-font">
          {dashboardItem.title}
        </Card.Title>
        <Card.Text>
          {dashboardItem.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DashboardItems;
