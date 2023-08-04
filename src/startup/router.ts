import { Express, Request, Response } from "express";
import typeormProductsRouter from "../controllers/product.controller";

const routerSetup = (app: Express) =>
  app

    .get("/", async (req: Request, res: Response) => {
      res.send("Hello Express APIvantage!");
    })
    .use("/api/products", typeormProductsRouter);

export default routerSetup;
