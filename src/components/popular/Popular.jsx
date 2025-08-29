import React,{useEffect,useState} from 'react'
import './Popular.css'
import Item from '../item/Item'
import data_product from '../Assets/data'

const Popular = () => {
  const backendUrl = 'https://ecommerce-backend-production1.up.railway.app';


  const [popularItems, setPopularItems] = useState([]);

  useEffect(() => {
    const fetchPopularItems = async () => {
      const response = await fetch(`${backendUrl}/popularwomen`);
      const data = await response.json();
      setPopularItems(data);
    };
    fetchPopularItems();
  }, []);

  
    return (
  <div className='popular'>
    <h1>POPULAR IN WOMEN</h1>
    <hr />
    <div className="popular-item-wrapper">
      <div className="popular-item">
        {[...popularItems, ...popularItems].map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>

  </div>
);

  }

export default Popular
