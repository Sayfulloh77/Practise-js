"use-strict"



const products = [
    {
    isname:"Samsung A73",
    color:"silver",
    price:3121000,
    company:"Samsung",
    getMonthly:323000,
    PaymentMonthly:true,
    quantity:40,
    productsImages: "https://picsum.photos/id/16/300/500",
    category:"Smartfonlar",
    description:"Smartfon Xiomi Redmi Note"
    },
    
    {
    isname:"Iphone 16 pro",
    color:"blue",
    price:20000000,
    company:"Apple",
    getMonthly: 3000000,
    PaymentMonthly:false,
    productsImages: "https://picsum.photos/id/17/300/500",
    quantity:10,
    category:"Smartfonlar",
    description:"Smartfon Xiomi Redmi Note"

    },

    {
    isname:"Redmi note 11 pro max",
    color:"silver",
    price:3321000,
    company:"Xiomi",
    getMonthly:420000,
    PaymentMonthly:false,
    productsImages: "https://picsum.photos/id/15/300/500",
    quantity:50,
    category:"Smartfonlar",
    description:"Smartfon Xiomi Redmi Note"

    },

    {
    isname:"Nokia 1202",
    color:"black",
    price: 1200000,
    company:"Nokia",
    getMonthly: 100000,
    PaymentMonthly:false,
    productsImages: "https://picsum.photos/id/14/300/500",
    quantity:1,
    category:"Smartfonlar",
    description:"Smartfon Xiomi Redmi Note"

    },

    {
    isname:"Vivo Y17s",
    color:"gold",
    price:4120000,
    company:"Vivo",
    getMonthly:602000,
    PaymentMonthly: true,
    productsImages: "https://picsum.photos/id/13/300/500",
    quantity:90,
    category:"Smartfonlar",
    description:"Smartfon Xiomi Redmi Note"

    },

    {
    isname:"Techno Spark Y20",
    color:"silver",
    price:3121000,
    company:"Samsung",
    getMonthly:323000,
    PaymentMonthly:true,
    productsImages: "https://picsum.photos/id/12/300/500",
    quantity:40,
    category:"Smartfonlar",
    description:"Smartfon Xiomi Redmi Note"

    },
]


const wrapperCard= document.querySelector(".card-wrapper")

const getDate =()=> {
   /* for(let i = 0; i < products.length; i++){
     const div = document.createElement("div")
     div.setAttribute("class","card")
     div.innerHTML = `<div class="card">
                <img src="${products[i].productsImages}" alt="${products[i].isname}" class="card-image">
                <div class="card-body">
                    <p class="card-category">
                     ${products[i].category}
                    </p>
                    <p class="card-price">
                        ${products[i].price}
                    </p>
                    <span class="card-date rounded-pill">
                        ${products[i].getMonthly}
                    </span>
                    <p class="card-description">
                        ${products[i].description}
                    </p>

                    <div class="card-btn">
                        Xarid qilish
                    </div>
                </div>
            </div>`;
     */

     products.forEach((products) => {
     const div = document.createElement("div")
     div.setAttribute("class","card")
     div.innerHTML = `<div class="card">
                <img src="${products.productsImages}" alt="${products.isname}" class="card-image">
                <div class="card-body">
                    <p class="card-category">
                     ${products.category}
                    </p>
                    <p class="card-price">
                        ${products.price} som
                    </p>
                    <span class="card-date rounded-pill">
                        ${products.getMonthly} <span class="monthly">somdan / oyiga</span>
                    </span>
                    <h4>${products.isname}</h4>
                    <p class="card-description">
                        ${products.description}
                    </p>
                   
                    <div class="card-btn">
                        Xarid qilish
                    </div>
                </div>
            </div>`;
     
         if(products.quantity !== 0) {
                     wrapperCard.appendChild(div)
         }
         //const monthly = div.querySelector(".monthly")
         const monthlyNumber = div.querySelector(".card-date")
         /*if (products.PaymentMonthly !== true) {
                monthly.textContent = "oyiga tolov yoq"
         }*/
        if (!products.PaymentMonthly) {
           //monthly.textContent = "oyiga to‘lov yo‘q";
           monthlyNumber.textContent = "Bo'lib to'lash yo'q";
          }
        

          
            

        });


           // wrapperCard.appendChild(div)
    }
//}
getDate()


