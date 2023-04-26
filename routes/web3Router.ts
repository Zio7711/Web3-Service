import express from "express";
import { web3Test } from "../controllers/web3Controller";

const web3Router = express.Router();
  
  web3Router.route("/").get(web3Test);

  
  export default web3Router;
  