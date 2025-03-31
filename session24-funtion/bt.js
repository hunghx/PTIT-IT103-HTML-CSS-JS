/*
            ---------------Menu----------------
            1. Hiển thi danh sách học sinh
            2. Thêm mới học sinh
            3. Cập nhật tên học sinh
            4. Xóa học sinh
            5. Tìm kiếm theo tên
            6. Sắp xếp theo tên A-Z / Z-A 
            7. Thoát
            ------------------------------------


*/

// Phân tích 
// menu chức năng : mỗi chức năng là 1 funtion

// điều hướng menu : switch case 

// dữ liệu :mảng các tên của học sinh 
let studentNameArray = ["Phan Trung Kiên", "Hồ Lê Anh Đào", "Phan Đình Nghị"];
// xây luồng điều hướng menu
while (true) {
    alert(`---------------Menu----------------
            1. Hiển thi danh sách học sinh
            2. Thêm mới học sinh
            3. Cập nhật tên học sinh
            4. Xóa học sinh
            5. Tìm kiếm theo tên
            6. Sắp xếp theo tên A-Z / Z-A 
            7. Thoát
            ------------------------------------`);
    let choice = Number(prompt("Nhập lựa chọn"))
    switch (choice) {
        case 1:
            // hiển thị
            showListStudent(studentNameArray);
            break;
        case 2:
            // Thêm mới
            addStudent();
            break;
        case 3:
            // Cập nhật
            updateStudent();
            break;``
        case 4:
            // Xóa
            deleteStudent();
            break;
        case 5:
            // tìm kiếm
            searchStudent();
            break;
        case 6:
            // Sắp xếp
            sortStudent();
            break;
        case 7:
            // Thoát
            break;
        default:
            alert("Vui lòng nhập số từ 1 đến 7");
            break;
    }
    if (choice == 7) {
        break;
    }
}

// Hàm hiển thị danh sách tên sinh viên
function showListStudent(list) {
    if (list.length == 0) {
        alert("Danh sách trống");
        return;
    }
    // let text = "";
    // for (let i = 0; i < list.length; i++) {
    //     text += `${i + 1}. ${list[i]}\n`
    // }
    // array method
    let text = list.reduce((stu, idx)=>text+`${idx + 1}. ${stu}\n`,"");
    alert(text)
}

// Hàm tạo mới sinh viên
function addStudent(){
    let n = Number(prompt("Nhập số lượng sinh viên muốn thêm"));
    if(n <= 0){
        alert("Vui lòng nhập số lượng sinh viên lơn hơn 0");
        return;
    }

    for(let i = 1; i<=n ; i++){
        alert("Nhập thông tin cho sinh viên thứ "+i)
        let name = prompt("Nhập tên cho sinh viên");
        // lưu tên vào mảng 
        studentNameArray.push(name)
    }

    alert("Thêm sinh viên thành công")
}

// cập nhật 
function updateStudent(){
    // nhập vị trí cần sửa 
    let index = Number(prompt("Nhập vị trí cần sửa"));
    if(index <=0 || index > studentNameArray.length){
        alert("Vị trí không hợp lệ");
        return;
    }
    alert("Thông tin sinh viên cần sửa : "+studentNameArray[index-1]);
    let newName = prompt("Nhập tên mới");
    studentNameArray[index-1] = newName;

    alert("Cập nhật thành công");
}

// Xóa
function deleteStudent(){
    // nhập vị trí cần sửa 
    let index = Number(prompt("Nhập vị trí cần xóa"));
    if(index <=0 || index > studentNameArray.length){
        alert("Vị trí không hợp lệ");
        return;
    }
    let confirmDelete =confirm("Bạn có chắc chắn muốn xóa sinh viên "+studentNameArray[index-1]);
    if(confirmDelete){
        // lọc các sinh viên ko bị xóa
        // let afterDeleted = [];
        // for(let i = 0; i < studentNameArray.length; i++){
        //     if(i!= index-1){
        //         afterDeleted.push(studentNameArray[i])
        //     }
        // }
        // studentNameArray = afterDeleted;
        studentNameArray = studentNameArray.filter((_,idx)=> idx != index-1);
        alert("Xóa sinh viên thành công");
    }
}


// tìm kiếm tương đối  
function searchStudent(){
    let searchName = prompt("Nhập từ khóa tìm kiếm")
    // let arraySearch = [];
    // for(let i =0; i< studentNameArray.length; i++){
    //     if(studentNameArray[i].toLowerCase().includes(searchName.toLowerCase())){
    //         arraySearch.push(studentNameArray[i]);
    //     }
    // }

    // filter
    let arraySearch= studentNameArray.filter(stu=> stu.toLowerCase().includes(searchName.toLowerCase()));
    showListStudent(arraySearch);
}


// sort 
function sortStudent(){
    alert(`-------------Chọn thứ tự sắp xếp--------------
        1. Tên A-Z
        2. Tên Z-A
        -------------------------------`);
    let choiceSort = Number(prompt("Nhập lựa chọn"));
    if(choiceSort == 1){
        // thuật toán 
        // for(let i = 0 ; i< studentNameArray.length-1; i++){
        //     for(let j = 0; j< studentNameArray.length -i -1; j++){
        //         if(studentNameArray[j] > studentNameArray[j+1]){
        //             let temp = studentNameArray[j];
        //             studentNameArray[j] = studentNameArray[j+1];
        //             studentNameArray[j+1] = temp;
        //         }
        //     }
        // }
        studentNameArray.sort((a,b)=>{
            if(a>b) return 1;
            if(a<b) return -1;
            return 0;
        })
    }

    if(choiceSort == 2){
        // for(let i = 0 ; i< studentNameArray.length-1; i++){
        //     for(let j = 0; j< studentNameArray.length -i -1; j++){
        //         if(studentNameArray[j] < studentNameArray[j+1]){
        //             let temp = studentNameArray[j];
        //             studentNameArray[j] = studentNameArray[j+1];
        //             studentNameArray[j+1] = temp;
        //         }
        //     }
        // }
        studentNameArray.sort((a,b)=>{
            if(a>b) return -1;
            if(a<b) return 1;
            return 0;
        })
    }

}
