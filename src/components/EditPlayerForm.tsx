import React from 'react';
import { useForm } from '../hooks/useForm';

export const EditPlayerForm = ({
  id,
  name,
  age,
  position,
  updatePlayer,
  toggleEditForm
}) => {
  const [player, handleChange] = useForm({ id, name, age, position });

  const handleSubmit = e => {
    e.preventDefault();
    updatePlayer(id, player);
    toggleEditForm(false);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Edit player name"
          name="name"
          value={player.name}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Edit player age"
          name="age"
          value={player.age}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Edit player position"
          name="position"
          value={player.position}
          onChange={handleChange}
        />
        <button>Save</button>
      </form>
    </>
  );
};
