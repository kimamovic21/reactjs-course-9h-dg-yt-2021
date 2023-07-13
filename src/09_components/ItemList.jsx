import React from 'react';
import LineItem from './LineItem';

const ItemList = ({ items, setItems, handleCheck, handleDelete}) => {
    return (
        <ul>
          {items.map((item) => {
            return (
                <LineItem 
                    key={item.id}
                    item={item}
                    setItems={setItems}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            )
          })}
      </ul>
    );
};

export default ItemList;
