import { drawBoard } from "./ui/draw_board.js";
import { input } from "./input_handler/input_handler.js";
import { hasWon, isDraw } from "./input_handler/check_game_state.js";

const putPlayerChoice = (board, currPlayer) => {
  const cell = input(board, currPlayer);
  board[cell] = currPlayer;
};

export const game = () => {
  const [CELL, X, O] = [" ", "X", "O"];
  const board = Array.from({ length: 9 }, () => CELL);
  let turn = confirm("wanna play first ?");

  drawBoard(board);

  while (!isDraw(board)) {
    const currPlayer = turn ? O : X;
    putPlayerChoice(board, currPlayer);
    drawBoard(board);

    if (hasWon(board, currPlayer)) {
      console.log(`${currPlayer} has won!`);
      return true;
    }

    turn = !turn;
  }

  console.log("Game Ended In A Tie");
  return true;
};
//log --> marks creation of offline version