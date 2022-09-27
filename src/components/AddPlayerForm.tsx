import React, { useState } from 'react';
import { FormProps } from '../types/types';
import { Player } from '../types/types';

export const AddPlayerForm: React.FC<FormProps> = ({ addPlayer }) => {
  const initialValue: Player = {
    id: '',
    name: '',
    age: 0,
    position: ''
  };

  const [player, setPlayer] = useState(initialValue);

  const handleChange = e => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addPlayer(player);
    setPlayer(initialValue);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter player name"
          onChange={handleChange}
          value={player.name}
        />
        <input
          type="number"
          name="age"
          placeholder="Enter player age"
          onChange={handleChange}
          value={player.age}
        />
        <input
          type="position"
          name="position"
          placeholder="Enter player position"
          onChange={handleChange}
          value={player.position}
        />
        <button>ADD</button>
      </form>
    </>
  );
};
