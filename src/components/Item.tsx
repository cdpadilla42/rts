import React from 'react';
import ItemInterface from '../types/Item.interface';

type Props = {
  item: ItemInterface;
};

const Item = ({ item }: Props) => {
  return <div>{item.name}</div>;
};

export default Item;
