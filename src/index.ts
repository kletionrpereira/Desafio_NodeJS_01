/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
  console.log(`Executando na porta ${PORT}`);
  // Escreva aqui a sua msg para o mundo
  console.log("Hello World!");
});

// Hello Worlrd Printado na tela
app.get("/", function (req, res) {
  res.send("Hello World!");
});
