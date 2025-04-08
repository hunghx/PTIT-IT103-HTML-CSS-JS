// DOM - Document Object Model
//  truy vấn HTML 
// byId, byClassName, byTagName, CSS selector
 let h1= document.getElementById("title");
 console.log("h1" ,h1);
 let li = document.getElementsByClassName("list-item");
 console.log("li", li);
 let tag = document.getElementsByTagName("li");
 console.log("tag", tag);


 let one =  document.querySelector(".list > .item_1");
 console.log("one", one);
 
 let many = document.querySelectorAll(".list > .item_1");
 console.log("many", many);
 
 // Lấy nội dung của thẻ : innerText/ innerHTML/textContent
//  h1.textContent = "<span>Hello HTML</span>";
 console.log("Nội dung thế h1 : "+h1.textContent);
 h1.id = "heading";

 console.log(h1.classList);
 
 h1.classList.add("title","heading");
 h1.classList.remove("title");



//  h1.style.textAlign = "center";
//  h1.style.color = "red";
// di chuyển trong cây
let body  = h1.parentElement;
console.log(body);

let li3 =body.childNodes[3].childNodes[5];
console.log(li3);


let img = document.getElementById("image");
img.setAttribute("src","http://abc.jpg")
console.log("src = ", img.getAttribute("src"));


// Tạo , chèn xóa elament
let el = document.createElement("div");
el.innerText = "đây là thẻ đc chèn";
body.append(el);


const changeColor = function(){
    let css ={
        textAlign: "center",
        color : "red"
    }
    
    Object.assign(h1.style, css);
}


// Xử lí sự kiện trong js

// h1.addEventListener("dblclick", function(e){
//     console.log(e);
//     h1.style.fontSize ="100px";    
// })

const change = function(){
        h1.style.fontSize ="100px";    
}
h1.ondblclick = change;
