import { GetUsers , PostChat , GetUsersOnChatlist} from "./api.js";

const userAvatar = document.querySelector('.userAvatar');
const userName = document.querySelector('.userName');

const typenet = document.querySelector('.typenet');

const left1 = document.querySelector('.left1');
const right1 = document.querySelector('.right1');

const newChatButton = document.querySelector('.newChatButton');
const newChatDialog = document.querySelector('.newChatDialog');
const newChatForm = document.querySelector('.newChatForm');
const selectChatUsers = document.querySelector('.selectChatUsers');
const closeNewChatButton = document.querySelector('.closeNewChatButton');

closeNewChatButton.onclick = () => {
    newChatDialog.close();
}

newChatForm.onsubmit=(event)=>{
    event.preventDefault();
    if(newChatForm.name.value.trim()=="" || newChatForm.avatar.value.trim()==""){
        alert("Please fill all fields!");
    }
    else{
        let array=[];
        for(let i=0;i<=100;i++){
            if(document.querySelector(".ch"+i)!=null){
                if(document.querySelector(".ch"+i).checked==true){
                    array.push(i);
                }
            }
        }
        let Obj={
            name: newChatForm.name.value.trim(),
            avatar: newChatForm.avatar.value.trim(),
            createdAt: new Date(Date.now()).toLocaleString(),
            messages:[],
            adminsID:[],
            usersID:array
        }
        PostChat(Obj);
        newChatForm.reset();
        newChatDialog.close();
        setTimeout(() => {
            window.location.reload();
        }, 500);
    }
}

newChatButton.onclick = () => {
    GetUsersOnChatlist();
    setTimeout(() => {
        newChatDialog.showModal();
    }, 200);
}

typenet.onclick=()=>{
    window.location.href = "mainPage.html";
}

function DisplayCurrentUserData(Obj) {
    userAvatar.src = Obj.avatar;
    userName.innerHTML = Obj.firstName;
    userAvatar.onclick=()=>{
        window.location.href = "currentUserPage.html";
    }
    userName.onclick=()=>{
        window.location.href = "currentUserPage.html";
    }
}

function DisplayChats(Data) {
    right1.innerHTML = "";
    let text = document.createElement('h2');
    text.innerHTML = "Chats";
    let newChatButton = document.createElement('button');
    newChatButton.innerHTML = "New Chat";
    newChatButton.classList.add("newChatButton");
    newChatButton.onclick = () => {
        GetUsersOnChatlist();
        setTimeout(() => {
            newChatDialog.showModal();
        }, 200);
    }
    right1.append(text, newChatButton);
    Data.forEach((e,i)=>{
        let div = document.createElement("div");
        div.classList.add("chat1");
        let name = document.createElement("h2");
        let avatar = document.createElement("img");
        name.innerHTML = e.name;
        avatar.src = e.avatar;
        name.onclick=()=>{
            window.location.href = "chatPage.html";
            localStorage.setItem('SelectedChatID', e.id);
        }
        avatar.onclick=()=>{
            window.location.href = "chatPage.html";
            localStorage.setItem('SelectedChatID', e.id);
        }
        div.append(avatar,name);
        right1.appendChild(div);
    });
}

function DisplayUsers(Data) {
    left1.innerHTML="";
    let text = document.createElement('h2');
    text.innerHTML = "Users";
    left1.appendChild(text);
    Data.forEach((e,i) => {
        let div = document.createElement("div");
        div.classList.add("user1");
        let name = document.createElement("h2");
        let avatar = document.createElement("img");
        name.innerHTML = e.firstName;
        avatar.src = e.avatar;
        if(e.firstName==userName.innerHTML.trim()){
            name.onclick=()=>{
                window.location.href = "currentUserPage.html";
            }
            avatar.onclick=()=>{
                window.location.href = "currentUserPage.html";
            }
        }
        else{
            name.onclick=()=>{
                window.location.href = "userPage.html";
                localStorage.setItem('SelectedUserID', e.id);
            }
            avatar.onclick=()=>{
                window.location.href = "userPage.html";
                localStorage.setItem('SelectedUserID', e.id);
            }
        }
        div.append(avatar,name);
        left1.appendChild(div);
    });
}

function DisplayUsersOnChatlist(Data) {
    selectChatUsers.innerHTML = "";
    if(document.querySelector('.addNewChat')!=null) document.querySelector('.addNewChat').remove();
    Data.forEach((e,i)=>{
        if(e.firstName!=userName.innerHTML.trim()){
            let div = document.createElement('div');
            let div_1 = document.createElement('div');
            let name = document.createElement('h2');
            let avatar = document.createElement('img');
            let checkbox = document.createElement('input');
            name.innerHTML = e.firstName;
            avatar.src = e.avatar;
            checkbox.type = "checkbox";
            checkbox.classList.add("ch"+e.id);
            div_1.append(avatar,name);
            div.append(div_1,checkbox);
            selectChatUsers.appendChild(div);
        }
    });
    let submit = document.createElement("button");
    submit.type = "submit";
    submit.innerHTML = "Create new chat";
    submit.classList.add("addNewChat");
    newChatForm.appendChild(submit);
}

export {DisplayCurrentUserData,DisplayUsers,DisplayUsersOnChatlist,DisplayChats}