import { DisplayCurrentUserObj_Head,DisplayLsMessages } from "./dom.js";

const UsersAPI = "https://66d295a6184dce1713cde1d0.mockapi.io/Data/Users"

const currentUserID = localStorage.getItem('CurrentUserID');

const selectedUserID = localStorage.getItem('SelectedUserID');

async function DeleteMessage(Obj) {
    try {
        let {data} = await axios.get(UsersAPI+'/'+currentUserID)
        let ms = data.lsMessages
        for(let i=0;i<ms.length;i++) {
            if(ms[i].id == Obj.id) {
                ms.splice(i,1);
                break;
            }
        }
        data.lsMessages = ms;
        const response = await axios.put(UsersAPI+'/'+currentUserID, data);
        GetLsMessages();
    } catch (error) {
        console.error(error);
        
    }
}

async function EditMessage(Obj) {
    try {
        let {data} = await axios.get(UsersAPI+'/'+currentUserID)
        let ms = data.lsMessages
        for(let i=0;i<ms.length;i++) {
            if(ms[i].id == Obj.id) {
                ms[i]=Obj;
                break;
            }
        }
        console.log(ms);
        data.lsMessages = ms;
        const response = await axios.put(UsersAPI+'/'+currentUserID, data);
        GetLsMessages();
    } catch (error) {
        
    }
}

async function SendMessage(Obj) {
    try {
        let {data} = await axios.get(UsersAPI+'/'+currentUserID);
        data.lsMessages.push(Obj);
        const response = await axios.put(UsersAPI+'/'+currentUserID, data);
        GetLsMessages();
    } catch (error) {
        console.error(error);
        
    }
}

async function GetLsMessages() {
    try {
        let {data:Data1} = await axios.get(UsersAPI+'/'+currentUserID);
        let {data:Data2} = await axios.get(UsersAPI+'/'+selectedUserID);
        let data1 = Data1.lsMessages;
        let data2 = Data2.lsMessages; 
        let data = [];
        for(let i=0; i<Math.max(data1.length,data2.length); i++) {
            if(data1[i]!=undefined){
                if(data1[i].sendedToId == selectedUserID){
                    data.push(data1[i]);
                }
            }
            if(data2[i]!=undefined){
                if(data2[i].sendedToId == currentUserID){
                    data.push(data2[i]);
                }
            }
        }
        data.sort((a,b) => Number(a.createdAt) - Number(b.createdAt));
        DisplayLsMessages(data,Data1,Data2);
    } catch (error) {
        console.error(error);
        
    }
}

async function GetCurrentUserObj_Head() {
    try {
        const {data} = await axios.get(UsersAPI+'/'+currentUserID);
        DisplayCurrentUserObj_Head(data);
    } catch (error) {
        console.error(error);
        
    }
}

export {GetCurrentUserObj_Head,GetLsMessages,selectedUserID,SendMessage,EditMessage,DeleteMessage}