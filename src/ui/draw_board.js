const PADDING_LEFT = "".repeat(0);
const BORDER = `${PADDING_LEFT}${"-".repeat(11)}`;
const SEPARATOR = "| |";
const PADDING_TOP = "\n".repeat(5);

const formatRow = (row) => `${PADDING_LEFT}|${row.join(SEPARATOR)}|\n${BORDER}`;

export const drawBoard = (board, { curr, cell }) => {
  const rendered = [];

  for (let i = 0; i < board.length; i += 3) {
    const row = board.slice(i, i + 3);
    const stitchedRow = formatRow(row);
    rendered.push(stitchedRow);
  }

  console.clear();
  console.log("CHOICE -->", { curr, cell });

  console.log(PADDING_TOP);
  console.log(rendered.join("\n"));
  return [`CHOICE --> ${curr} ${cell}`, rendered.join("\n")]
    .join("\n")
    .concat("\n\n");
};
