const getCell = (msg) => parseInt(prompt(msg).slice(0, 1)) - 1;
const isInBound = (value) => value >= 0 && value <= 8;
const isEmpty = (cell, board) => board[cell] === " ";
const isValid = (block) => !isNaN(block) && isInBound(block);

export const getPlacement = (board) => {
  while (true) {
    const block = getCell("enter Block: ");
    if (isValid(block) && isEmpty(block, board)) return block;
    console.log("choose correct placement !");
  }
};
