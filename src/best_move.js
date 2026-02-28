import { hasWon, isDraw } from "./check_game_state.js";
import { isEmpty } from "./get_cell.js";

const EMPTY = " ";
const minimax = (board, depth, isMax) => {
  if (hasWon(board, "X")) {
    return 10 - depth;
  }

  if (hasWon(board, "O")) {
    return depth - 10;
  }

  if (isDraw(board)) {
    return 0;
  }

  const currPlayer = isMax ? "X" : "O";

  if (isMax) {
    let bestScore = -Infinity;
    for (let cell = 0; cell < board.length; cell++) {
      if (isEmpty(cell, board)) {
        board[cell] = currPlayer;
        const score = minimax(board, depth + 1, false);
        board[cell] = EMPTY;
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let cell = 0; cell < board.length; cell++) {
      if (isEmpty(cell, board)) {
        board[cell] = currPlayer;
        const score = minimax(board, depth + 1, true);
        board[cell] = EMPTY;
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
};

export const bestMove = (board) => {
  let bestScore = -Infinity;
  let move = 0;

  for (let cell = 0; cell < board.length; cell++) {
    if (isEmpty(cell, board)) {
      board[cell] = "X";
      const score = minimax(board, 0, false);
      board[cell] = EMPTY;
      if (score > bestScore) [bestScore, move] = [score, cell];
    }
  }

  return move;
};
