import { drawBoard } from "./draw_board.js";
import { input } from "./input_handler.js";
import { hasWon, isDraw } from "./check_game_state.js";

const putPlayerChoice = (board, currPlayer) => {
  const cell = input(board, currPlayer);
  board[cell] = currPlayer;
};

export const game = () => {
  const [X, O] = ["X", "O"];
  const board = Array.from({ length: 9 }, () => " ");
  let isXTurn = true;

  drawBoard(board);

  while (!isDraw(board)) {
    const currPlayer = isXTurn ? X : O;
    putPlayerChoice(board, currPlayer);
    drawBoard(board);

    if (hasWon(board, currPlayer)) {
      console.log(`${currPlayer} has won!`);
      return true;
    }

    isXTurn = !isXTurn;
  }

  console.log("Game Ended In A Tie");

  return true;
};
