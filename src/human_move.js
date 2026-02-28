import { getCell, isEmpty, isValid } from "./get_cell.js";

export const humanMove = (board) => {
  while (true) {
    const cell = getCell();
    if (isValid(cell) && isEmpty(cell, board)) {
      return cell;
    }

    console.log("Enter the correct cell!");
  }
};
