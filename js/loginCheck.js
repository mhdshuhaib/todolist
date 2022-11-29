var username=document.getElementById("username");
var password=document.getElementById("password");

function login(){
    console.log("user name"+ username.value);
    console.log("password"+ password.value);
    if ( username.value == "admin" && password.value == 12345){
        console.log("success");
        return true;
    }else{
        console.log("fail");
        return false;
    }
}