import React from 'react';
import ItemList from './ItemList';

const Content = ({ items, setItems, handleCheck, handleDelete }) => {

    return (
        <>
            {items.length ? (
                <ItemList
                    items={items}
                    setItems={setItems}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
              ) : (
                <p>Your list is empty</p>
              )}
        </>
    );
};

export default Content;
