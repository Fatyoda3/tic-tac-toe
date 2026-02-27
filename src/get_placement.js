const getCell = (msg) => parseInt(prompt(msg).slice(0, 1)) - 1;
const isInBound = (value) => value >= 0 && value <= 8;
const isEmpty = (cell, board) => board[cell] === " ";
const isValid = (block) => !isNaN(block) && isInBound(block);
const ai = () => Math.round(Math.random() * 9);
const fns = {
  X: ai,
  O: getCell,
};
export const getPlacement = (board, player) => {
  const toCall = fns[player];
  while (true) {
    const block = toCall("enter Block: ");
    if (isValid(block) && isEmpty(block, board)) return block;
    console.log("choose correct placement !");
  }
};
