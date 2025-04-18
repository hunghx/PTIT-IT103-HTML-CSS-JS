// CHức năng của products admin
let products = JSON.parse(localStorage.getItem("products")) || [];

// local storage
// localStorage.setItem("products", JSON.stringify(products)); // thêm 1 khóa và giá trị vào local trình duyêht
// localStorage.getItem("products");
const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
// làm tính năng 
let countProductPerPage = 1;
let currentPage = 1;

let totalPages ;

const paginationProduct = (array,page) => {
    totalPages = Math.ceil(array.length / countProductPerPage);
    let startIndex = page * countProductPerPage;
    let endIndex = startIndex + countProductPerPage;
    return array.slice(startIndex, endIndex);
}




const displayListProduct = (array) => {
    // lặp qua lần lượt từng sp va nối thành 1 chuối
    // let html = "";
    // products.forEach((pro,index)=>{
    //     html+=`  <tr>
    //                     <th scope="row">${index+1}</th>
    //                     <td>${pro.id}</td>
    //                     <td>${pro.name}</td>
    //                     <td> <img src="${pro.imgUrl}" alt="${pro.name}" width="200" height="100" style="object-fit: cover;"></td>
    //                     <td>${pro.description}</td>
    //                     <td>${USDollar.format(pro.price)}</td>
    //                     <td>${pro.stock}</td>
    //                     <td>${pro.status?"Đang bán":"Ngừng bán"}</td>
    //                     <td><button class="btn btn-warning"><i class="fa-solid fa-comment-pen"></i></button></td>
    //                     <td><button class="btn btn-danger"><i class="fa-solid fa-trash-xmark"></i></button></td>
    //                   </tr>`;
    // })
    let html = array.reduce((temp, pro, index) => temp + `<tr>
                <th scope="row">${index + 1}</th>
                <td>${pro.id}</td>
                <td>${pro.name}</td>
                <td> <img src="${pro.imgUrl}" alt="${pro.name}" width="200" height="100" style="object-fit: cover;"></td>
                <td>${pro.description}</td>
                <td>${USDollar.format(pro.price)}</td>
                <td>${pro.stock}</td>
                <td>${pro.status ? "Đang bán" : "Ngừng bán"}</td>
                <td><button class="btn btn-warning"><i class="fa-solid fa-comment-pen"></i></button></td>
                <td><button onclick="deleteProductById('${pro.id}')" class="btn btn-danger"><i class="fa-solid fa-trash-xmark"></i></button></td>
            </tr>`
        , "")


    // sử dụng innerHTML để hiển thị ra dom
    let tbody = document.getElementById("tbody");
    if (tbody) {
        tbody.innerHTML = html;
    }
    /**
     <li class="page-item disabled">
            <a class="page-link">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item active" aria-current="page">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
    */

    // hiển thị chân trang
    
    let pageHTML = new Array(totalPages).fill(1)
        .reduce((temp, _, index) => temp + `<li class="page-item ${currentPage == index ? 'active' : ''}" onclick="goToPage(${index})"><a class="page-link" href="#">${index + 1}</a></li>`, "")
    pageHTML = ` <li class="page-item ${currentPage == 0?'disabled':''}" onclick="prevPage()">
            <a class="page-link">Previous</a>
          </li>
         ${pageHTML}
          <li class="page-item ${currentPage == totalPages-1?'disabled':''}" onclick="nextPage()">
            <a class="page-link" href="#">Next</a>
          </li>`;
    document.getElementById("list-pagination").innerHTML = pageHTML;
}
// gọi và thực thi hàm
displayListProduct(paginationProduct(products,currentPage));

// Tạo hàm di chuyển trang khi onl\click
const goToPage=(page)=>{
    currentPage = page;
    displayListProduct(paginationProduct(currentPage));
}

const nextPage=()=>{
    if(currentPage<totalPages-1){
    currentPage++;
    displayListProduct(paginationProduct(currentPage));
    }
}
const prevPage=()=>{
    if(currentPage>0){
    currentPage--;
    displayListProduct(paginationProduct(currentPage));
    }
}




const deleteProductById = (id) => {
    // confirm
    if (!confirm('Bạn có chắc chắn muốn xóa không')) {
        return;
    }
    // lọc các sản phẩm ko bị xóa và gán vào mảng ban đầu
    products = products.filter(pro => pro.id != id);

    // lưu vào storage :
    localStorage.setItem("products", JSON.stringify(products));
    // hiển thị lại danh sách sau khi xóa
    displayListProduct(products);
}


// Khi thực hiện thêm mới :
// Lấy toàn bộ dữ liệu cảu ô input 
// Kiểm tra xác thực dữ liệu 
// nếu hợp lệ thì thêm mới vào mảng
// nếu ko hợp lệ thì in ra lỗi


const handleAddProduct = () => {
    let product = validateInputProduct();
    if (product) {
        // thành công nhưng sẽ load lại trang và tải lại dữu liêu : Browser Storage
        products.push(product);
        displayListProduct(products);
        let myModal = document.getElementById('modal-add');
        let modal = bootstrap.Modal.getInstance(myModal)
        modal.hide();

        // lưu vào storage :
        // localStorage.setItem("products", JSON.stringify(products));

        // location.href = "/admin/product/list-product.html";

    }

}

const validateInputProduct = () => {
    // id ko đc để trống
    // id phải bắt đầu bằng chữ P và có 4 kí tự số
    // id ko đc trừng lặp
    let regex_id = /P[0-9]{4}/g; let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let imgUrl = document.getElementById("imgUrl").value;
    let description = document.getElementById("description").value;
    let price = document.getElementById("price").value;
    let stock = document.getElementById("stock").value;
    let flag = false;
    if (id.trim() == "") {
        document.getElementById("error_id").innerText = "Không được để trống";
    } else if (!regex_id.test(id)) {
        document.getElementById("error_id").innerText = "Không đúng định dạng , phải bắt đàu bằng chữ P và có 4 kí tự số";
    } else if (products.some(p => p.id === id)) {
        document.getElementById("error_id").innerText = "ID đã tồn tại, vui lòng nhập id khác";
    } else {
        document.getElementById("error_id").innerText = "";
        flag = true;
    }

    return flag ? { id, name, description, price, imgUrl, stock } : null;
}

const searchProduct = () => {
    // lấy giá trị người dùng nhập vào
    let keyword = document.getElementById("keyword").value.toLocaleLowerCase();
    // lọc dữ liệu
    let filterArray = products.filter(pro => pro.name.toLocaleLowerCase().includes(keyword) || pro.description.toLocaleLowerCase().includes(keyword))
    // in ra màn hình kết quả 
    displayListProduct(filterArray);
}

// Phân trang:
// Thành phần : số lượng phần tử trên trang : productCountPerPage , Trang hiện tại : currentPage

// totalElement = 30 ;
// hiển thị 6 phần tử trên trang : hiển thị trang số 1 : index Start: 0 -> index end: 5
// hiển thị 6 phần tử trên trang : hiển thị trang số 2 : index Start: 6 -> index end: 11
// hiển thị 6 phần tử trên trang : hiển thị trang số 3 : index Start: 12 -> index end: 17
// hiển thị 6 phần tử trên trang : hiển thị trang số 4 : index Start: 18 -> index end: 23
// mối liện hệ giữa vị trí và số trang và số phần tử trên 1 trang
// start = (currentPage-1)*productCountPerPage
// end = start + productCountPerPage;

// slice(start, end);

// tính tổng số trang :
// totalPages : 30 / 5 => 6 Math.cell




// const showFormAdd=()=>{
//     document.getElementById("modal-add").style.display = "block";
// }