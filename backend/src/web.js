// libs
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import mongoose from "mongoose";
import detectPort from "detect-port";
import chalk from "chalk";

// api
import auth from "./api/auth.js";
import posts from "./api/posts.js";
import docs from "./utils/api-doc.js";

// utils
import { authenticateUser } from "./utils/auth.js";

// mongo db
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
mongoose.connect(
  "mongodb+srv://oduck_user:1234@cluster0-ktaqh.mongodb.net/oduck?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);
mongoose.Promise = global.Promise;

// server setup
let port;
async function configServer() {
  port = 8001 || (await detectPort(8001));
}
configServer();

const history = require("connect-history-api-fallback"); // 상단 아무곳이나 추가

// express setup
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan()); // log request

const path = require("path");

// api docs
app.use("/api", docs);


app.use(history());

app.use(express.static(path.join(__dirname, 'public')));

// express routers
app.use("/", auth);
app.use("/posts", authenticateUser, posts);



// start
app.listen(port, () => console.log("Server started at port 8001"));
