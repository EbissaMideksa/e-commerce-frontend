import React, { useEffect } from 'react'
import './NewCollection.css'
import Item from '../item/Item'
//import new_collections from '../Assets/new_collections'

const NewCollection = () => {
  const [new_collections, setNewCollections] = React.useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/newcollection')
      .then(response => response.json())
      .then(data => {
          setNewCollections(data);
        
      });
  }, []);
  return (
    <div>
      <div className="new-collections">
        <h1>New Collections</h1>
        <hr/>
        <div className="collections">
          {new_collections.map((item,i)=>{
            return( <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} /> )
          })}
        </div>
        </div>
    </div>
  )
}

export default NewCollection
