import { drawBoard } from "./ui/draw_board.js";
import { input } from "./input_handler/input_handler.js";
import { hasWon, isDraw } from "./input_handler/check_game_state.js";
import { getCell, isEmpty, isValid } from "./get_cell.js";

// const putPlayerChoice = (board, currPlayer) => {
//   const cell = input(board, currPlayer);
//   board[cell] = currPlayer;
// };

const askTurn = (isNetwork) => isNetwork ? true : confirm("wanna play first ?");
const BUFF = new Uint8Array(4);
const DEC = new TextDecoder();

const putPlayerChoice = async (_board, currPlayer, players) => {
  const pConn = players.find((p) => p.sym === currPlayer);

  const bytes = await pConn.conn.read(BUFF);
  const string = BUFF.slice(0, bytes);
  const cell = DEC.decode(string).trim();
  return parseInt(cell);
};

export const game = async (players) => {
  const [CELL, X, O] = [" ", "X", "O"];
  const board = Array.from({ length: 9 }, () => CELL);

  let turn = askTurn(true);

  drawBoard(board);

  while (!isDraw(board)) {
    const currPlayer = turn ? O : X;
    const cell = await putPlayerChoice(board, currPlayer, players);
    board[cell] = cell;

    drawBoard(board, { currPlayer, cell });

    if (hasWon(board, currPlayer)) {
      console.log(`${currPlayer} has won!`);
      return true;
    }

    turn = !turn;
  }

  console.log("Game Ended In A Tie");
  return true;
};
