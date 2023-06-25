<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $firstName = ucwords(strtolower($_POST['first_name']));
    $lastName = ucfirst(strtolower($_POST['last_name']));
    $birthdate = $_POST['birthdate'];
    $address = ucfirst(strtolower($_POST['address']));
    $city = $_POST['city'];
    $province = $_POST['province'];
    $zipCode = $_POST['zip_code'];
    $email = strtolower($_POST['email']);
   
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirm_password'];

   
    $provinceText = '';
    switch ($province) {
        case '1':
            $provinceText = 'Albay';
            break;
        case '2':
            $provinceText = 'Tarlac';
            break;
        case '3':
            $provinceText = 'Bohol';
            break;
    }

    if ($password !== $confirmPassword) {
        echo "<h3>You cannot proceed to your account because your password does not match</h3>";
        exit;
    }

    if (empty($password)) {
      echo "<h3>You cannot proceed because the password is blank.</h3>";
      exit;
    }

    echo "<h1>Hi $firstName $lastName</h1>";
    echo "<p>Welcome to My System</p>";
    echo "<p>Your birthdate is $birthdate</p>";
    echo "<p>You are currently residing at $address $city $provinceText $zipCode</p>";
    echo "<p>Your email is $email</p>";
   
    if (isset($_POST['subscribe'])) {
      echo "<p>Thanks for subscribing to our latest news!</p>" ;
      
  }
     echo "<br>";
 
     echo "<p>Thank you for registering</p>";
}
?>
