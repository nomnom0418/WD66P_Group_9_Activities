let defaultUserName = "admin"
let defaultPassword = "password"

let myWarning = document.getElementById("head");

function logIn(remove){
  let defaultUserName = "admin"
  let defaultPassword = "password"
  let myUserName = document.getElementById("userName").value;
  let myPassword = document.getElementById("password").value;
  let children = myWarning.getElementsByClassName('myChildren');
  let myPrompt;

  if (myUserName == defaultUserName && myPassword == defaultPassword){
    while (children.length > 0) {
      children[0].parentNode.removeChild(children[0]);
    }
    myPrompt = document.createElement("div");
    myPrompt.classList = "myChildren success";
    myPrompt.textContent = "Succesfully Login";
    myWarning.appendChild(myPrompt);
  }
  else if (myUserName == "" && myPassword == ""){
    while (children.length > 0) {
      children[0].parentNode.removeChild(children[0]);
    }
    myPrompt = document.createElement("div");
    myPrompt.classList = "myChildren warningEmpty";
    myPrompt.textContent = "please input username and password";
    myWarning.appendChild(myPrompt);
  }
  else{
    while (children.length > 0) {
      children[0].parentNode.removeChild(children[0]);
    }  
    myPrompt = document.createElement("div");
    myPrompt.classList = "myChildren warningWrongPassword";
    myPrompt.textContent = "invalid username or password";
    myWarning.appendChild(myPrompt);
  }
  
}

