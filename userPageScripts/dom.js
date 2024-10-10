const userAvatar1 = document.querySelector('.userAvatar1');
const userFullname = document.querySelector('.userFullname');
const userEmail = document.querySelector('.userEmail');
const userBio = document.querySelector('.userBio');
const userSignupDate = document.querySelector('.userSignupDate');
const sendMessageButton = document.querySelector('.sendMessageButton');

const userAvatar = document.querySelector('.userAvatar');
const userName = document.querySelector('.userName');

const typenet = document.querySelector('.typenet');

const title = document.querySelector('title');

sendMessageButton.onclick = () => {
    window.location.href = "lsSendMessage.html";
}

typenet.onclick=()=>{
    window.location.href = "mainPage.html";
}

function DisplaySelectedUser(Obj) {
    userAvatar1.src = Obj.avatar;
    userFullname.innerHTML = `${Obj.firstName} ${Obj.lastName}`;
    userEmail.innerHTML = Obj.email;
    userBio.innerHTML = "About me: " + Obj.bio;
    userSignupDate.innerHTML = "Registered: " + Obj.createdAt;
    title.innerHTML = Obj.firstName + " / TypeNet";
}

function DisplayCurrentUser(Obj) {
    userAvatar.src = Obj.avatar;
    userName.innerHTML = `${Obj.firstName}`;
    userAvatar.onclick=()=>{
        window.location.href = "currentUserPage.html";
    }
    userName.onclick=()=>{
        window.location.href = "currentUserPage.html";
    }
}

export {DisplaySelectedUser,DisplayCurrentUser}