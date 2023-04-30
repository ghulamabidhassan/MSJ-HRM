// import dotenv from "dotenv";
// import mysql from "mysql2/promise";
// import { nanoid } from "nanoid";

// dotenv.config();

// export const handler = async (event, context) => {
//   const ref = event.headers.host;
//   const pool = await mysql.createPool(process.env.DATABASE_URL);
//   const [result] = await pool.query("select * from abidtable");
//   const method = event.httpMethod;
//   console.log(event);

//   if (event.body === undefined) {
//     return {
//       statusCode: 404,
//       body: "PLEASE SIGN IN",
//     };
//   }

//   if (method === "GET") {
//     return {
//       statusCode: 200,
//       body: JSON.stringify({
//         ref,
//         UId: nanoid(10),
//         type: method,
//         data: result,
//         status: "Success",
//         statusCode: 200,
//         event,
//         user: JSON.stringify(event.body),
//       }),
//     };
//   }

//   if (method === "PUT") {
//     return {
//       statusCode: 200,
//       body: JSON.stringify({
//         ref,
//         UId: nanoid(10),
//         type: method,
//       }),
//     };
//   }

//   return {
//     statusCode: 200,
//     body: JSON.stringify({ msg: "ONLY GET AND PUT", ref }),
//   };
// };

import express from "express";
import serverless from "serverless-http";
import fileUpload from "express-fileupload";

const app = express();
const router = express.Router();

app.use(fileUpload());
app.use(express.json());
app.use("/.netlify/functions/1-hello", router);

router.get("/", async (req, res) => {
  res.send("home page");
});

router.get("/test", (req, res) => {
  res.json({ msg: "extra page" });
});

router.post("/", async (req, res) => {
  const obj = req.body;

  if (Object.keys(obj).length === 0) {
    res.json({ msg: "nothing there" });
  } else {
    res.json({ msg: " recd something" });
  }
});

export const handler = serverless(app);
