import { nanoid } from "nanoid";
import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();
const id = nanoid(8);

export const handler = async (event, context) => {
  const pool = await mysql.createPool(process.env.DATABASE_URL);
  const [result] = await pool.query("select email from abidtable");

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: result,
      id,
      status: "Success",
      statusCode: 200,
    }),
  };
};
