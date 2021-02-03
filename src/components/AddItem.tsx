import React, { useState } from 'react';
import ItemInterface from '../types/Item.interface';
import ItemsArray from '../types/ItemsArray.type';

type Props = {
  setItems: React.Dispatch<React.SetStateAction<ItemsArray>>;
};

const AddItem = ({ setItems }: Props) => {
  const [name, setName] = useState('King Cake');

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setName(e.currentTarget.value);
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    const newItem: ItemInterface = { name, checked: false };
    setItems((prevState) => [...prevState, newItem]);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={handleChange}
      />
    </form>
  );
};

export default AddItem;
