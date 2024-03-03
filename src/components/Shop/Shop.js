import ShopItem from './ShopItem';
import Slideshow from './Slideshow';
import Lemonade from '../../assets/img/drinks/lemonade.jpg';
import Strawberry from '../../assets/img/drinks/strawberry.jpg';
import Mojito from '../../assets/img/drinks//mojito.jpg';
import Orange from '../../assets/img/drinks/orange.jpg';
import { CartContext } from '../../App';
import { useContext } from 'react';

const Shop = () => {
  const cart = useContext(CartContext);

  const items = [
    {
      id: 1,
      title: 'Klassisk Lemonade',
      description: 'Frisk og forfriskende!',
      price: 35,
      image: Lemonade,
    },
    {
      id: 2,
      title: 'Jordbær-nade',
      description: 'Den lidt søde',
      price: 40,
      image: Strawberry,
    },
    {
      id: 3,
      title: 'Mojito',
      description: 'En af klassikerne',
      price: 50,
      image: Mojito,
    },
    {
      id: 4,
      title: 'Mixonade',
      description: 'Forførende lækker!',
      price: 45,
      image: Orange,
    },
  ];

  return (
    <div>
      <Slideshow />
      <div className="container">
        <h1 className="mt-5 Cronus-font">Shoppen</h1>
        <div className="row my-5">
          {items.map((item) => (
            <div key={item.id} className="col-6 col-lg-3 mb-5">
              <ShopItem
                item={item}
                updateCart={cart.setCartItems}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
