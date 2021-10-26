import express from "express";
import cors from "cors";
import morgan from "morgan";
import config from "./config";
const app = express();

app.set("port", config.port || 3000);

export default app;
