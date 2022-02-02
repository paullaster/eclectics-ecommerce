// Adding views functionality of the select product button
let viewTshirt = document.getElementById("btn-tshirt");
let productSection = document.getElementById("products");
// Reset main content of the product page
function resetProductContent(){
    productSection.innerHTML = "";
}
// Click event on the select product button
viewTshirt.addEventListener("click", displayTshirtView);
//Setting the T-shirt view page content on click of select product btn on the t-shirt card
 function displayTshirtView(e){
     e.preventDefault();
     resetProductContent();
     let viewTshirtPage = document.getElementById("view-prod");
     let viewDiv = document.createElement("div");
     let viewDivTitle = document.createElement("div");
     let viewDivTitleSpan = document.createElement("span");
     viewDivTitleSpan.innerText = "T-shirt";
     let viewDivImgDiv = document.createElement("div");
     let viewDivImg = document.createElement("img");
     viewDivImg.setAttribute("src", "../images/products/t-shirt.jpg");
     viewDivTitle.appendChild(viewDivTitleSpan);
     viewDivImgDiv.appendChild(viewDivImg);
     viewDiv.appendChild(viewDivTitle);
     viewDiv.appendChild(viewDivImgDiv);

     let viewDivParaDiv = document.createElement("div");
     let viewDivSpan = document.createElement("span");
     viewDivSpan.innerText = `Lorem Ipsum is simply dummy text of the printing and 
     typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley of type and
       scrambled it to make a type specimen book. It has survived not only five 
       centuries, but also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset sheets 
        containing Lorem Ipsum passages, and more recently with desktop publishing software
         like Aldus PageMaker including versions of Lorem Ipsum.`;
     viewDivParaDiv.appendChild(viewDivSpan);
     viewDiv.appendChild(viewDivParaDiv);
     let priceDiv = document.createElement("div");
     priceDiv.classList.add("margins");
     let priceSpan = document.createElement("span");
     priceSpan.innerText = "$50";
     priceDiv.appendChild(priceSpan);
     viewDiv.appendChild(priceDiv);

     let buyNowBtnDiv = document.createElement("div");
     let buyNowBtn = document.createElement("button");
     buyNowBtn.innerText = "Buy now";
     buyNowBtn.classList.add("buynow-btn");
     buyNowBtnDiv.appendChild(buyNowBtn);
     viewDiv.appendChild(buyNowBtnDiv);
     viewTshirtPage.appendChild(viewDiv);
    
 }


//  Hoodie view page
let viewHoodie = document.getElementById("btn-hoodie");
// Click event on the select product button
viewHoodie.addEventListener("click", displayHoodieView);
//Setting the T-shirt view page content on click of select product btn on the t-shirt card
 function displayHoodieView(e){
     e.preventDefault();
     resetProductContent();
     let viewHoodiePage = document.getElementById("view-prod");
     let viewDiv = document.createElement("div");
     let viewDivTitle = document.createElement("div");
     let viewDivTitleSpan = document.createElement("span");
     viewDivTitleSpan.innerText = "Hoodie";
     let viewDivImgDiv = document.createElement("div");
     let viewDivImg = document.createElement("img");
     viewDivImg.setAttribute("src", "../images/products/hoodie.png");
     viewDivTitle.appendChild(viewDivTitleSpan);
     viewDivImgDiv.appendChild(viewDivImg);
     viewDiv.appendChild(viewDivTitle);
     viewDiv.appendChild(viewDivImgDiv);

     let viewDivParaDiv = document.createElement("div");
     let viewDivSpan = document.createElement("span");
     viewDivSpan.innerText = `Lorem Ipsum is simply dummy text of the printing and 
     typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley of type and
       scrambled it to make a type specimen book. It has survived not only five 
       centuries, but also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset sheets 
        containing Lorem Ipsum passages, and more recently with desktop publishing software
         like Aldus PageMaker including versions of Lorem Ipsum.`;
     viewDivParaDiv.appendChild(viewDivSpan);
     viewDiv.appendChild(viewDivParaDiv);
     let priceDiv = document.createElement("div");
     priceDiv.classList.add("margins");
     let priceSpan = document.createElement("span");
     priceSpan.innerText = "$80";
     priceDiv.appendChild(priceSpan);
     viewDiv.appendChild(priceDiv);

     let buyNowBtnDiv = document.createElement("div");
     let buyNowBtn = document.createElement("button");
     buyNowBtn.innerText = "Buy now";
     buyNowBtn.classList.add("buynow-btn");
     buyNowBtnDiv.appendChild(buyNowBtn);
     viewDiv.appendChild(buyNowBtnDiv);
     viewHoodiePage.appendChild(viewDiv);
    
 }

