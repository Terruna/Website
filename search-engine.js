
var storedDataString = localStorage.getItem('myData');
var storedData = JSON.parse(storedDataString);



   var inputValue = localStorage.getItem("searchQuery");
        
    storedData.forEach(items => {
        var name = items.name.toLowerCase();
        if (name.includes(inputValue.toLowerCase())) {
            let section = document.querySelector("section");
            section.innerHTML += `
            <div class="card" onclick="openProduct('${items.image}', '${items.name}', '${items.price}')">
                <div class="card-image">
                    <img src="${items.image}" alt="">
                </div>
                
                <div class="card-container">
                    <p><span>${items.name}</span></p>
                    <div class="price">
                        <p>${items.price}</p>
                    </div>
                </div>
            </div>`;
        }
    });
    
document.getElementById("searchbtn").addEventListener("click", function(event) {
event.preventDefault(); 

        
var newSearchQuery = document.getElementById("searchinp").value;

localStorage.setItem("searchQuery", newSearchQuery);



        

window.location.href = "./search-result.html";
    });             



document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
  
    let currentDropdown
    if (isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]")
      currentDropdown.classList.toggle("active")
      e.preventDefault(); 
    }
  
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
      if (dropdown === currentDropdown) return
      dropdown.classList.remove("active")
    })
  })



  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle("sticky", window.scrollY > 124);
});

window.addEventListener('scroll', function() {
    var img = this.document.querySelector(".logo");
    img.classList.toggle('imgon', window.scrollY > 125);
});

function togglePopup() {
    document.getElementById("popup1").classList.toggle("active");
}








let footer = document.querySelector("footer")
let sectionn = document.querySelector("section");
if(sectionn.innerHTML.length == 12){
    footer.style.position ="absolute"
    footer.style.bottom = '0'
}




function openProduct(image, title, price) {

      sessionStorage.setItem('product_image', image);
    sessionStorage.setItem('product_title', title);
    sessionStorage.setItem('product_price', price);
    window.open("card.html");  
    
    
  }

  
function Tshirt(){
    let inputValue = "T-shirt"
    localStorage.setItem("searchQuery", inputValue);   
    window.location.href = "./search-result.html";
}

function Longs(){
    let inputValue = "Long Sleeve Shirt"
    localStorage.setItem("searchQuery", inputValue);   
    window.location.href = "./search-result.html";
}
function Hoodie(){
    let inputValue = "Hoodie"
    localStorage.setItem("searchQuery", inputValue);   
    window.location.href = "./search-result.html";
}

function Sweatshirt(){
    let inputValue = "Sweatshirt"
    localStorage.setItem("searchQuery", inputValue);   
    window.location.href = "./search-result.html";
}

