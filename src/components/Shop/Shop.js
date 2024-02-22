import ShopItem from './ShopItem';
import Slideshow from './Slideshow';
import Lemonade from '../../assets/img/drinks/lemonade.jpg';
import Strawberry from '../../assets/img/drinks/strawberry.jpg';
import Mojito from '../../assets/img/drinks//mojito.jpg';
import Orange from '../../assets/img/drinks/orange.jpg';

const Shop = ({updateCart}) => {

  const items = [
    {
      id: 1,
      title: 'Klassisk Lemonade',
      description: 'Frisk og forfriskende!',
      price: 55,
      image: Lemonade,
    },
    {
      id: 2,
      title: 'Jordbær-nade',
      description: 'Den lidt søde',
      price: 15,
      image: Strawberry,
    },
    {
      id: 3,
      title: 'Mojito',
      description: 'En af klassikerne',
      price: 55,
      image: Mojito,
    },
    {
      id: 4,
      title: 'Mixonade',
      description: 'Forførende lækker!',
      price: 15,
      image: Orange,
    }
  ];

  return (
    <div>
      <Slideshow />
      <div className="container">
        <h1 className="mt-5 Cronus-font">Shoppen</h1>
        <div className="row my-5">
          {items.map((item) => (
            <div className="col-6 col-lg-3 mb-5">
              <ShopItem key={item.id} item={item} updateCart={updateCart} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
