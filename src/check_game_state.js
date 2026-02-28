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
const EMPTY = " ";

export const isDraw = (board) => board.every((cell) => cell !== EMPTY);

export const hasWon = (board = [], currPlayer) =>
  COMBOS
    .some(
      (combo) => combo.every((cell) => board[cell] === currPlayer),
    );
