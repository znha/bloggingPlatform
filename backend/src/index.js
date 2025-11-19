import express from "express";
import cors from "cors";
import morgan from "morgan";
import postsRouter from "./routes/posts.js";
import authRouter from "./routes/auth.js";
import cookieParser from 'cookie-parser';

const app = express();

// Built-in middleware
app.use(express.json({ limit: '4mb' }));
app.use(express.urlencoded({ extended: true, limit: '4mb' }));
app.use(cookieParser());

// Third-party middleware
app.use(cors({
  origin: 'https://blogging-platform-xx17.vercel.app', // or '*' for dev
  credentials: true, // if using cookies
}));
app.use(morgan("dev"));

// Routes
app.use("/posts", postsRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.type("html").send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8"/>
        <title>Express on Vercel</title>
      </head>
      <body>
        <h1>Welcome to Express on Vercel 🚀</h1>
      </body>
    </html>
  `);
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ error: "We Can't find you route" });
});

// Centralized error handler
app.use((err, req, res, next) => {
  console.error(err);
  const status = err.status || 500;
  console.error('Error stack:', err.stack); // Logs to Vercel

  const body = {
    error: err.message || "Internal Server Error",
  };
  res.status(status).json(body);
});

export default app;
