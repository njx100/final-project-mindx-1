import user from "./userData.js";

console.log(user[0].userName);
// Lấy thông tin người dùng từ localStorage (nếu tồn tại)
// const users = JSON.parse(localStorage.getItem("users")) || [];

// function signIn() {
//   event.preventDefault();
//   const username = document.getElementById("signIn-username").value;
//   const password = document.getElementById("signIn-password").value;

//   // Kiểm tra thông tin đăng nhập
//   const user = users.find(
//     (user) => user.username === username && user.password === password
//   );

//   if (user == null) {
//     alert("Vui lòng nhập thông tin đăng nhập");
//     // Xử lý sau khi đăng nhập thành công
//   } else if (user) {
//     alert("Đăng nhập thành công!");
//     window.location.href = "abc.html";
//   } else {
//     alert("Sai tên đăng nhập hoặc mật khẩu!");
//   }
// }

// // Lấy thông tin người dùng từ localStorage (nếu tồn tại)
// function signUp() {
//   event.preventDefault();
//   const username = document.getElementById("signUp-username").value;
//   const password = document.getElementById("signUp-password").value;

//   // Kiểm tra xem người dùng đã tồn tại chưa
//   const existingUser = users.find((user) => user.username === username);

//   if (existingUser) {
//     alert("Tên đăng nhập đã tồn tại!");
//   } else {
//     // Thêm người dùng mới vào danh sách
//     users.push({ username, password });
//     localStorage.setItem("users", JSON.stringify(users));

//     alert("Đăng ký thành công!");
//     // Xử lý sau khi đăng ký thành công
//   }
// }
