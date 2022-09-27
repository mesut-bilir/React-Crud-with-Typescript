import React from 'react';
import { PlayerItem } from './PlayerItem';

export const Players = ({ players, deletePlayer, updatePlayer }) => {
  return (
    <div>
      {players.map(player => (
        <PlayerItem
          key={player.id}
          id={player.id}
          name={player.name}
          age={player.age}
          position={player.position}
          deletePlayer={deletePlayer}
          updatePlayer={updatePlayer}
        />
      ))}
    </div>
  );
};
