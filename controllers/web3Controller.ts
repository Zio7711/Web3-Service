import { Request, Response } from "express";

import { StatusCodes } from "http-status-codes";

const web3Test = async (req: Request, res: Response) => {
    // do something here

  res.status(StatusCodes.OK).json({
    user: {
     test: "ok"
    },
  });
};


export { web3Test };
