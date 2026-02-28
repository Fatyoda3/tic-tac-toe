import { hasWon, isDraw } from "./check_game_state.js";
import { isEmpty } from "./get_cell.js";

const [EMPTY, X, O] = [" ", "X", "O"];
const [MAXIMIZER, MINIMIZER] = [[X, Math.max], [O, Math.min]];

const updateScoreAndMove = (score, bestScore, cell, move) => {
  return (score > bestScore) ? [score, cell] : [bestScore, move];
};

const getPlayerAndScorer = (isMax) => isMax ? MAXIMIZER : MINIMIZER;

const minimax = (board, depth, isMax, prevBestScore) => {
  if (hasWon(board, X)) {
    return 10 - depth;
  }
  if (hasWon(board, O)) {
    return depth - 10;
  }
  if (isDraw(board)) {
    return 0;
  }

  const [currPlayer, minMaxFn] = getPlayerAndScorer(isMax);
  let bestScore = prevBestScore;

  for (let cell = 0; cell < board.length; cell++) {
    if (isEmpty(cell, board)) {
      board[cell] = currPlayer;
      const score = minimax(board, depth + 1, !isMax, -prevBestScore);
      board[cell] = EMPTY;
      bestScore = minMaxFn(score, bestScore);
    }
  }

  return bestScore;
};

export const botMove = (board) => {
  let [bestScore, move] = [-Infinity, 0];

  for (let cell = 0; cell < board.length; cell++) {
    if (isEmpty(cell, board)) {
      board[cell] = X;
      const score = minimax(board, 0, false, Infinity);
      board[cell] = EMPTY;

      [bestScore, move] = updateScoreAndMove(score, bestScore, cell, move);
    }
  }

  return move;
};
