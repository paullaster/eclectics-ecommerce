// Routing the urls
//Login page

let navLogin = document.getElementById("loginPage");
console.log(navLogin);
navLogin.addEventListener("click", (e)=>{
    e.preventDefault();
    window.location.href ="/index.html";
});
// console.log("connected")
// // Product page
// let navProduct =document.getElementById("productPage");
// navProduct.addEventListener("click", (e)=>{
//     e.preventDefault();
//     window.location.href ="/htmls/products.html";
// });