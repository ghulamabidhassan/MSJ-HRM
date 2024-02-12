import express from "express";
import serverless from "serverless-http";
import fileUpload from "express-fileupload";

const app = express();
const router = express.Router();

app.use(express.json());
app.use(fileUpload());
app.use("/.netlify/functions/server", router);
app.all("*", (req, res) => {
  res.status(404).send("404 not found");
});

router.get("/", (req, res) => {
  res.json({ msg: "hey" });
});

// router.get("/testlogin", (req, res) => {
//   console.log(req.headers);
//   res.end();
// });

router.post("/testlogin", async (req, res) => {
  console.log(req.files);
  // const image = req.apiGateway.event.body;
  res.json({
    msg: "success",
  });
});

export const handler = serverless(app);
