

const input = document.getElementById("file");
const preview = document.getElementById("preview");


// input.addEventListener("change", function(e){
//     let url = URL.createObjectURL(e.target.files[0]);
//     console.log("url", url);
//     preview.src = url;
// })

// Base64

input.addEventListener("change", function(e){
   let file = e.target.files[0];
   let reader = new FileReader();
   reader.addEventListener("load", function(e){
        preview.src = e.target.result; // base 64
   })
   reader.readAsDataURL(file);
})