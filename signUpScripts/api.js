const UsersAPI = "https://66d295a6184dce1713cde1d0.mockapi.io/Data/Users";

async function AddNewUser(Obj) {
    try {
        const response = await axios.post(UsersAPI, Obj);
    } catch (error) {
        console.error(error);
        
    }
}

async function GetUsersArray() {
    try {
        const {data} = await axios.get(UsersAPI);
        return data;
    } catch (error) {
        console.error(error);
        
    }
}

export {AddNewUser, GetUsersArray}