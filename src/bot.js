const COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const board = [0, 1, 2];

const hasWon = (moves) => {
  return COMBOS.some((combo) => combo.every((block) => moves.includes(block)));
};

const evaluate=  (board)=>{





}