// 
// các biến cần thiết  fk-1, fk-2, fk 
// f0 = 1, f1 =1 ; fk = f(k-1)+f(k-2) (k>=2)

let f0= 1; let f1= 1;

// người dùng nhập n
let n = +prompt("Hãy nhập 1 số nguyên dương");

// kiểm tra giá trị n
if(n<0){
    // ko hợp lệ
}else if(n == 0 || n == 1){
    // giá trị fibonacci thứ n = 1
    console.log(`fibonaci(${n}) là 1`);
}else{
    let fk,fk_1, fk_2;
    fk_1 = f1;
    fk_2 = f0;
    for(let i = 0; i< n-1; i++){
        fk = fk_1+fk_2;
        fk_2 = fk_1;
        fk_1 = fk;
    }
   // giá trị só fibonaci thu n là fk sau khi kết thúc vòng lặp
   console.log(`fibonaci(${n}) là ${fk}`);
    
}