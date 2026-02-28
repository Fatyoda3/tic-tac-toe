import { ENC } from "./ENC.js";

export const broadcast = async (pConn, message) => {
  await pConn.conn.write(ENC.encode(message));
};

export const enterCorrectChoice = async (pConn) => {
  await broadcast(pConn, "Enter the correct cell!\n");
};
