require("dotenv").config();
const pool = require("./server/config/database");
const express = require("express");
const cors = require("cors");
const userRouter = require("./server/api/users/user.router");
const questionRouter = require("./server/api/questions1/question.router");
const answerRouter = require("./server/api/Answers1/answer.router");
const app = express();
const port = process.env.PORT||80 ;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/questions", questionRouter);
app.use("/api/Answers", answerRouter);

app.listen(port, "0.0.0.0", () => console.log(`listening at http://localhost:${port}`));
