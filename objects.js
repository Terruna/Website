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

let randomItems = getRandomItems(data, 4);

randomItems.forEach(item => {
    let section = document.querySelector("section");
    section.innerHTML += `
    <div class="card">
        <div class="card-image">
            <img src="${item.image}" alt="">
        </div>
        
        <div class="card-container">
            <p><span>${item.name}</span></p>
            <div class="price">
                <p>${item.price}</p>
            </div>
        </div>
    </div>`;
});