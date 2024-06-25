

//creating a cart arry if cart arry is already in localstorage cart will be the arry that we retriving from local storage otherwise empty arry
let cart = JSON.parse(localStorage.getItem("cart")) || []

let buy = document.querySelectorAll(".container>div")

document.getElementById("cart-value").innerText= cart.length

//looping over the nodelist
buy.forEach((ele)=>{

        let addButton = ele.querySelector(".button.flex")
        //attaching event to each addButton in the element 
        addButton.addEventListener("click",()=>{

            let price = ele.querySelector("p")
            let name =ele.querySelector("h3")

            //checking item is already present or not,if present incresing the quantity
            let isPresent =false

            for(let i=0;i<cart.length;i++){
               if(cart[i].name === name.innerText){
                  isPresent = true
                  cart[i].quantity = cart[i].quantity+1
                  break;
               }
               
            }

             // if not present adding the item to the cart
             if(!isPresent){
                let x = price.innerText.split(".")
                let dollar =x[0].slice(1)
                let cent =x[1] || 0


                cart.push({
                    name:name.innerText,
                    quantity:1,
                    dollar:parseInt(dollar),
                    cent:+cent
              
                  })

             }
             // setting the item in the local storage 
             localStorage.setItem("cart",JSON.stringify(cart))
             
             document.getElementById("cart-value").innerText= cart.length
             
            


        })

})


let cartdiv =document.getElementById("cart")

//printing the cart item in the console
cartdiv.addEventListener("click",()=>{
     
    for(let i=0;i<cart.length;i++){

        let price =cart[i].quantity*parseFloat(`${cart[i].dollar}.${cart[i].cent}`)

        console.log(`NAME : ${cart[i].name}, PRICE:${cart[i].dollar}dollar ${cart[i].cent}cent ,TOTALPRICE:${price}`)

    }
    
    //if you wnat to remove the cart item from local storage you can write like this 
    //additinally we are setting the cart value as empty and number of cart item as 0

    // localStorage.removeItem("cart")
    // cart=[]
    // document.getElementById("cart-value").innerText= 0
})






