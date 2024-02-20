import express, { Application } from "express";
import connectDB from "./database/database";
import { config } from "dotenv";
import routes from "./routes/routes";

const main = async () => {
  config();
  const app: Application = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    if (req.method == "OPTIONS") {
      res.header(
        "Access-Control-Allow-Methods",
        "PUT, POST, PATCH, DELETE, GET"
      );
      return res.status(200).json({});
    }

    next();
  });

  app.use("/user", routes);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

connectDB().then(() => {
  main();
});