// View Books details
let viewBook = document.getElementById("btn-book");

// On click
viewBook.addEventListener("click", displayBookView);
//Setting the T-shirt view page content on click of select product btn on the t-shirt card
 function displayBookView(e){
     e.preventDefault();
     resetProductContent();
     let viewBookPage = document.getElementById("view-prod");
     let viewDiv = document.createElement("div");
     let viewDivTitle = document.createElement("div");
     let viewDivTitleSpan = document.createElement("span");
     viewDivTitleSpan.innerText = "Book";
     let viewDivImgDiv = document.createElement("div");
     let viewDivImg = document.createElement("img");
     viewDivImg.setAttribute("src", "../images/products/book.jpg");
     viewDivTitle.appendChild(viewDivTitleSpan);
     viewDivImgDiv.appendChild(viewDivImg);
     viewDiv.appendChild(viewDivTitle);
     viewDiv.appendChild(viewDivImgDiv);

     let viewDivParaDiv = document.createElement("div");
     let viewDivSpan = document.createElement("span");
     viewDivSpan.innerText = `Lorem Ipsum is simply dummy text of the printing and 
     typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley of type and
       scrambled it to make a type specimen book. It has survived not only five 
       centuries, but also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset sheets 
        containing Lorem Ipsum passages, and more recently with desktop publishing software
         like Aldus PageMaker including versions of Lorem Ipsum.`;
     viewDivParaDiv.appendChild(viewDivSpan);
     viewDiv.appendChild(viewDivParaDiv);
     let priceDiv = document.createElement("div");
     priceDiv.classList.add("margins");
     let priceSpan = document.createElement("span");
     priceSpan.innerText = "$20";
     priceDiv.appendChild(priceSpan);
     viewDiv.appendChild(priceDiv);

     let buyNowBtnDiv = document.createElement("div");
     let buyNowBtn = document.createElement("button");
     buyNowBtn.innerText = "Buy now";
     buyNowBtn.classList.add("buynow-btn");
     buyNowBtnDiv.appendChild(buyNowBtn);
     viewDiv.appendChild(buyNowBtnDiv);
     viewBookPage.appendChild(viewDiv);
    
 }

