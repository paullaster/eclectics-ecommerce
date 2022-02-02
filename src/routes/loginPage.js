// Register page
let navRegister = document.getElementById("registerPage");
navRegister.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("clicked register");
    window.location.href ="/htmls/register.html";
});
