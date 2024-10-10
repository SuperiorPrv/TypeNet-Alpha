const UsersAPI = "https://66d295a6184dce1713cde1d0.mockapi.io/Data/Users";

const currentUserID = localStorage.getItem("CurrentUserID");

async function UpdateUser(Obj,id) {
    try {
        const response = await axios.put(`${UsersAPI}/${id}`,Obj);
    } catch (error) {
        console.error(error);
        
    }
}

async function GetCurrentUserObj() {
    try {
        const {data} = await axios.get(UsersAPI+'/'+currentUserID);
        return data;
    } catch (error) {
        console.error(error);
        
    }
}

export {GetCurrentUserObj,UpdateUser}