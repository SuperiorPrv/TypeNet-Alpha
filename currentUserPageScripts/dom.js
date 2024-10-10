import {GetCurrentUserObj,DeleteUser} from "./api.js"

const userAvatar = document.querySelector('.userAvatar');
const userFullname = document.querySelector('.userFullname');
const userEmail = document.querySelector('.userEmail');
const userBio = document.querySelector('.userBio');
const userSignupDate = document.querySelector('.userSignupDate');
const title = document.querySelector('title');

const editAccount = document.querySelector('.editAccount');
const deleteAccount = document.querySelector('.deleteAccount');

const deleteAccountDialog = document.querySelector('.deleteAccountDialog');
const checkPassword = document.querySelector('.checkPassword');
const deleteAccountButton = document.querySelector('.deleteAccountButton');
const cancelDeleteButton = document.querySelector('.cancelDeleteButton');

const userAvatar1 = document.querySelector('.userAvatar1');
const userName1 = document.querySelector('.userName1');

const typenet = document.querySelector('.typenet');

typenet.onclick=()=>{
    window.location.href = "mainPage.html";
}

cancelDeleteButton.onclick=()=>{
    deleteAccountDialog.close();
    checkPassword.value = "";
}

deleteAccountButton.onclick=async()=>{
    let UserObj = await GetCurrentUserObj();
    if(atob(UserObj.password)==checkPassword.value){
        DeleteUser(UserObj.id);
        alert("Account deleted successfully");
        checkPassword.value = "";
        deleteAccountDialog.close();
        window.location.href="index.html";
    }
    else{
        alert("Wrong password!");
        checkPassword.value = "";
    }
}

deleteAccount.onclick=()=>{
    deleteAccountDialog.showModal();
}

editAccount.onclick=()=>{
    window.location.href="editAccount.html";
}

function DisplayCurrentUserData(Obj) {
    userAvatar1.src = Obj.avatar;
    userName1.innerHTML = `${Obj.firstName}`;
    userAvatar1.onclick=()=>{
        window.location.href = "currentUserPage.html";
    }
    userName1.onclick=()=>{
        window.location.href = "currentUserPage.html";
    }

    userAvatar.src = Obj.avatar;
    userFullname.innerHTML = Obj.firstName+" "+Obj.lastName;
    userEmail.innerHTML = Obj.email;
    userBio.innerHTML = "About myself : " + Obj.bio;
    userSignupDate.innerHTML = "Registrated : " + Obj.createdAt;
    title.innerHTML = Obj.firstName + " / TypeNet";
}

export {DisplayCurrentUserData}