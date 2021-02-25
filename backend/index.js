import express from "express";
import cors from "cors";
import path from "path";
import formData from "express-form-data";
// Dot Env + Database
import "./utils/Environment.js";
import "./utils/Database.js";
import { ErrorHandler, NotFound } from "./utils/ErrorHandler.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(formData.parse());

// Routes
import routing from "./routing.js";
routing(app);

// Middleware
app.use(NotFound);
app.use(ErrorHandler);

// Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Safe Auth is running now at port ${PORT}!`));
