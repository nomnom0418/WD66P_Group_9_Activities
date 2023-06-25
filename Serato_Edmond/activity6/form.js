let myWarning = document.getElementById("head");
let children = myWarning.getElementsByClassName('myChildren');
let myPrompt;
function logIn(){
  let defaultUserName = "admin"
  let defaultPassword = "password"
  let myUserName = document.getElementById("userName").value;
  let myPassword = document.getElementById("password").value;


  if (myUserName == defaultUserName && myPassword == defaultPassword){
    remove()
    myPrompt = document.createElement("div");
    myPrompt.classList = "myChildren success";
    myPrompt.textContent = "Succesfully Login";
    myWarning.appendChild(myPrompt);
  }
  else if (myUserName == "" && myPassword == ""){
    remove()
    myPrompt = document.createElement("div");
    myPrompt.classList = "myChildren warningEmpty";
    myPrompt.textContent = "please input username and password";
    myWarning.appendChild(myPrompt);
  }
  else{
    remove()
    myPrompt = document.createElement("div");
    myPrompt.classList = "myChildren warningWrongPassword";
    myPrompt.textContent = "invalid username or password";
    myWarning.appendChild(myPrompt);
  }
  
}
function remove(){
  while (children.length > 0) {
    children[0].parentNode.removeChild(children[0]);
  }  
}
