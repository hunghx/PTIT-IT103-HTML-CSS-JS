// Khai báo mảng 
const arrayName = [1,2,3,4,5]; // biến dạng 

arrayName[0]= 100;

const arrayCopy = arrayName;

console.log("type of arraay : " +typeof arrayName);

// Cách lưu trữ caccs biến object
// giá trị object lưu trong vùng nhớ Heap
// biến arrayName lưu địa chỉ tham chiếu trong vùng nhớ Stack để lấy giá trị lưu tron Heap



// truy xuất thành phần : cơ bản
// truy xuất thông qua vị tri 
// arrayCopy[index

// truy xuất thông qua phương thức (OOP)
arrayCopy.at(1);
arrayCopy.concat([7,8,9,10])

// Các thao tác đặc biệt : CRUD
arrayCopy.push(1) ; // thêm vào cuối
arrayCopy.unshift(5); // thêm vào đầu 

arrayCopy.pop(); // xóa phần tử cuối
arrayCopy.shift(); // xóa phần tử đầu


// R : vòng lặp để duyệt các phần tử 
// for, for in , for of
// for (const key in arrayCopy) {
//     console.log("key :", key);
//     console.log("value :", arrayCopy[key]); // bài 29
// }


// for(let item of arrayCopy) {
//   console.log("value :", item);
  
// }
console.clear();


// forEach -> array method 

arrayCopy.forEach((item, index, array)=>{
    // array chỉ có thể đọc
    console.log("item :", item);
    console.log("index :", index);
    console.log("array :", array);
    
}); // arrow function : (danh sách tham số)=>{ // logic code}


// Các phương thức nâng cáo : map, filter, reduce,forEach ...

// Bài toán : biến đổi mảng ban đầu thành các chuỗi có dạng  "Number "+item

// let arrayTranfer=[];
// for(let i=0; i< arrayName.length;i++){
//     let string = `Number ${arrayName[i]}`;
//     arrayTranfer.push(string);
// }

// console.log("arrayTransfer: " + arrayTranfer);

// let arrayTranssfer2 = arrayName.map((item, index, array)=>{
//    // phải trả về giá trị cần biến đổi
//     return  `Number ${item}`;
// })

// let arrayTranssfer3 = arrayName.map(item=>`Number ${item}`);


// Lọc các số chia hết cho 3 trong mảng
let arrayFilter = [];
for(let i=0; i< arrayName.length;i++){
    if(arrayName[i]%3 ==0){
        arrayFilter.push(arrayName[i]);
    }
}

let arrayFilter2 = arrayName.filter((item, index, array)=>{
    // trả về điều kiện đọc
    return item%3 == 0;
})

let arrayFilter3 = arrayName.filter(item=> item%3==0);

// phương thức trả về giá trị tích lũy: reduce
// bài toán tính tổng 
let sum = 0;
for(let i=0; i< arrayName.length;i++){
    sum+= arrayName[i];
}

console.log("sum : ",sum);
let sum2 = arrayName.reduce((temp,item)=>temp + item, 0);
console.log("sum2 : ",sum2);



 

