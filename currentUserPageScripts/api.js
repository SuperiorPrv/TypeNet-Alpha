import { DisplayCurrentUserData } from "./dom.js";

const UsersAPI = "https://66d295a6184dce1713cde1d0.mockapi.io/Data/Users";

const currentUserID = localStorage.getItem("CurrentUserID");

async function DeleteUser(id) {
    try {
        const response = await axios.delete(UsersAPI+'/'+id);
    } catch (error) {
        console.error(error);
        
    }
}

async function GetCurrentUserObj() {
    try {
        const {data} = await axios.get(UsersAPI+"/"+currentUserID);
        return data;
    } catch (error) {
        console.error(error);
        
    }
}

async function GetCurrentUser() {
    try {
        const {data} = await axios.get(UsersAPI+'/'+currentUserID);
        DisplayCurrentUserData(data);
    } catch (error) {
        console.error(error);
        
    }
}

export {GetCurrentUser,GetCurrentUserObj,DeleteUser}