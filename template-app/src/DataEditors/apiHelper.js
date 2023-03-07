import { GET } from "../utils/function/httpHandler";
import { BackApi } from "./config/api";

export const getItems = (type) => {
    console.log('type', type);
    return GET(BackApi.items[type]);
}
