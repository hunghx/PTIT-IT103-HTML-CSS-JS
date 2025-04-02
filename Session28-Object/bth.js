// Quản lí đối tượng Sinh viên 
// Menu chức năng 
/*
1. Hiển thị danh sách
2. Thêm mới
3. Cập nhật thông tin
4. Xóa 
**/

// Phân tích bài toán 
// Sinh viên : ID, Name, sex, Dob, phone, email, status
// Mảng sinh viên 

let students = [
    {id: "SV001",name : "Nguyễn Văn A",sex: true, dob: "11/10/2015", phone: "09347654454",email:"anv@gmail.com",status: 1},
    {id: "SV002",name : "Nguyễn Văn B",sex: true, dob: "12/10/2015", phone: "09347653454",email:"bnv@gmail.com",status: 2},
    {id: "SV003",name : "Nguyễn Văn C",sex: true, dob: "13/10/2015", phone: "09347664654",email:"cnv@gmail.com",status: 1}
];
let statusName = ["Đang theo học","Nghỉ học","Bảo lưu","Tốt nghiệp"]

console.log(students);

console.log(students[0].name);

const displayStudentList = (studentArray)=>{
    studentArray.forEach(stu =>{
        console.log(`ID: ${stu.id} - Name: ${stu.name} - Email: ${stu.email} - Dob: ${stu.dob} - Sex : ${stu.sex?'Nam':'Nữ'} - Phone: ${stu.phone} - Status: ${getStatusByIndex(stu.status)} `);
    })
}

const getStatusByIndex = (index)=>{
    return statusName[index];
}

displayStudentList(students);


// Thêm mới  
const addStudent =()=>{
    // nhập dữ liệu 
    let id = prompt("Nhập id sinh viên:");
    let name = prompt("Nhập tên sinh viên:");
    let sex = confirm("Lựa chọn giới tính: Nam (true) / Nữ (false)");
    let dob = prompt("Nhập ngày sinh (dd/mm/yyyy):");
    let phone = prompt("Nhập số điện thoại:");
    let email = prompt("Nhập email:");
    let status = prompt("Nhập trạng thái: 0-Đang theo học, 1-Nghỉ học, 2-Bảo lưu, 3-Tốt nghiệp:");
    // tạo ra đối tượng 
    let newStudent={
        id,
        name,
        sex,
        dob,
        phone,
        email,
        status
    }
    // thêm dữ liệu vào mảng
    students.push(newStudent);

    // es6 
    // students = [...students, newStudent];
}


// cập nhật thông tin 
const editStudent =()=>{
    // nhập id cần sửa 
    // hiển thị thị thông tin cũ
    let indexFind = indexByStudentId("Nhập mã sinh viên cần sửa");
    // nếu tìm được thì indexFind != -1 
    if(indexFind!= -1){
        // tìm thấy
        // nhập thông tin mới
        // lưu lại thông tin
        students[indexFind].dob = prompt("Nhập thông tin mới")

    }else{
        // ko tìm thấy 
        console.error("ko tìm thấy id");
    }
    
}

// Xóa theo id 
const deleteStudent=()=>{
    // nhập id
    let indexFind = indexByStudentId("Nhập mã sinh viên cần xóa");
    // hiện thị thông tin cũ
    
    if(indexFind!= -1){
        // xáo nhận xóa
        let confirm = window.confirm(`Bạn có chắc chắn muốn xóa sinh viên : ${students[indexFind].name} không ??`)
        if(confirm){
            students = students.filter((_,index)=> index != indexFind)
        }
    }else{
        // ko tìm thấy 
        console.error("ko tìm thấy id");
    }
}

const indexByStudentId=(title)=>{
    let id = prompt(title);
    // hiển thị thị thông tin cũ
    let indexFind =students.findIndex(stu => stu.id == id);
    console.log("Index find: " + indexFind);
    
    return indexFind;

}