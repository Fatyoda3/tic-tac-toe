const BORDER = "-".repeat(11);
const SEPARATOR = "| |";

const stitchRow = (row) => `|${row.join(SEPARATOR)}|\n${BORDER}`;

export const drawBoard = (board) => {
  const rendered = [];

  for (let i = 0; i < board.length; i += 3) {
    const stitchedRow = stitchRow(board.slice(i, i + 3));
    rendered.push(stitchedRow);
  }

  console.clear();
  console.log(rendered.join("\n"));
};
