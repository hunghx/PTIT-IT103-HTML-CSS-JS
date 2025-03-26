// // kiểu boolean trong js : true/ false

// // biểu thức điều kiện trong câu lệnh điều kiện
// // JS sẽ cố gắng chuyển biều thức về giá trị dúng sai (truthy/ falsy)

// // falsy có 8 giá trị : 0,-0, 0n, false, null, undefined, "", NaN
// let condition ; // undefined
// if(condition){
//     console.log(condition + " is true");
// }
// // &&, ||, !

// let expression = 1 && "" && 6;
// console.log("expression",expression); // true || false || other (5)
// if(0 && "" && 6){

// }

// // IF... ELSE 

// let cond1 = 6%3==0;
// if(cond1){
//     console.log("5 chia hết cho 3");
//     console.log("kết thúc if");
// }else{
//     console.log("5 ko chia hết cho 3");
// }



// // elseif
// if(cond1){

// }else if(cond2){

// }else{

// }

// // Switch case
// switch(expression){
//     case 1:{
//         let id =10;
//         console.log("1");
//         break;
//     }
//     case 2:{
//         let id =20;
//         console.log("2");
//         break;
//     }
//     default:
//         console.log("other");
//         break;
// }


// // Bài thực hành 
// // if... else
// let salary = Number(window.prompt("Nhập lương của bạn :"));
// if(salary <5000000 ){
//     console.log("0%");
// }else if(salary < 10000000){
//     console.log("5%");
// }else if(salary < 18000000){
//     console.log("10%");
// }else if(salary < 32000000){
//     console.log("15%");
// }else{
//     console.log("20%");
// }

// let exp = salary<5000000?1:(salary<10000000?2:(salary<18000000?3:(salary<32000000?4:5))) ;
// switch(exp){
//     case 1:{
//         console.log("0%");
//         break;
//     }
//     case 2:{
//         console.log("5%");
//         break;
//     }
//     case 3:{
//         console.log("10%");
//         break;
//     }
//     case 4:{
//         console.log("15%");
//         break;
//     }
//     case 5:{
//         console.log("20%");
//         break;
//     }
// }

// Giới thiệu về loop
// For i , for in , for of

// let i = 0 ;
// for( ;   ;  ){
//     if(i < 10){
//     console.log(i);
//     }else{
//         break;
//     }
//     i++;
// }


// while và do while
// let input = -1;
// while(input !=0){
//     input = Number(prompt("Nhập vào 1 số khác 0"))
// }

// Ứng dụng : thiết kế menu chức nănng

/**
 * --------------------Menu--------------------
 * 1. Kiểm tra số nguyên tố
 * 2. Kiểm tra số hoàn hảo
 * 3. Kiểm tra số chính phương
 * 4. Tính số fibonanci thứ n
 * 0. Thoát
 * --------------------------------------------
*/



























