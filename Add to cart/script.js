const shop=document.getElementById("shop");

const shoppingItems=[
    {
        id:1,
        name:"Casual Shaket",
        desc:"Lorem ipsum dolor sit amet consectetur.",
        price:3000,
        img:"Images/img1.jpg"
    },
    {
        id:2,
        name:"Sweat Shirt",
        desc:"Lorem ipsum dolor sit amet consectetur.",
        price:3000,
        img:"Images/img2.jpg"
    },
    {
        id:3,
        name:"Partywear Shirt",
        desc:"Lorem ipsum dolor sit amet consectetur.",
        price:3000,
        img:"Images/img3.jpg"
    },
    {
        id:4,
        name:"Casual Shaket",
        desc:"Lorem ipsum dolor sit amet consectetur.",
        price:3000,
        img:"Images/img1.jpg"
    }
]


function generateProduct(){
   shop.innerHTML= shoppingItems.map(val=>{
        const {id,name,desc,price,img}=val;
       
        return (`<div class="item">
        <div class="profile">
            <img src=${img} alt="">
        </div>
        <div class="desc">
            <h2>${name}</h2>
            <p>${desc}</p>
            <h3>&#8377; ${price}</h3>
        </div>
        <div class="buttons">
            <i class="bi bi-dash"></i>
            <div class="value">0</div>
            <i class="bi bi-plus-lg"></i>
        </div>
    </div>`)
    }).join("")
}

generateProduct()