// Cách khai báo 
// Declaration funtion 
function sum(a,b){
    // khối lệnh thực thi
    let sum = a+b;
    console.log(`Tổng của 2 số ${a} + ${b} = ${sum}`);
}

// sử dụng hàm 
sum(3,5);
sum(4,5);
sum(3,7);
sum(6,5);
sum(3,5);

// expression funtion 
let multipy = function(x, y){
    let multi = x*y;
    console.log(`Tích của 2 số ${x} x ${y} = ${multi}`);
}


// Arrow funtion : ()=>{}
let sub = (a,b)=>{
    let rs = a-b;
    console.log(`Hiệu của 2 số ${a} - ${b} = ${rs}`);
}


let subMin = (a,b) =>a-b;


// hàm kiểm tra nguyên tố
// kiểm tra hoàn hảo : các ước của nó ko phải chính nó có tổng  = chính nó

// parameter : n cần kiểm tra
// return : true or false


let checkPrimeNumber = (n)=>{
    if(n<2){
        return false;
    }
    for(let i = 2 ; i*i<= n; i++){
        if(n%i == 0){
            return false;
        }
    }
    return true;
}

// gọi hàm

console.log(checkPrimeNumber(7));
console.log(checkPrimeNumber(12));
console.log(checkPrimeNumber(13));
console.log(checkPrimeNumber(17));
console.log(checkPrimeNumber(19));


// số hoàn hảo
function checkPerfectNumber(n){
    let sum = 0;
    for(let i = 1 ; i<= n/2 ; i++ ){
        if(n%i == 0){
    
            sum += i;
        }
    }
    // if(sum == n){
    //     return true;
    // }
    // return false;
    return sum == n;
}

console.log(checkPerfectNumber(6));

console.log(checkPerfectNumber(28)); // 1,2,4,7,14

console.log(checkPerfectNumber(496));

// Tham chiếu là tham trị

// tham số và đối số 

let a = 10 ;
let b = 3.5;
let arr = [10, 3.5];

console.log(`Gias trị trươc khi swap ${arr[0]} và ${arr[1]}`);
function swap(array){ // array là tham số(parameter)
    let temp = array[0];
    array[0] = array[1];
    array[1] = temp;
}

swap(arr); // x = giá trị của a và y = giá trị của b , arr là đối số (arguments)

console.log(`Gias trị sau khi swap ${arr[0]} và ${arr[1]}`);

