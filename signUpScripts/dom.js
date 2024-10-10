import { GetUsersArray , AddNewUser } from "./api.js";

const signUpForm = document.querySelector('.signUpForm');

let Users = await GetUsersArray();

signUpForm.onsubmit=(event)=>{
    event.preventDefault();
    if(signUpForm.firstname.value.trim()=="" || signUpForm.phone.value.trim()=="" || signUpForm.email.value.trim()=="" || signUpForm.avatar.value.trim()=="" || signUpForm.password.value.trim()=="" || signUpForm.confirmpassword.value.trim()==""){
        alert("Please fill all fields!");
    }
    else if(signUpForm.password.value!=signUpForm.confirmpassword.value){
        alert("Passwords don't match!");
    }
    else if(Users.filter((e,i)=>e.phoneNumber==signUpForm.phone.value || e.email==signUpForm.email.value).length){
        alert("Phone number or email already taken!");
    }
    else{
        const newUser = {
            firstName: signUpForm.firstname.value.trim(),
            lastName: signUpForm.lastname.value.trim(),
            phoneNumber: signUpForm.phone.value.trim(),
            email: signUpForm.email.value.trim(),
            avatar: signUpForm.avatar.value.trim(),
            password: btoa(signUpForm.password.value),
            bio: "",
            lsMessages:[],
            createdAt: new Date(Date.now()).toLocaleString()
        };
        AddNewUser(newUser);
        alert("Registrated succesfully!");
        signUpForm.reset();
        window.location.href="index.html";
    }
}