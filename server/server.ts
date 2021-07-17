import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "..", "build")));

app.listen(process.env.PORT || 8080);

export { app };
