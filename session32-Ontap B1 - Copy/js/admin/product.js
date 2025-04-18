// CHức năng của products admin
// let products = JSON.parse(localStorage.getItem("products")) || [];
// đọc dữ liệu từ local
let products = JSON.parse(localStorage.getItem("products"))||[];

let pagination = document.getElementById("list-pagination");
let tbody = document.getElementById("tbody");
let formSearch = document.getElementById("form-search");
let inputSearch = document.getElementById("keyword");
let direction = document.getElementById("direction");
let by = document.getElementById("sort-by");
let btnUpdate = document.getElementById("btn-update");

let keyword = '';
let currentPage = 0;
let itemPerPage = 4;
let sortDirection="";
let sortBy="ASC";


const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
const changePage = (page) => {
    currentPage = page;
    renderListProduct();
}

const renderPagination = (totalPages) => {
    let pageHTML = new Array(totalPages).fill(1)
        .reduce((temp, _, index) => temp + `<li class="page-item ${currentPage == index ? 'active' : ''}" onclick="changePage(${index})"><a class="page-link" href="#">${index + 1}</a></li>`, "")
    if (currentPage > 0) {
        pageHTML = ` <li class="page-item ${currentPage == 0 ? 'disabled' : ''}" onclick="changePage(${currentPage - 1})">
            <a class="page-link">Previous</a>
          </li>`+pageHTML;
    }
    if (currentPage < totalPages - 1) {
        pageHTML += `<li class="page-item ${currentPage == totalPages - 1 ? 'disabled' : ''}" onclick="changePage(${currentPage + 1})">
            <a class="page-link" href="#">Next</a>
          </li>`;
    }
    pagination.innerHTML = pageHTML;
}
const renderListProduct = () => {
    let start = currentPage * itemPerPage;
    let filterArray = products.filter(pro => pro.name.toLowerCase().includes(keyword));
    //<img src="${pro.imgUrl}" alt="${pro.name}" width="200" height="100" style="object-fit: cover;">
    filterArray = sortProductList(filterArray);
    let html = filterArray.slice(start, start + itemPerPage).reduce((temp, pro, index) => temp + `<tr>
                <th scope="row">${index + 1}</th>
                <td>${pro.id}</td>
                <td>${pro.name}</td>
                <td> </td>
                <td>${pro.description}</td>
                <td>${USDollar.format(pro.price)}</td>
                <td>${pro.stock}</td>
                <td>${pro.status ? "Đang bán" : "Ngừng bán"}</td>
                <td><button class="btn btn-warning" onclick="showProductEditForm('${pro.id}')" data-bs-toggle="modal" data-bs-target="#modal-edit"><i class="fa-solid fa-comment-pen"></i></button></td>
                <td><button onclick="deleteProductById('${pro.id}')" class="btn btn-danger"><i class="fa-solid fa-trash-xmark"></i></button></td>
            </tr>`
        , "")


    // sử dụng innerHTML để hiển thị ra dom
    tbody.innerHTML = html;
    let totalPages = Math.ceil(filterArray.length / itemPerPage);
    renderPagination(totalPages);

}

// tạo hàm hiển thị thông tin cũ
const showProductEditForm=(id)=>{
    let productEdit = products.find(pro=>pro.id == id);
    if(productEdit){
        document.getElementById("id-edit").value = productEdit.id;
        document.getElementById("name-edit").value = productEdit.name;
        document.getElementById("imgUrl-edit").value = productEdit.imgUrl;
        document.getElementById("description-edit").value = productEdit.description;
        document.getElementById("price-edit").value = productEdit.price;
        document.getElementById("stock-edit").value = productEdit.stock;
    } 
}

// lưu lại thông tin chỉnh sưae
const handleUpdateProduct =()=>{
    // lấy toàn bộ thông tin trong ô input ra
    let id = document.getElementById("id-edit").value;
    let name = document.getElementById("name-edit").value;
    let imgUrl = document.getElementById("imgUrl-edit").value;
    let description = document.getElementById("description-edit").value;
    let price = document.getElementById("price-edit").value;
    let stock = document.getElementById("stock-edit").value;

    // cập nhật vào mảng 
    products = products.map(pro=>{
        if(pro.id == id){
            return {id,name,imgUrl,description,price,stock};
        }
        return pro;
    })

    // lưu lại vào local
    localStorage.setItem("products",JSON.stringify(products));
    // hiển thị lại giao diện và ẩn modal
    let myModal = document.getElementById('modal-edit');
    let modal = bootstrap.Modal.getInstance(myModal)
    modal.hide();
    renderListProduct();
}

btnUpdate.addEventListener("click",handleUpdateProduct);
// btnUpdate.onclick = handleUpdateProduct;

const sortProductList = (list)=>{
    if(sortDirection=="name"){
        return list.sort((a,b)=>sortBy=="DESC"?b.name.localeCompare(a.name):a.name.localeCompare(b.name));
    }else if(sortDirection=="price"){
        return list.sort((a,b)=>sortBy=="DESC"?b.price-a.price:a.price-b.price);
    }else if(sortDirection=="stock"){
        return list.sort((a,b)=>sortBy=="DESC"?b.stock-a.stock:a.stock-b.stock);
    }
    return list;
}


const deleteProductById = (id) => {
    // confirm
    if (!confirm('Bạn có chắc chắn muốn xóa không')) {
        return;
    }
    // lọc các sản phẩm ko bị xóa và gán vào mảng ban đầu
    products = products.filter(pro => pro.id != id);
    // lưu lại vào local
    localStorage.setItem("products",JSON.stringify(products));
    renderListProduct();
}


const handleAddProduct = () => {
    let product = validateInputProduct();
    if (product) {
        // thành công nhưng sẽ load lại trang và tải lại dữu liêu : Browser Storage
        products.push(product);
// lưu lại vào local
        localStorage.setItem("products",JSON.stringify(products));

        let myModal = document.getElementById('modal-add');
        let modal = bootstrap.Modal.getInstance(myModal)
        modal.hide();
        renderListProduct();
    }

}

const validateInputProduct = () => {
    // id ko đc để trống
    // id phải bắt đầu bằng chữ P và có 4 kí tự số
    // id ko đc trừng lặp
    let regex_id = /P[0-9]{4}/g; 
    let id = document.getElementById("id").value;
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


// tìm kiếm
formSearch.addEventListener("submit", function(e){
    currentPage = 0;
    e.preventDefault();
    keyword = inputSearch.value;
    renderListProduct();
})
direction.addEventListener("change", function(e){
    currentPage=0;
    sortDirection = e.target.value;
    renderListProduct();
})
by.addEventListener("change", function(e){
    currentPage =0;
    sortBy = e.target.value;
    renderListProduct();
})