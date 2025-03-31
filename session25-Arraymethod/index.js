

function children(a){
    console.log("a = " +a );
}

function parent(fn){ // parent gọi là higher order function
    fn();
}

parent(children);


// Array method 
// foreach : duyệt qua lần lượt từng phần tử


let array = ["apple", "banana", "cherry"];

array.forEach(function(item,index,arr){
    console.log("item ", item);
    console.log("index ", index);
    console.log("arr ", arr);
})

array.forEach((item, idx)=>{
   
})


// map 
// bài toán , chuyển tất cả thành chữ hoa,
// chuyển tất cả các phần tử thành số lượng chữ cái mà nó chứa
let newArray = array.map((value)=>{return value.toUpperCase()})
console.log("newArray ", newArray);
let newCountArray = array.map((value)=>{return value.length})
console.log("newCountArray ", newCountArray);

// filter : lọc theo điều kiện
// lọc tất cả những phần tử có chứa chữ a
let filterArray = array.filter((value)=>{return value.includes("a")})
console.log(filterArray);


// reduce : tính giá trị tích lũy 
// nối chuỗi các phần tử lại với nhau 
let text = array.reduce((prevous, item, index, arr)=>{
    return prevous+item;
});


// some , every 

let checkExist = array.some((value)=> value.includes("a"))
let checkExists = array.every((value)=> value.includes("a"))
console.log(checkExist, checkExists);


// sort : sắp xếp theo độ dài giảm dân
let sortArray = array.sort((a,b)=>{
    //return về 0, >0, <0
    // if(a.length < b.length) return 1;
    // if(a.length > b.length) return -1;
    // return 0;
    return b.length - a.length;

    // các kiểu cơ bản cần so sánh như ntn 
    // number : phép -
    // string : if : > , < 

 })
console.log(array); // thay đổi tham chiếu luôn
console.log(sortArray); // trả về mảng mới sau khi sắp xếp
 





 








