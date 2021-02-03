import React from 'react';
import ItemsArray from '../types/ItemsArray.type';

type Props = {
  setItems: React.Dispatch<React.SetStateAction<ItemsArray>>;
};

const AddItem = ({ setItems }: Props) => {
  return <div>hello!</div>;
};

export default AddItem;
