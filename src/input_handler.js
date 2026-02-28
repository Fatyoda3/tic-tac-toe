import { humanMove } from "./human_move.js";

export const input = (board, currPlayer) => {
  if (currPlayer === "X") {
    console.log("X turn");
    return humanMove(board);
  }

  console.log("O turn");
  return humanMove(board);
};
