import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Shop.css';

const ShopItem = ({ item, updateCart }) => {
  const handleAddToCart = () => {
    updateCart();
  };

  return (
    <Card className="card-custom">
      <Card.Img className="drinksImg" variant="top" src={item.image} />
      <Card.Body>
        <Card.Title className="Cronus-font">{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text className='price-custom'>{item.price} kr.</Card.Text>
        <div className='mb-4'>
          
        </div>
          <Button variant="primary" onClick={handleAddToCart}>
            Læg i kurv
          </Button>
      </Card.Body>
    </Card>
  );
};

export default ShopItem;
