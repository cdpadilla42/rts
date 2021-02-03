import React, { useState } from 'react';
import AddItem from './AddItem';
import Item from './Item';
import ItemsArray from '../types/ItemsArray.type';

type Props = {
  /** optional name */
  name?: string;
};

const sampleItems = [
  {
    name: 'carrots',
    checked: false,
  },
  {
    name: 'Ice Cream',
    checked: false,
  },
  {
    name: 'Bananas',
    checked: false,
  },
];

const ShoppingList = (props: Props) => {
  const [items, setItems] = useState(sampleItems as ItemsArray);

  const renderItems = () => {
    return items.map((item) => <Item item={item} />);
  };

  return (
    <>
      <AddItem setItems={setItems} />
      {renderItems()}
    </>
  );
};

export default ShoppingList;
