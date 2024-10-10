import { GetCurrentUserObj , UpdateUser} from "./api.js";

const editUserForm = document.querySelector('.editUserForm');

const userAvatar1 = document.querySelector('.userAvatar1');
const userName1 = document.querySelector('.userName1');

const typenet = document.querySelector('.typenet');

let UserObj = await GetCurrentUserObj();

editUserForm.firstname.value = UserObj.firstName;
editUserForm.lastname.value = UserObj.lastName;
editUserForm.phone.value = UserObj.phoneNumber;
editUserForm.email.value = UserObj.email;
editUserForm.avatar.value = UserObj.avatar;
editUserForm.bio.value = UserObj.bio;

userAvatar1.src = UserObj.avatar;
userName1.innerHTML = `${UserObj.firstName}`;
typenet.onclick=()=>{
    window.location.href = "mainPage.html";
}
userAvatar1.onclick=()=>{
    window.location.href = "currentUserPage.html";
}
userName1.onclick=()=>{
    window.location.href = "currentUserPage.html";
}

editUserForm.onsubmit=(event)=>{
    event.preventDefault();
    if(editUserForm.firstname.value.trim()=="" ||  editUserForm.phone.value.trim()=="" || editUserForm.email.value.trim()=="" || editUserForm.password.value=="" || editUserForm.avatar.value.trim()=="" || editUserForm.prevpassword.value==""){
        alert("Please fill all fields!");
    }
    else if(atob(UserObj.password)!=editUserForm.prevpassword.value){
        alert("Wrong old password!");
    }
    else{
        let Obj = {
            firstName: editUserForm.firstname.value.trim(),
            lastName: editUserForm.lastname.value.trim(),
            phoneNumber: editUserForm.phone.value.trim(),
            email: editUserForm.email.value.trim(),
            avatar: editUserForm.avatar.value.trim(),
            bio: editUserForm.bio.value.trim(),
            password: btoa(editUserForm.password.value.trim()),
            lsMessages: UserObj.lsMessages,
            createdAt: UserObj.createdAt
        }
        UpdateUser(Obj,UserObj.id);
        alert("Account updated succesfully!");
        editUserForm.reset();
        window.location.href = "currentUserPage.html";
    }
}