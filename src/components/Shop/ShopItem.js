import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Shop.css';

const ShopItem = ({ item, updateCart }) => {
  const handleAddToCart = () => {
    updateCart(item);
  };

  const isInCart = updateCart === undefined;

  return (
    <Card className="card-custom button">
      <Card.Img className="drinksImg" variant="top" src={item.image} />
      <Card.Body className="button">
        <Card.Title className="Cronus-font">{item.title}</Card.Title>
        <div className='priceAndDesc'>
          <Card.Text className='description'>{item.description}</Card.Text>
          <Card.Text className="price-custom">{item.price} kr.</Card.Text>
        </div>
        {!isInCart && (
          <Button variant="primary" onClick={handleAddToCart}>
            Læg i kurv
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ShopItem;
