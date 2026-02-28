import { drawBoard } from "./ui/draw_board.js";
import { input } from "./input_handler/input_handler.js";
import { hasWon, isDraw } from "./input_handler/check_game_state.js";
import { /* getCell, */ isEmpty, isValid } from "./input_handler/get_cell.js";
import { broadcast, enterCorrectChoice } from "./broadcast.js";
import { BUFF, DEC } from "./ENC.js";

const triggerCLS = (players) =>
  players.forEach(async (p) => await broadcast(p, "\x1B[H\x1B[2J"));
const askTurn = (isNetwork) => isNetwork ? true : confirm("wanna play first ?");

const getCell = async (pConn) => {
  const bytes = await pConn.conn.read(BUFF);
  const string = BUFF.slice(0, bytes);
  const cell = DEC.decode(string).trim();
  return parseInt(cell) - 1;
};

const putPlayerChoice = async (board, currPlayer, players) => {
  const pConn = players.find((p) => p.sym === currPlayer);

  while (true) {
    const cell = await getCell(pConn);
    if (isValid(cell) && isEmpty(cell, board)) return cell;
    await enterCorrectChoice(pConn);
  }
};

export const game = async (players) => {
  const [CELL, X, O] = [" ", "X", "O"];
  const board = Array.from({ length: 9 }, () => CELL);

  let turn = askTurn(true);

  const rendered = drawBoard(board, { curr: "", cell: "" });

  players.forEach(async (p) => await broadcast(p, rendered));

  while (!isDraw(board)) {
    const curr = turn ? O : X;
    const cell = await putPlayerChoice(board, curr, players);
    board[cell] = curr;
    await triggerCLS(players);
    const rendered = drawBoard(board, { curr, cell });

    players.forEach(async (p) => await broadcast(p, rendered));

    if (hasWon(board, curr)) {
      console.log(`${curr} has won!`);
      return true;
    }

    turn = !turn;
  }

  console.log("Game Ended In A Tie");
  return true;
};
