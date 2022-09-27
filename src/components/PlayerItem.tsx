import React, { useState } from 'react';
import { EditPlayerForm } from './EditPlayerForm';

export const PlayerItem = ({
  id,
  name,
  age,
  position,
  deletePlayer,
  updatePlayer
}) => {
  const [isEdit, setToggleEditing] = useState(false);

  if (isEdit) {
    return (
      <EditPlayerForm
        id={id}
        name={name}
        age={age}
        position={position}
        updatePlayer={updatePlayer}
        toggleEditForm={setToggleEditing}
      />
    );
  }

  return (
    <>
      <h2>{name}</h2>
      <h3>Age: {age}</h3>
      <h3>Position: {position}</h3>
      <button onClick={() => setToggleEditing(!isEdit)}>Edit</button>
      <button onClick={() => deletePlayer(id)}>Delete</button>
    </>
  );
};
