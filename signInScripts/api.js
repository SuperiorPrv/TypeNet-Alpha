const API = "https://66d295a6184dce1713cde1d0.mockapi.io/Data/Users";

async function GetUsersArray() {
    try {
        const {data} = await axios.get(API);
        return data;
    } catch (error) {
        console.error(error);
        
    }
}

export {GetUsersArray}