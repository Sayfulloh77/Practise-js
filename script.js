"use-strict"



const products = [
    {
    isname:"Samsung A73",
    color:"silver",
    price:3121000,
    company:"Samsung",
    getMonthly:323000,
    PaymentMonthly:true ,
    quantity:40,
    productsImages: "..//object practise/images/VtpK0dXnNcCSytk30aSvcx4Z2XwpPlc8i8DgI4aMNjrEBS6N6iTqjfV9VeeI.jpg",
    category:"Smartfonlar",
    description:"Smartfon Xiomi Redmi Note",
   // saved: <i class="bi bi-heart"></i>
    },
    
    {
    isname:"Iphone 16 pro",
    color:"blue",
    price:20000000,
    company:"Apple",
    getMonthly: 3000000,
    PaymentMonthly:false,
    productsImages: "..//object practise/images/VtpK0dXnNcCSytk30aSvcx4Z2XwpPlc8i8DgI4aMNjrEBS6N6iTqjfV9VeeI.jpg",
    quantity:10,
    category:"Smartfonlar",
    description:"Smartfon Xiomi Redmi Note"
   // saved: <i class="bi bi-heart"></i>
    },

    {
    isname:"Redmi note 11 pro max",
    color:"silver",
    price:3321000,
    company:"Xiomi",
    getMonthly:420000,
    PaymentMonthly: false,
    productsImages: "..//object practise/images/iOGaYFVVGomp5tfsIZcCWX3xyzksn7n4tMBwHOEPmAGyWBYn6a4UEM9YkK2w.jpg",
    quantity:33,
    category:"Smartfonlar",
    description:"Smartfon Xiomi Redmi Note"
   // saved: <i class="bi bi-heart"></i>
    
    },

    {
    isname:"Nokia 1202",
    color:"black",
    price: 1200000,
    company:"Nokia",
    getMonthly: 100000,
    PaymentMonthly: true,
    productsImages: "..//object practise/images/iOGaYFVVGomp5tfsIZcCWX3xyzksn7n4tMBwHOEPmAGyWBYn6a4UEM9YkK2w.jpg",
    quantity:0,
    category:"Smartfonlar",
    description:"Smartfon Xiomi Redmi Note"
   // saved: <i class="bi bi-heart"></i>

    },

    {
    isname:"Vivo Y17s",
    color:"gold",
    price:4120000,
    company:"Vivo",
    getMonthly:602000,
    PaymentMonthly: true,
    productsImages: "..//object practise/images/CMi9tIQzqhWOA8u4iBeEdfX1YZEeolImWrImp5fTISUfR8jPxZ0dfmRw8IPL.jpg",
    quantity:90,
    category:"Smartfonlar    ",
    description:"Smartfon Xiomi Redmi Note"
   // saved: <i class="bi bi-heart"></i>
    
    },

    {
    isname:"Techno Spark Y20",
    color:"silver",
    price:3121000,
    company:"Samsung",
    getMonthly:323000,
    PaymentMonthly:true,
    productsImages:  "..//object practise/images/CMi9tIQzqhWOA8u4iBeEdfX1YZEeolImWrImp5fTISUfR8jPxZ0dfmRw8IPL.jpg",
    quantity:40,
    category:"Smartfonlar",
    description:"Smartfon Xiomi Redmi Note"
   // saved: <i class="bi bi-heart heart"></i>
    
    },
      {
    isname:"Samsung A73",
    color:"silver",
    price:3121000,
    company:"Samsung",
    getMonthly:323000,
    PaymentMonthly:true,
    quantity:40,
    productsImages: "..//object practise/images/VtpK0dXnNcCSytk30aSvcx4Z2XwpPlc8i8DgI4aMNjrEBS6N6iTqjfV9VeeI.jpg",
    category:"Smartfonlar",
    description:"Smartfon Xiomi Redmi Note"
   // saved: <i class="bi bi-heart"></i>

    },
    
    {
    isname:"Iphone 16 pro",
    color:"blue",
    price:20000000,
    company:"Apple",
    getMonthly: 3000000,
    PaymentMonthly:true,
    productsImages: "..//object practise/images/VtpK0dXnNcCSytk30aSvcx4Z2XwpPlc8i8DgI4aMNjrEBS6N6iTqjfV9VeeI.jpg",
    quantity:10,
    category:"Smartfonlar",
    description:"Smartfon Xiomi Redmi Note"
   // saved: <i class="bi bi-heart"></i>

    },

    {
    isname:"Redmi note 11 pro max",
    color:"silver",
    price:3321000,
    company:"Xiomi",
    getMonthly:420000,
    PaymentMonthly:true,
    productsImages: "..//object practise/images/iOGaYFVVGomp5tfsIZcCWX3xyzksn7n4tMBwHOEPmAGyWBYn6a4UEM9YkK2w.jpg",
    quantity:50,
    category:"Smartfonlar",
    description:"Smartfon Xiomi Redmi Note"
   // saved: <i class="bi bi-heart"></i>

    },

    {
    isname:"Nokia 1202",
    color:"black",
    price: 1200000,
    company:"Nokia",
    getMonthly: 100000,
    PaymentMonthly: false,
   // productsImages: "https://picsum.photos/id/14/300/500",
    productsImages: "..//object practise/images/iOGaYFVVGomp5tfsIZcCWX3xyzksn7n4tMBwHOEPmAGyWBYn6a4UEM9YkK2w.jpg",
    quantity:1,
    category:"Smartfonlar",
    description:"Smartfon Xiomi Redmi Note"
   // saved: <i class="bi bi-heart"></i>

    },

    {
    isname:"Vivo Y17s",
    color:"gold",
    price:4120000,
    company:"Vivo",
    getMonthly:602000,
    PaymentMonthly: false,
    productsImages: "..//object practise/images/CMi9tIQzqhWOA8u4iBeEdfX1YZEeolImWrImp5fTISUfR8jPxZ0dfmRw8IPL.jpg",
    quantity:90,
    category:"Smartfonlar",
    description:"Smartfon Xiomi Redmi Note"
   // saved: <i class="bi bi-heart"></i>

    },

    {
    isname:"Techno Spark Y20",
    color:"silver",
    price:3121000,
    company:"Samsung",
    getMonthly:323000,
    PaymentMonthly: false,
    productsImages:  "..//object practise/images/CMi9tIQzqhWOA8u4iBeEdfX1YZEeolImWrImp5fTISUfR8jPxZ0dfmRw8IPL.jpg",
    quantity:40,
    category:"Smartfonlar",
    description:"Smartfon Xiomi Redmi Note"
   // saved: <i class="bi bi-heart"></i>

    },
]


