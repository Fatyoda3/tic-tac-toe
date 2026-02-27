import { drawBoard } from "./draw_board.js";
import { getPlacement } from "./get_placement.js";
import { hasWon } from "./has_won.js";

const isGameOver = (count) => count === 9;

export const game = () => {
  const CELL = " ";
  const BOARD = Array.from({ length: 9 }, () => CELL);
  const moves = { X: [], O: [] };
  const [X, O] = ["X", "O"];

  let flip = true;
  let turns = 0;

  while (!isGameOver(turns)) {
    const player = flip ? X : O;
    const block = getPlacement(BOARD, player);
    BOARD[block] = player;
    const current = moves[player];
    current.push(block);
    drawBoard(BOARD);

    if (hasWon(current)) {
      console.log(`${player} has won !`);
      return true;
    }

    flip = !flip;
    turns += 1;
  }

  console.log("Game ended in a draw");
  return true;
};