//  View pen details
let viewPen = document.getElementById("btn-pen");
// On click
viewPen.addEventListener("click", displayPenView);
//Setting the T-shirt view page content on click of select product btn on the t-shirt card
 function displayPenView(e){
     e.preventDefault();
     resetProductContent();
     let viewPenPage = document.getElementById("view-prod");
     let viewDiv = document.createElement("div");
     let viewDivTitle = document.createElement("div");
     let viewDivTitleSpan = document.createElement("span");
     viewDivTitleSpan.innerText = "Pen";
     let viewDivImgDiv = document.createElement("div");
     let viewDivImg = document.createElement("img");
     viewDivImg.setAttribute("src", "../images/products/pen.png");
     viewDivTitle.appendChild(viewDivTitleSpan);
     viewDivImgDiv.appendChild(viewDivImg);
     viewDiv.appendChild(viewDivTitle);
     viewDiv.appendChild(viewDivImgDiv);

     let viewDivParaDiv = document.createElement("div");
     let viewDivSpan = document.createElement("span");
     viewDivSpan.innerText = `Lorem Ipsum is simply dummy text of the printing and 
     typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley of type and
       scrambled it to make a type specimen book. It has survived not only five 
       centuries, but also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset sheets 
        containing Lorem Ipsum passages, and more recently with desktop publishing software
         like Aldus PageMaker including versions of Lorem Ipsum.`;
     viewDivParaDiv.appendChild(viewDivSpan);
     viewDiv.appendChild(viewDivParaDiv);
     let priceDiv = document.createElement("div");
     priceDiv.classList.add("margins");
     let priceSpan = document.createElement("span");
     priceSpan.innerText = "$20";
     priceDiv.appendChild(priceSpan);
     viewDiv.appendChild(priceDiv);

     let buyNowBtnDiv = document.createElement("div");
     let buyNowBtn = document.createElement("button");
     buyNowBtn.innerText = "Buy now";
     buyNowBtn.classList.add("buynow-btn");
     buyNowBtnDiv.appendChild(buyNowBtn);
     viewDiv.appendChild(buyNowBtnDiv);
     viewPenPage.appendChild(viewDiv);
    
 }

// Water bottle view
let wbottleView = document.getElementById("btn-wbottle");
// On click
wbottleView.addEventListener("click", displayWbottleView);
//Setting the T-shirt view page content on click of select product btn on the t-shirt card
 function displayWbottleView(e){
     e.preventDefault();
     resetProductContent();
     let viewWbottlePage = document.getElementById("view-prod");
     let viewDiv = document.createElement("div");
     let viewDivTitle = document.createElement("div");
     let viewDivTitleSpan = document.createElement("span");
     viewDivTitleSpan.innerText = "Water bottle";
     let viewDivImgDiv = document.createElement("div");
     let viewDivImg = document.createElement("img");
     viewDivImg.setAttribute("src", "../images/products/water-bottle.jpg");
     viewDivTitle.appendChild(viewDivTitleSpan);
     viewDivImgDiv.appendChild(viewDivImg);
     viewDiv.appendChild(viewDivTitle);
     viewDiv.appendChild(viewDivImgDiv);

     let viewDivParaDiv = document.createElement("div");
     let viewDivSpan = document.createElement("span");
     viewDivSpan.innerText = `Lorem Ipsum is simply dummy text of the printing and 
     typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley of type and
       scrambled it to make a type specimen book. It has survived not only five 
       centuries, but also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset sheets 
        containing Lorem Ipsum passages, and more recently with desktop publishing software
         like Aldus PageMaker including versions of Lorem Ipsum.`;
     viewDivParaDiv.appendChild(viewDivSpan);
     viewDiv.appendChild(viewDivParaDiv);
     let priceDiv = document.createElement("div");
     priceDiv.classList.add("margins");
     let priceSpan = document.createElement("span");
     priceSpan.innerText = "$150";
     priceDiv.appendChild(priceSpan);
     viewDiv.appendChild(priceDiv);

     let buyNowBtnDiv = document.createElement("div");
     let buyNowBtn = document.createElement("button");
     buyNowBtn.innerText = "Buy now";
     buyNowBtn.classList.add("buynow-btn");
     buyNowBtnDiv.appendChild(buyNowBtn);
     viewDiv.appendChild(buyNowBtnDiv);
     viewWbottlePage.appendChild(viewDiv);
    
    //  Onlclick on Buy now now btn
    buyNowBtn.addEventListener("click", btnIsClicked);

 }

//  function to monitor click
let itemCartValue = 0;
let elementIsClicked = false;
function btnIsClicked(){
   elementIsClicked = true;
   if(elementIsClicked){
      itemCartValue+=1;
   }
   console.log(itemCartValue);
   //return itemCartValue;
}