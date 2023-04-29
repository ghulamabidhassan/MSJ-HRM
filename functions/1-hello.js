import dotenv from "dotenv";
import mysql from "mysql2/promise";
import { nanoid } from "nanoid";

dotenv.config();

export const handler = async (event, context) => {
  const pool = await mysql.createPool(process.env.DATABASE_URL);
  const [result] = await pool.query("select * from abidtable");
  const method = event.httpMethod;
  const ref = event.headers.host;

  if (method === "GET") {
    return {
      statusCode: 200,
      body: JSON.stringify({
        ref,
        UId: nanoid(10),
        type: method,
        data: result,
        status: "Success",
        statusCode: 200,
        event,
      }),
    };
  }

  if (method === "PUT") {
    return {
      statusCode: 200,
      body: JSON.stringify({
        ref,
        UId: nanoid(10),
        type: method,
      }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ msg: "ONLY GET AND PUT", ref }),
  };
};
