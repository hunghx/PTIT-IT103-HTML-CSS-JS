// Dom 
let inputFile =file;
console.log("input", inputFile);


inputFile.addEventListener("change", function(e) {
   let url = URL.createObjectURL(e.target.files[0]);
   console.log("URL", url);
   document.getElementById("preview").src = url;
})

