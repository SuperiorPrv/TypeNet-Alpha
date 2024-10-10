import { GetUsersArray } from "./api.js";

const signInForm = document.querySelector('.signInForm');

let Users = await GetUsersArray();

signInForm.onsubmit=(event)=>{
    event.preventDefault();
    if(signInForm.email.value.trim()=="" || signInForm.password.value==""){
        alert("Please fill all fields!");
    }
    else{
        let cnt=0;
        Users.forEach((e,i) => {
            if(e.email == signInForm.email.value.trim() || e.firstName == signInForm.email.value.trim() || e.phone == signInForm.email.value.trim()){
                cnt++;
                if(atob(e.password) == signInForm.password.value){
                    localStorage.setItem('CurrentUserID', e.id);
                    window.location.href = "mainPage.html";
                    return;
                }
                else{
                    alert("Wrong password!");
                    signInForm.reset();
                    return;
                }
            }
        });
        if(cnt==0){
            alert("Wrong authorization data!");
            signInForm.reset();
        }
    }
}