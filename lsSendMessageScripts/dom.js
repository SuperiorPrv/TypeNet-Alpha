import { selectedUserID , SendMessage , EditMessage , DeleteMessage } from "./api.js";

const userAvatar = document.querySelector('.userAvatar');
const userName = document.querySelector('.userName');

const typenet = document.querySelector('.typenet');

const title = document.querySelector('title');

const messagesBlock = document.querySelector('.messagesBlock');

const sendMessageForm = document.querySelector('.sendMessageForm');

const editMessageDialog = document.querySelector('.editMessageDialog');
const editMessageForm = document.querySelector('.editMessageForm');
const closeEditMessageDialog = document.querySelector('.closeEditMessageDialog');

let editedMessage = {};

editMessageForm.onsubmit=(event)=>{
    event.preventDefault();
    if(editMessageForm.message.value.trim()!=""){
        editedMessage.content = editMessageForm.message.value.trim();
        editedMessage.isEdited = true;
        editedMessage.createdAt = Date.now();
        EditMessage(editedMessage);
        editMessageDialog.close();
        editMessageForm.reset();
    }
}

closeEditMessageDialog.onclick=()=>{
    editMessageDialog.close();
    editMessageForm.reset();
}

sendMessageForm.onsubmit=(event)=>{
    event.preventDefault();
    if(sendMessageForm.message.value.trim()!=""){
        let message = {
            id: Date.now(),
            content: sendMessageForm.message.value.trim(),
            createdAt: Date.now(),
            sendedToId: selectedUserID,
            isEdited: false
        }
        SendMessage(message);
        sendMessageForm.message.value = "";
    }
}

typenet.onclick=()=>{
    window.location.href = "mainPage.html";
}

function DisplayLsMessages(Data,User1,User2) {
    title.innerHTML = `Chat with ${User2.firstName}`;
    messagesBlock.innerHTML = "";
    Data.forEach((e,i) => {
        let message = document.createElement('div');
        if(User2.lsMessages.includes(e)) message.classList.add('message1');
        else message.classList.add('message');
        let messageCreatorImage = document.createElement('img');
        let messageContent = document.createElement('div');
        let messageCreatorName = document.createElement('h4');
        let messageText = document.createElement('p');
        let messageActions = document.createElement('div');
        let messageButtons = document.createElement('div');
        let messageSendTime = document.createElement('span');
        let editMessageButton = document.createElement('button');
        let deleteMessageButton = document.createElement('button');
        editMessageButton.classList.add('editButton');
        deleteMessageButton.classList.add('deleteButton');
        messageCreatorName.innerHTML = User2.lsMessages.includes(e)?User2.firstName:User1.firstName;
        messageCreatorImage.src = User2.lsMessages.includes(e)?User2.avatar:User1.avatar;
        messageText.innerHTML = e.content;
        messageSendTime.innerHTML = e.isEdited?"Edited : "+new Date(Number(e.createdAt)).toLocaleString():new Date(Number(e.createdAt)).toLocaleString();
        editMessageButton.innerHTML = 'Edit';
        editMessageButton.onclick=()=>{
            editMessageDialog.showModal();
            editMessageForm.message.value = e.content;
            editedMessage = e;
        }
        deleteMessageButton.innerHTML = 'Delete';
        deleteMessageButton.onclick=()=>{
            DeleteMessage(e);
        }
        messageCreatorImage.onclick=()=>{
            if(User2.lsMessages.includes(e)) window.location.href="userPage.html";
            else window.location.href="currentUserPage.html";
        }
        messageCreatorImage.classList.add("pointer");
        messageCreatorName.onclick=()=>{
            if(User2.lsMessages.includes(e)) window.location.href="userPage.html";
            else window.location.href="currentUserPage.html";
        }
        messageCreatorName.classList.add("pointer");
        messageActions.classList.add('messageActions');
        messageButtons.append(editMessageButton,deleteMessageButton);
        messageContent.append(messageCreatorName,messageText);
        messageContent.classList.add('messageContent');
        messageActions.append(messageSendTime,messageButtons);
        message.append(messageCreatorImage,messageContent,messageActions);
        messagesBlock.appendChild(message);
    });
}

function DisplayCurrentUserObj_Head(Obj) {
    userAvatar.src = Obj.avatar;
    userName.innerHTML = Obj.firstName;
    userAvatar.onclick=()=>{
        window.location.href = "currentUserPage.html";
    }
    userName.onclick=()=>{
        window.location.href = "currentUserPage.html";
    }
}

export {DisplayCurrentUserObj_Head,DisplayLsMessages};