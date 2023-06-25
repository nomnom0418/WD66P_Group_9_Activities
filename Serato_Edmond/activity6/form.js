let defaultUserName = "admin"
let defaultPassword = "password"



function logIn(){
  let defaultUserName = "admin"
  let defaultPassword = "password"
  let myUserName = document.getElementById("userName").value;
  let myPassword = document.getElementById("password").value;
  let myWarning = document.getElementById("head");
  let myPrompt;

    if (myUserName == defaultUserName && myPassword == defaultPassword){
    myPrompt = document.createElement("div");
    myPrompt.id = "myChilden";
    myPrompt.textContent = "Succesfully Login";
    myWarning.appendChild(myPrompt);
    }
    else{
    myPrompt = document.createElement("div");
    myPrompt.id = "myChilden";
    myPrompt.textContent = "invalid username or password";
    myWarning.appendChild(myPrompt);
    }
}
