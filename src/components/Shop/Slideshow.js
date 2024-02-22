import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Lemons from '../../assets/img/lemons1.jpg';
import LemonDrink from '../../assets/img/lemondrink.jpg';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="mt-5" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Image className="slideshowImg" fluid src={Lemons} />
      </Carousel.Item>
      <Carousel.Item>
        <Image className="slideshowImg" fluid src={LemonDrink} />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
