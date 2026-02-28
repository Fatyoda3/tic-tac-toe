import { game } from "./src/game.js";

const playAgain = () => confirm("play again ? ");

const main = () => {
  game();

  while (playAgain()) {
    game();
  }
};

main();
