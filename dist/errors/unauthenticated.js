import CustomAPIError from "./custom-api.js";
import { StatusCodes } from "http-status-codes";
class UnauthenticatedError extends CustomAPIError {
    status;
    constructor(message) {
        super(message);
        this.status = StatusCodes.UNAUTHORIZED;
    }
}
export default UnauthenticatedError;
