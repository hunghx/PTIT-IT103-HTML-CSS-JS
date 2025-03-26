//  sử dụng window : prompt, confirm, alert 
// Sử dụng mảng để thực hiện các thao tác cơ bản : CRUD
// Sử dụng while và switch để tọa menu

let array = [2, 4, 6, 8, 10];


while (true) {
    alert("-----------------Menu--------------------\n" +
        "1. Thêm số vào mảng\n" +
        "2. Xoá số khoi mảng\n" +
        "3. Tìm kiếm số trong mảng\n" +
        "4. Hiển thị mảng\n" +
        "5. Chỉnh sửa giá trị theo vị trí\n" +
        "0. Thoát\n" +
        "--------------------------------------------");

    let choice = Number(prompt("Mời bạn nhập chức năng 0-5 :"));
    switch (choice) {
        case 1:
            // thêm mới
            let value = Number(prompt("Nhập giá trị cần thêm"));
            array.push(value);
            alert("Thêm mới thành công");
            break;
        case 2:
            // xoá
            let index = Number(prompt("Nhập vị trí cần xóa"))
            if(index < 0 || index >= array.length){
                alert("Vị trí không hợp lệ")
                break;
            }
            let arrayAtferDelete = [];
            for(let i = 0; i < array.length; i++){
                if(i!=index){
                    arrayAtferDelete.push(array[i]);
                }
            }
            array = arrayAtferDelete;
            alert("Xóa thành công");
            break;
        case 3:
            // tìm kiếm
            let searchValue = Number(prompt("Nhập vào giá trị tìm kiếm"))
            break;
        case 4:
            // hiển thị
            if(array.length == 0){
                alert("Danh sách trống")
            }else{
                let text="";
                for(let i=0; i<array.length; i++){
                    text += `${i+1}- Giá trị = ${array[i]}\n`;
                }
                alert(text);
            }
            break;
        case 5:
            // chỉnh sửa
            array[1] = 100;
            break;
        case 0:
            alert("Bạn đã thoát chương trình");
            break;
        default:
            alert("Vui lòng nhập số từ 0 đến 5");
            break;

    }
    if (choice == 0) {
        break;
    }

}
