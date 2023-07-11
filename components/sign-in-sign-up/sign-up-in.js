// Sign Up function
function signUp() {
  let emailInput = document.getElementById("signupEmail");
  let passwordInput = document.getElementById("signupPassword");

  let email = emailInput.value;
  let password = passwordInput.value;

  if (email && password) {
    // Retrieve user data from localStorage
    let users = JSON.parse(localStorage.getItem("dataUser")) || [];

    // Check if user already exists
    let existingUser = users.find(function (user) {
      return user.email === email;
    });

    if (existingUser) {
      alert("User already exists!");
    } else {
      let user = {
        email: email,
        password: password,
      };

      // Add new user to the array
      users.push(user);

      // Save updated user data to localStorage
      localStorage.setItem("dataUser", JSON.stringify(users));

      // Clear input fields
      emailInput.value = "";
      passwordInput.value = "";

      // Optionally, display a success message or redirect to another page
      alert("Sign Up successful!");
    }
  } else {
    alert("Please fill in all the fields!");
  }
}

// Sign In function
function signIn() {
  let emailInput = document.getElementById("signInEmail");
  let passwordInput = document.getElementById("signInPassword");

  let email = emailInput.value;
  let password = passwordInput.value;

  if (email && password) {
    // Retrieve user data from localStorage
    let users = JSON.parse(localStorage.getItem("dataUser")) || [];

    // Check if user exists
    let user = users.find(function (user) {
      return user.email === email && user.password === password;
    });

    if (user) {
      // Clear input fields
      emailInput.value = "";
      passwordInput.value = "";

      // Optionally, display a success message or redirect to another page
      alert("Sign In successful!");
      window.location.href = "./index.html";
    } else {
      alert("Invalid email or password!");
    }
  } else {
    alert("Please fill in all the fields!");
  }
}
