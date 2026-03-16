import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { cart } from "./cart.js";
import { priceSumary } from "./pricesummary.js";
let today=dayjs();
 export const todayDate=today.format(' dddd DD,MMMM');
 export const firstChoiceDate=today.add(5,'day').format(' dddd DD,MMMM');
 export const secondChoiceDate=today.add(7,'day').format('dddd DD,MMMM');

export function deliveryDateUpdate()
{  document.querySelectorAll('.delivery-date-section input').forEach((input)=>{
       input.addEventListener('change',()=>{

 const productId = input.name
 const deliveryCost = Number(input.value)

 const deliveryDate = input
   .closest('.delivery-label')
   .querySelector('.order-date')
   .innerText

 const product = cart.find(p => p.id === productId)

 if(product){
   product.deliveryCost = deliveryCost
   product.deliveryDate = deliveryDate
 }

 localStorage.setItem('cart', JSON.stringify(cart))
 updateFinal();
 priceSumary();

})
    });
    
}
function updateFinal()
{
let finalDate=document.querySelectorAll('.final-date');
finalDate.forEach((date,index)=>
{
  date.innerHTML=cart[index].deliveryDate;
});

}

updateFinal();

 

deliveryDateUpdate();