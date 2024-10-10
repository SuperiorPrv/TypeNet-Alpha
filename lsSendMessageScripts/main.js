import { GetCurrentUserObj_Head,GetLsMessages } from "./api.js";

GetCurrentUserObj_Head();

GetLsMessages();

setInterval(() => {
    GetLsMessages();
}, 1000);