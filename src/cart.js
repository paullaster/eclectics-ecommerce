// Cart functionality
let cartBtn = document.getElementById("cart-btn");
let body = document.getElementById("body");
let main = document.getElementById("product-main");
// console.log(main)

//reset the main content of all pages when the cart icon is clicked
function resetMainContent(){
   // e.preventDefault();
    main.innerHTML = "";
}

cartBtn.addEventListener("click", displayCartItems);

//Diplaying cart items
function  displayCartItems(){
   // e.preventDefault();
    resetMainContent();

   let contentDiv = document.createElement("div");
   let contentDummy = document.createElement("span");
   contentDummy.innerText = "Your bought Items are displayed here!";

   //Append elements to the webpage
    contentDiv.appendChild(contentDummy);
    body.appendChild(contentDiv);
}