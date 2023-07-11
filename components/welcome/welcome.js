const userName = "Dang"; // JSON.parse(localStorage.getItem("user_name"));
const welcomeEl = document.getElementById("welcome");

welcomeEl.innerText = `Hi ${userName}, Welcome back!`;
