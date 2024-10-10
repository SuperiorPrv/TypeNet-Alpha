import { DisplaySelectedUser,DisplayCurrentUser } from "./dom.js";

const UsersAPI = "https://66d295a6184dce1713cde1d0.mockapi.io/Data/Users";

const currentUserID = localStorage.getItem("CurrentUserID");

const selectedUserID = localStorage.getItem("SelectedUserID");

async function GetSelectedUser() {
    try {
        const {data} = await axios.get(UsersAPI+'/'+selectedUserID);
        DisplaySelectedUser(data);
    } catch (error) {
        console.error(error);
        
    }
}

async function GetCurrentUser() {
    try {
        const {data} = await axios.get(UsersAPI+'/'+currentUserID);
        DisplayCurrentUser(data);
    } catch (error) {
        console.error(error);
        
    }
}

export {GetSelectedUser,GetCurrentUser}