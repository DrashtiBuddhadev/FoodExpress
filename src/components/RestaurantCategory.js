import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import MenuItemList from './MenuItemList';

const RestaurantCategory = ({ categories, openCategory, handleClick }) => {
  return (
    <div className="restaurant-category">
      {categories.map((category) => (
        <div key={category?.card?.card?.title}>
          {/* Header */}
          <div
            className='restaurant-category-header'
            onClick={() => handleClick(category?.card?.card?.title)}
          >
            <span>
              {category?.card?.card?.title} ({category?.card?.card?.itemCards.length})
            </span>
            <span className={`icon ${openCategory === category?.card?.card?.title ? 'rotate' : ''}`}>
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </div>

          {/* Accordion body */}
          <div className='restaurant-category-body'>
            {openCategory === category?.card?.card?.title && (
              <MenuItemList items={category?.card?.card?.itemCards || []} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantCategory;
