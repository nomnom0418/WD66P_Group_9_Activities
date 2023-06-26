<?php
$firstName = ucfirst($_POST["firstName"]);
$lastName = ucfirst($_POST["lastName"]);
$birthday = $_POST["birthday"];
$address = $_POST["address"];
$province = $_POST["province"];
$password = $_POST["password"];
$confirmPassword = $_POST["confirmPassword"];
$email = strtolower($_POST["email"]);
$b = "<br>";

if($password != $confirmPassword){
  echo "You cannnot proceed to your account because your password do not match";
}else{
  echo "hi  $firstName $lastName";
  echo $b;
  echo "Welcome to My System";
  echo $b;
  echo "Your birthday is $birthday";
  echo $b;
  echo "You are currently residing at $address $province";
  echo $b;
  echo "Your email is $email";
  echo $b;
  echo $b;
  echo "Thank you for registering";
}