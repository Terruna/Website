var data = [
  {   type:"tshirt",
      name:"T-shirt DEATH",
      price:"20$",
      image:"pic/1.png"
  }
  ,
  {   type:"tshirt",
      name:"T-shirt DEATH",
      price:"20$",
      image:"pic/2.png"
  }

  ,
  {   type:"tshirt",
      name:"T-shirt KREATOR",
      price:"25$",
      image:"pic/3.png"
  }
  ,
  {   type:"tshirt",
      name:"T-shirt BLACK SABBATH",
      price:"20$",
      image:"pic/4.png"
  }  ,
  {   type:"tshirt",
      name:"T-shirt IRON MAIDEN",
      price:"22$",
      image:"pic/5.png"
  }
,
  {   type:"tshirt",
  name:"T-shirt KEKHT ARAK",
  price:"24$",
  image:"pic/6.png"
}
   ,
  {   type:"tshirt",
      name:"T-shirt MOTORHEAD",
      price:"22$",
      image:"pic/7.png"
  }
  ,
  {   type:"tshirt",
      name:"T-shirt TYPE O NEGATIVE",
      price:"22$",
      image:"pic/8.png"
  }
  ,
  {   type:"tshirt",
      name:"T-shirt SAVATAGE",
      price:"22$",
      image:"pic/9.png"
  }
  ,
  {   type:"tshirt",
      name:"T-shirt DEATH",
      price:"22$",
      image:"pic/10.png"
  }
  ,
  {   type:"tshirt",
      name:"T-shirt MAYHEM",
      price:"22$",
      image:"pic/11.png"
  }
  ,
  {   type:"tshirt",
      name:"T-shirt MAYHEM",
      price:"22$",
      image:"pic/12.png"
  }
  ,
  {   type:"tshirt",
      name:"T-shirt MAYHEM",
      price:"22$",
      image:"pic/13.png"
  }
  ,
  {   type:"tshirt",
      name:"T-shirt MAYHEM",
      price:"22$",
      image:"pic/14.png"
  }
  ,
  {   type:"tshirt",
      name:"T-shirt MAYHEM",
      price:"22$",
      image:"pic/15.png"
  }
  ,
  {   type:"tshirt",
      name:"T-shirt RAMMSTEIN",
      price:"22$",
      image:"pic/16.png"
  }
  ,
  {   type:"tshirt",
      name:"T-shirt  RAMMSTEIN",
      price:"22$",
      image:"pic/17.png"
  }
  ,
  {   type:"tshirt",
      name:"T-shirt  RAMMSTEIN",
      price:"22$",
      image:"pic/18.png"
  }
  ,
  {   type:"hoodie",
      name:"Hoodie IRON MAIDEN",
      price:"60$",
      image:"pic/h1.png"
  }
  ,
  {   type:"hoodie",
      name:"Hoodie SABATON",
      price:"60$",
      image:"pic/h2.png"
  }
  ,
  {   type:"hoodie",
      name:"Hoodie METALLICA",
      price:"60$",
      image:"pic/h3.png"
  }

  ,
  {   type:"long-sleeve",
      name:"Long Sleeve Shirt METALLICA",
      price:"47$",
      image:"pic/l1.png"
  }

  ,
  {   type:"long-sleeve",
      name:"Long Sleeve Shirt METALLICA",
      price:"22$",
      image:"pic/l2.png"
  }

  ,
  {   type:"long-sleeve",
      name:"Long Sleeve Shirt METALLICA",
      price:"40$",
      image:"pic/l3.png"
  }
  ,
  {   type:"long-sleeve",
      name:"Long Sleeve Shirt METALLICA",
      price:"40$",
      image:"pic/l4.png"
  }
  ,
  {   type:"long-sleeve",
      name:"Long Sleeve Shirt METALLICA",
      price:"40$",
      image:"pic/l5.png"
  }
  ,
  {   type:"long-sleeve",
      name:"Long Sleeve Shirt METALLICA",
      price:"40$",
      image:"pic/l6.png"
  }
  ,
  {   type:"long-sleeve",
      name:"Long Sleeve Shirt METALLICA",
      price:"40$",
      image:"pic/l7.png"
  }
  ,
  {  
  type:"guitar",
  name:"ibanez-rg42pb",
  price:"200$",
  image:"pic/ibanez-red-black.png"
  } 
  ,
  {  
  type:"guitar",
  name:"PRS Custom 22",
  price:"350$",
  image:"pic/PRS Custom 22.webp"
  }     
  ,
  {  
  type:"guitar",
  name:"Gretsch G6136T-LTV White Falcon 2015",
  price:"650$",
  image:"pic/Gretsch G6136T-LTV White Falcon 2015.webp"
  }
  ,
  {  
  type:"guitar",
  name:"ibanez-gio-grg131dx",
  price:"650$",
  image:"pic/ibanez rg42pb.png"
  }     


];

localStorage.setItem('myData', JSON.stringify(data));




function getRandomItems(arr, count) {
  let shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
  while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
  }
  return shuffled.slice(min);
}



function openProduct(image, title, price) {
  sessionStorage.setItem('product_image', image);
  sessionStorage.setItem('product_title', title);
  sessionStorage.setItem('product_price', price);
  window.open("card.html");
}


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





document.getElementById("searchbtn").addEventListener("click", function() {
    var inputValue = document.getElementById("searchinp").value;

    localStorage.setItem("searchQuery", inputValue);   
    window.location.href = "./search-result.html";
});



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
