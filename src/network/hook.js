export const putPlayerChoice = (board, currPlayer) => {
  const cell = input(board, currPlayer);
  board[cell] = currPlayer;
};