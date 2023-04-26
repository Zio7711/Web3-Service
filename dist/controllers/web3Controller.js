import { StatusCodes } from "http-status-codes";
const web3Test = async (req, res) => {
    // do something here
    res.status(StatusCodes.OK).json({
        user: {
            test: "ok"
        },
    });
};
export { web3Test };
