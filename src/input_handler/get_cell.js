export const getCell = () => {
  const inp = prompt("choose place").slice(0, 1);
  return parseInt(inp) - 1;
};

const isInBound = (cell) => cell >= 0 && cell <= 8;
export const isEmpty = (cell, board) => board[cell] === " ";
export const isValid = (cell) => !isNaN(cell) && isInBound(cell);