const wrapperCard= document.querySelector(".card-wrapper")

const getDate =()=> {
     wrapperCard.innerHTML = "";
   
 
     products.forEach((products) => {
     const div = document.createElement("div")
     div.setAttribute("class","card")
     div.innerHTML = `<div class="card">
                <i class="bi bi-heart heart-icon  position-absolute top-0 end-0 m-1 z-1"></i>
                <img src="${products.productsImages}" alt="${products.isname}" class="card-image">
                <div class="card-body">
                    <p class="card-category">
                     ${products.category}
                    </p>
                    <p class="card-price">
                        ${products.price} som
                    </p>
                    <span class="card-date rounded-pill">
                     ${products.PaymentMonthly ? products.getMonthly+ "so'mdan/oyiga" : "Bo'lib to'lash yo'q" }

                    </span> 

                   <h4 class="product-name">${products.isname}</h4>

                    <p class="card-description">
                        ${products.description}
                    </p>
                   
                    <div class="card-btn">
                        Xarid qilish
                    </div>
                </div>
            </div>`;
     

                // Only add to DOM if quantity > 0
         if(products.quantity !== 0) {
                     wrapperCard.appendChild(div)
         }
         // card-btn logic goes here

         const saved = div.querySelector(".card-btn")
         const badge = document.querySelector(".badge")
         const good = document.querySelector(".good")
          saved.addEventListener("click",()=> {
             const number = Number(good.textContent)
            if (saved.classList.contains("card-btn")) {
               good.textContent = number + 1;
            }
          })
  
      
         // ✅ Heart click logic goes here
         const heart = div.querySelector(".heart-icon");
       //  const badge = document.querySelector(".badge")


heart.addEventListener("click", () => {
      let count = Number(badge.textContent) // convert to number


  if (heart.classList.contains("bi-heart")) {
    heart.classList.replace("bi-heart", "bi-heart-fill"); // fill it
    heart.style.color = "crimson";
     
    badge.textContent = count + 1;
  } else {
    heart.classList.replace("bi-heart-fill", "bi-heart"); // unfill it
    heart.style.color = "gray";
    
    badge.textContent = count - 1;
  }
  
  });
     


         //const monthly = div.querySelector(".monthly")
         const monthlyNumber = div.querySelector(".card-date")
         /*if (products.PaymentMonthly !== true) {
                monthly.textContent = "oyiga tolov yoq"
         }*/
        if (!products.PaymentMonthly) {
           //monthly.textContent = "oyiga to‘lov yo‘q";
           monthlyNumber.textContent = "Bo'lib to'lash yo'q";
          }
        // There are easy way as well i mean if we want to put Bo'lib to'lash yoq, easy way is
         //products.PaymentMonthly ?products.getMonthly+ "so'mdan/oyiga" : "Bo'lib to'lash yo'q" 
         //we used in this case ternary or some times called conditional operator 
         //so in our case ? means if true, thats mean if inside of products paymentMonthly is true show proudcts.getMonthly + "somdan/oyiga"
         // : means if opposite i mean  if else show Bo'lib to'lash yoq
          
        });


           // wrapperCard.appendChild(div)
    }
//}
getDate()


   const select = document.querySelector("#categor")
   
   select.addEventListener("change",(e)=> { // so we are when user choose increase or reduce "change" will work
    if(e.target.value === "increase") { // target i our select value i mean if user choose increase that  means target is value increase
        products.sort((a,b) => a.price - b.price);
        
    }else if (e.target.value == "decrease") {
        products.sort((a,b) => b.price - a.price);
    }
    getDate()
   })




   // example to sort
   const database = products.sort((a,b)=> {
    return b.price - a.price
  })
    console.log(database)

    //sort is method of array
   //products.sort((a, b) => a.price - b.price); // O'sish (ascending)
//products.sort((a, b) => b.price - a.price); // Kamayish (descending)

/*
// 
const numbers = [100, 2, 50, 23];
numbers.sort((a, b) => a - b); // ascending
console.log(numbers); // [2, 23, 50, 100]



numbers.sort((a, b) => b - a);
console.log(numbers); // [100, 50, 23, 2] from top to end

const fruits = ["banana", "apple", "mango"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "mango"]

*/
const num = [123,23,2,45,155]
 num.sort((a,b)=> a - b);
num.forEach(num=> console.log(num))


