// Thao tác với LocalStorage

// ghi dữ liệu vào local
localStorage.setItem("username","sontx");

// lấy ra giá trị 
let value = localStorage.getItem("usernames")
console.log(value);

// Xóa 1 căp key - value
localStorage.removeItem("password");
// Xóa tất cả mọi giá trị
localStorage.clear();

// Cơ chế chuyển đối từ object -> string
// JSON giúp chuyển đổi từ object và string và ngược lại

let arr = [1,2,3,4,5];
localStorage.setItem("arr", JSON.stringify(arr));

let array = JSON.parse(localStorage.getItem("arr"));
array.push(6);
console.log(array);


// Nâng cao : sessionStorage, cookies
// cookies thuộc về khái niệm client-server
// cookies tự dộng được thêm vào request khi gửi dữ liệu lên server

