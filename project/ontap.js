// Variable , Operator, If, Else, Loop 
// từ khóa : var, let, const
let name = "";
// toán tử (toán học: + - * /) ,(so sánh : >,< ,>=,<= , ==,!=, ===, !==), (logic : !, &&, ||), (toán tử 3 ngôi : cond ? value1: value2)

// Câu lệnh điều kiện 
// if(cond){

// }else{

// }

// switch(express){
//     case 1:
//         break;
//     case 2:
//         break;
//     case 3:
//         break;
//     default:
//         break;
// }


// Loop
// for(let i=0; i<100; i++){

// }

// while(cond){

// }

// do{

// }while(cond);

// Array , Function, Object , ArrayMethod
// Array : index, element
// let element = arrayName[index];
// arrayName[index] = newValue;

// duyệt mảng 
// for(let i=0; i<arrayName.length; i++){
//     // làm việc với tưng phần tử
//     let element = arrayName[i];
// }

// forin, forof
//Function : có 3 cách để tạo hàm
// (function selfCall(){
//     console.log("hàm tự gọi");
// })();

const arrow = () => {
    console.log("Đây là arrow function");
    return 1;
}
functionName();
function functionName() {
    console.log("đây là declaration duntion");
    let rs = arrow();
    console.log(rs);
}

const expression = function () {
    console.log("đây là expression function");
}

// tham số/ đối số : tham trị và tham chiếu
a = [100];

function changeVariable(b) {
    b[0] = 10;
}
changeVariable(a); // truyền đối cho tham số b giá trị là biến a
console.log(a);


//Object : thuộc tính/ phuong thức
// objName.propertyName;
// objName.methodName();

//khai bao object 
let objName = {
    // thuộc tính 
    name: "Nguyen",
    age: 18,
    // phương thức
    gotoSchool: () => {
        console.log("đi học");
    }
}


// thêm thuộc tính cho obj
objName.sex = false;
console.log(objName);
// es6 : destructoring : phá vỡ cấu trúc 
// objName = {...objName,phone:"0938975843"}
// console.log(objName);

let array = [9, 2, 8, 4];
// array = [6,...array];
// console.log(array);


// ArrayMethod : foreach, map, filter, reduce, every, some, find, findIndex : higher order function : nhận vao tham số là các callbackfuntion
let check = array.findIndex((el) => el % 2 == 0);
console.log(check);

// DOM : API dùng để tương tác HTML thông qua JS : oop : datatype

// truy vấn phana tử (element/ node)
// HTMTElement/ HTMLInputElement / HTMLFormElement
const input = document.getElementById("input");
// document.getElementsByClassName();
// document.getElementsByTagName();


// document.querySelector();
// document.querySelectorAll();



// document.getElementById("a").addEventListener("click", function(e){
//     e.preventDefault();
// })


// thao tác với các thuộc tính và phương thúc của element : classList, style, các thuộc tính đặc biệt của từng nhom thẻ
// input.onclick = function(){
//     console.log("abc");
//     input.value= "xyz";
//     input.type="date";
// };


// dom - event: phím (key up/down/ press) , chuột (click,dbclick, mouse ),  con lăn(scroll)
// function handleInput(){
//     console.log("On input");
// }

// input.ondblclick = handleInput;

// input.addEventListener("click", handleInput);


// browser storage : local / session
// // kiểu dữ liệu lưu trữ là JSON : String
// localStorage.getItem("key");
// localStorage.setItem("key", value);
// localStorage.removeItem("key");
// localStorage.clear();



function deleteStudent(id) {
    // Tìm chỉ số của phần tử cần xóa
    const index = students.findIndex(stu => stu.id === id);

    // Nếu tìm thấy phần tử, xóa nó
    if (index !== -1) {
        students.splice(index, 1); // Xóa 1 phần tử tại vị trí index
    }
}

