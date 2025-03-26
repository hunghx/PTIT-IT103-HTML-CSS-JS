// Loop

// for
for (let i = 0; i < 10; i++) {
    // phần thân vong lặp
    console.log(i);

}

// while - do while

let j = 0;
// while(j < 10){
//     console.log(j);
//     j++;
// }

do {
    console.log(j);
    j++;
} while (j < 10);


// break (thoát khỏi vòng lặp), continue(bỏ qua 1 vòng lặp hiện tại) và return(funtion- dừng hàm)
for (let i = 0; i < 10; i++) {
    // phần thân vong lặp
    // bỏ qua các phần tử tại vị trí chắn 
    // if(i%2 ==0){
    //     continue;
    // }

    // khi i =5 thì thoát khỏi vòng lăp
    if (i == 5) {
        break;// thoát khỏi vong flawpj
    }
    console.log("Vòng lặp thứ " + i);

}

function demoFun() {
    // break (thoát khỏi vòng lặp), continue(bỏ qua 1 vòng lặp hiện tại) và return(funtion- dừng hàm)
    for (let i = 0; i < 10; i++) {
        // phần thân vong lặp
        // bỏ qua các phần tử tại vị trí chắn 
        // if(i%2 ==0){
        //     continue;
        // }

        // khi i =5 thì thoát khỏi vòng lăp
        if (i == 5) {
            return;  // dừng hàm
        }
        console.log("Vòng lặp thứ " + i);

    }
}

demoFun();






