var storedDataString = localStorage.getItem('myData');
var storedData = JSON.parse(storedDataString);
var inputValue = localStorage.getItem("searchQuery");
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


    document.getElementById('productImage').src = sessionStorage.getItem('product_image');
    document.getElementById('productTitle').innerText = sessionStorage.getItem('product_title');
    document.getElementById('productPrice').innerText = sessionStorage.getItem('product_price');



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
  
