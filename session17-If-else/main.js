// xây dựng lại bài quản lí sinh viên với menu chức năng sau :
// 1 đối tượng sinh viên gồm có 4 thông tin : id, name, phone, sex

// 1. Hiển thị danh sách sinh viên gồm các thông tin : mã sv, tên, số điện thoại
// 2. thêm mới sinh viên : nhập vào 4 thông tin và thêm vào mảng
// 3. Chỉnh sửa thông tin sinh viên : nhập vào id sv cần sửa và chỉ cho phép sửa các thông tin ngoại trừ id
// 4. Xóa sinh viên : nhập vào id của SV cần xóa và thực hiện xóa sinh viên đó
// 5. thoát

let students = [
    { id: "SV001", name: "Nguyễn Văn A", phone: "0893846534", sex: true },
    { id: "SV002", name: "Nguyễn Văn B", phone: "0893435535", sex: false },
    { id: "SV003", name: "Nguyễn Văn C", phone: "0893845636", sex: true },
];

let menu = "-------------------Menu----------------\n"
    + "1. Hiển thị danh sách sinh viên\n"
    + "2. Thêm mới sinh viên\n"
    + "3. Chỉnh sửa thông tin sinh viên\n"
    + "4. Xóa sinh viên\n"
    + "5. Thoát\n"
    + "Mời bạn nhập chức năng :";
// hiển thi danh sách
function showStudentList() {
    let studentText = "";
    for (let i = 0; i < students.length; i++) {
        studentText += `${i + 1}. Mã sinh viên : ${students[i].id} - Tên sinh viên : ${students[i].name} - Số điện thoại : ${students[i].phone} - Giới tính : ${students[i].sex ? 'Nam' : 'Nữ'}\n`;
    }
    // hiển thị ra màn hình `
    alert(studentText);
    // shift alt F

}
// thêm mới sinh viên
function addNewStudent() {
    // nhập vào các thông tin id, name, phone, sex
    let id = prompt("Nhập mã sinh viên :");
    let name = prompt("Nhập tên sinh viên :");
    let phone = prompt("Nhập số điện thoại :");
    let sex = confirm("Lựa chọn giới tính : Nam (true) / Nữ (false)"); // chọn đúng hoặc sai
    // tạo 1 dối tượng học sinh
    let newStudent = {id,name,phone, sex};
    // thêm sinh viên vào mảng
    students.push(newStudent);

    alert("thêm thành công sinh viên");
}

// chỉnh sửa thông tin sinh viên
function editStudent() {
    // nhập vào id sinh viên cần sửa
    let idEdit = prompt("Hãy nhập id sinh viên cần sửa");
    let check  = false;
    for (let i = 0; i < students.length; i++) {
        if(students[i].id == idEdit){
            // phần tử cần sửa
            // cho  phép sửa : name, phone, sex
            students[i].name = prompt(`Nhập tên thay thế [ tên cũ là : ${students[i].name}] `);
            students[i].phone = prompt(`Nhập số điện thoại thay thế [số điện thoại cũ là : ${students[i].phone}] `);
            students[i].sex = confirm(`Lựa chọn giới tính thay thế [giới tính cũ là : ${students[i].sex? 'Nam' : 'Nữ'}]`);
            check = true;
            break; // dừng vòng lặp để tránh lặp ko càn thiết
        }
    }
    if(check) {
        alert("Sửa thành công sinh viên");
    }else{
        alert(`Không tồn tại sinh viên với id = ${idEdit}`);
    }
}
// xóa sinh viên
function deleteStudent() {
    // xóa theo id nhập vào 
    let idDelete = prompt("Hãy nhập id sinh viên cần xóa");
    let check  = false;
    let newStudents = [];
    for (let i = 0; i < students.length; i++) {
        if(students[i].id == idDelete){
            check = true;
        }else{
            newStudents.push(students[i]);
        }
    }
    if(check){
        // Xóa thành công
        students = newStudents;
        alert(`Xóa thành công sinh viên ${idDelete}`);
    }else{
        alert(`Không tồn tại sinh viên với id = ${idDelete}`);
    }
}

while (true) {
    let choice = +prompt(menu);
    switch (choice) {
        case 1:
            // Hiển thị danh sách sinh viên
            showStudentList();
            break;
        case 2:
            // Thêm mới sinh viên
            addNewStudent();
            break;
        case 3:
            // Chỉnh sửa thông tin sinh viên
            editStudent();
            break;
        case 4:
            // Xóa sinh viên
            deleteStudent();
            break;
        case 5:
            // Thoát
            break;
        default:
            alert("Vui lòng nhập số từ 1 đến 5");
    }
    if (choice == 5) {
        break;
    }
}