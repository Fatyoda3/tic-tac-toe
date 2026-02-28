import { game } from "./src/game.js";
// const playAgain = () => confirm("play again ? ");

const main = async () => {
  const chars = ["X", "O"];
  const players = [];
  const listener = Deno.listen({ port: 8000, transport: "tcp" });

  for await (const conn of listener) {
    const p = conn.localAddr.hostname;
    console.log(p, "<-- JOINED");
    players.push({ conn, sym: chars.pop() });
    if (players.length === 2) {
      return await game(players);
    }
  }

  // while (playAgain()) {
  //   game();
  // }
};

main();
