import { GET } from "../utils/function/httpHandler";
import { BackApi } from "./config/api";

export const getItems =  (type) => {
    return GET(BackApi.items[type]);
}
