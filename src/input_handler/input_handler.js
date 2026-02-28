import { humanMove } from "../input_handler/human_move.js";
import { botMove } from "../input_handler/best_move.js";

export const input = (board, currPlayer) => {
  if (currPlayer === "X") {
    console.log("X turn --> 🤖 ");
    return botMove(board);
  }

  console.log("O turn --> 👦🏻 ");
  return humanMove(board);
};
