import React from 'react';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const MenuItemList = ({ items }) => {

  if (!items.length) {
    return <p>No items available</p>; // Add fallback message if no items
  }

  const dispatch=useDispatch();
  //dispatching an action
  const handleAddItem=(item)=>{
    dispatch(addItem(item))
  }

  return (
    <div className="menuItems">
      {items.map((itemCard) => {
        const item = itemCard.card.info;
        return (
          <div key={item.id} className="menuItem">
            <div className="menuItemDetails">
              <h2>{item.name}</h2>
              <p>₹{item.price / 100 || item.defaultPrice / 100}</p>{" "}
              {/* Price is usually in paise, so dividing by 100 */}
              <p>{item.description}</p>
              <p>
                <span className="starRating">⭐</span>{" "}
                {item.ratings?.aggregatedRating?.rating} (
                {item.ratings?.aggregatedRating?.ratingCount} reviews)
              </p>
            </div>
            <div className="menuItemImage">
              <img
                src={
                  item.imageId
                    ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.imageId}`
                    : "default_image.jpg"
                }
                alt={item.name}
              />
              <button onClick={()=>handleAddItem(item)}>Add</button>
            </div>  
          </div>
        );
      })}
    </div>
  );
};

export default MenuItemList;
