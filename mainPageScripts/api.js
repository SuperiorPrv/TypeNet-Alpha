import { DisplayCurrentUserData,DisplayUsers,DisplayUsersOnChatlist,DisplayChats } from "./dom.js";

const UsersAPI = "https://66d295a6184dce1713cde1d0.mockapi.io/Data/Users";

const ChatsAPI = "https://66d295a6184dce1713cde1d0.mockapi.io/Data/Chats";

const currentUserID = localStorage.getItem("CurrentUserID");

async function PostChat(Obj) {
    try {
        const response = await axios.post(ChatsAPI,Obj);
    } catch (error) {
        console.error(error);
        
    }
}

async function GetUsersOnChatlist() {
    try {
        const {data} = await axios.get(UsersAPI);
        DisplayUsersOnChatlist(data);
    } catch (error) {
        console.error(error);
        
    }
}

async function GetChats() {
    try {
        const {data} = await axios.get(ChatsAPI);
        DisplayChats(data);
    } catch (error) {
        console.error(error);
        
    }
}

async function GetUsers() {
    try {
        const {data} = await axios.get(UsersAPI);
        DisplayUsers(data);
    } catch (error) {
        console.error(error);
        
    }
}

async function GetCurrentUserObj() {
    try {
        const {data} = await axios.get(UsersAPI+'/'+currentUserID);
        DisplayCurrentUserData(data);
    } catch (error) {
        console.error(error);
        
    }
}

export {GetCurrentUserObj,GetUsers,PostChat,GetUsersOnChatlist,GetChats}