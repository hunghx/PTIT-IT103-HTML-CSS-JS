// Object 

// Trước ES6 
// object literals
let objName = {
    // thuộc tính 
    name : "Nguyễn Văn A",
    tuổi : 18,
    // phương thức 
    doHomeWork: function(){
        console.log("Đang làm bài tập");
    }
}

// So sánh và array 
let arr = [2,3,4,5]; // khóa trong array có thay đổi đc ko (là các index)
console.log(arr[`1`]);

console.log(objName['tuổi']);

// cách truy xuất thành phần thông qua đối tượng 
console.log(objName.doHomeWork());

// cách 2  sử dụng Class (Lớp) 
// trước es6 khái báo class qua function (tìm hiểu thêm)
// sau es6 trở đi từ khóa class
class Student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    doHomeWork(){
        console.log("Đang làm bt");
    }
    goHome(){
        console.log("Về nhà");
    }
}
console.log(objName);
let student = new Student("Nguyen Van A", 18);
console.log(student);

// thay đổi giá trị 
student.age = 100;
console.log(student.age);

// thêm thuộc tính 
student.phone = "09387824635";
console.log(student);
student.sleeping = ()=>{
    console.log("đang ngu");
}

console.log(student);

student.sleeping();






