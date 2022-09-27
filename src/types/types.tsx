export type Player = {
  id: string;
  name: string;
  age: number;
  position: string;
};

export type FormProps = {
  addPlayer: (newPlayer: Player) => void;
};

export type PlayerProps = {
  deletePlayer: (playerId: string) => void;
  updatePlayer: (playerId, newData: Player) => void;
};
