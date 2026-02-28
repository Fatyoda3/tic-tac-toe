import { humanMove } from "./human_move.js";
import { bestMove } from "./best_move.js";

export const input = (board, currPlayer) => {
  if (currPlayer === "X") {
    console.log("X turn --> 🤖 ");
    return bestMove(board);
  }

  console.log("O turn --> 👦🏻 ");
  return humanMove(board);
};
