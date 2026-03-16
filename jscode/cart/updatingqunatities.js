import { priceSumary } from "./pricesummary.js";
import { cart } from "./cart.js";
export function updatecartQuantity()
{

let deleteProduct=document.querySelectorAll('.delete-button');
 deleteProduct.forEach((button)=>
{
    button.addEventListener('click',()=>{
         const delproductId= button.dataset.id;
         const index=cart.find(item=>item.id===delproductId);
         if(index!==-1){
            cart.splice(index,1);

         }
           localStorage.setItem('cart',JSON.stringify(cart));
        button.closest('.cart-items').remove();
        priceSumary();
    });
});
let increaseButton=document.querySelectorAll('.increase-button');
increaseButton.forEach((button)=>{
  button.addEventListener('click',()=>{

    const productId = button.dataset.id;

    cart.forEach((item)=>{
      if(item.id === productId){
        item.quantity += 1;
  
        button.parentElement.querySelector('.product-quantity').innerText = item.quantity;

      }
    });

    localStorage.setItem('cart', JSON.stringify(cart));
     priceSumary();

  });
});
let decreaseButton=document.querySelectorAll('.decrease-button');
decreaseButton.forEach((button)=>{
   button.addEventListener('click',()=>{
     const productId=button.dataset.id;
    cart.forEach((item)=>
    {   
        if(item.id=== productId && item.quantity >1)
        {
            item.quantity-=1;
     button.parentElement.querySelector('.product-quantity').innerText = item.quantity;
        }
    });
        localStorage.setItem('cart', JSON.stringify(cart));
         priceSumary();
});
});
}
updatecartQuantity();
