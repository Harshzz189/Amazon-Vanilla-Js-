export let cart = JSON.parse(localStorage.getItem('cart')) || [];
import{todayDate,firstChoiceDate,secondChoiceDate} from "./deliverydate.js"
import { updatecartQuantity } from "./updatingqunatities.js";
import { priceSumary } from "./pricesummary.js";
import { deliveryDateUpdate } from "./deliverydate.js";
let changed = false;

cart.forEach((item)=>{
 if(item.deliveryCost === undefined){
  item.deliveryCost = 0;
  item.deliveryDate = secondChoiceDate;
  changed = true;
 }
});

if(changed){
 localStorage.setItem('cart', JSON.stringify(cart));
}
let cartDetails = document.querySelector('.selected-list');

let html = '';

cart.forEach((product)=>{

html += `
     <div class="cart-items">
      <div class="image-container">
      <div class="final-date"></div>
          <img class="selected-item-image" src="${product.image}">
      </div>
      <div class="product-info-section">

          <div class="product-id-container">
              <p class="product-id-cart">${product.name}</p>
          </div>

          <div class="delivery-date-section">
              <label class="delivery-label">
                 <input type="radio" name="${product.id}" value="1000"
                   ${Number(product.deliveryCost) === 1000 ? "checked" : ""}>
                  <div class="delivery-date">
                  <span class="order-date">${todayDate} </span>
                  <span class="delivery-cost"> 1000/-</span>
                  </div>
              </label>

              <label class="delivery-label">
                 <input type="radio" name="${product.id}" value="500"
                   ${Number(product.deliveryCost) === 500 ? "checked" : ""}>
                  <div class="delivery-date">
                  <span class="order-date">${firstChoiceDate}</span>
                  <span class="delivery-cost"> 500/-</span>
                  </div>
              </label>

              <label class="delivery-label">
                  <input type="radio" name="${product.id}" value="0"
                    ${Number(product.deliveryCost) === 0 ? "checked" : ""}>
                  <div class="delivery-date">
                  <span class="order-date">${secondChoiceDate} </span>
                  <span class="delivery-cost">Free</span>
                  </div>
              </label>
          </div>

          <div class="buttons-container">

              <div class="button-section">
                  <button class="decrease-button"
                  data-id="${product.id}">-</button>

                  <div class="product-quantity">${product.quantity}</div>

                  <button class="increase-button"
                  data-id="${product.id}">+</button>
              </div>

              <button class="delete-button"
              data-id="${product.id}">
                  <i class="fa-solid fa-trash-can"></i>
              </button>

          </div>
      </div>
    </div>
`
})
if(cartDetails){
cartDetails.innerHTML = html;
}
cart.forEach(product => {
  const selected = document.querySelector(
    `input[name="${product.id}"][value="${product.deliveryCost}"]`
  );
  if (selected) {
    selected.checked = true;
  }
});

let billingContainer=document.querySelector('.address-billing-container')
if(billingContainer)
billingContainer.innerHTML=`
 <div class="heading-container">
                <span class="heading">Order-Summary</span>
            </div>
            <div class="order-details">
                <div class="order-details-text">
                 <p class="products-price text">Price:</p>
                <p class="shipping-cost text">Shipping cost:</p>
                <p class="total-cost text"> Total cost :</p>
                </div>
                <div class="order-details-money">
                <div class="price-coloumn">
                <i class="fa-solid fa-indian-rupee-sign"></i>
                <p class="price-products money">
                </p>
                </div>
                <div class="price-coloumn">
                <i class="fa-solid fa-indian-rupee-sign"></i>
                <p class="shipping-cost-money money">
                </p>
                </div>
                <div class="price-coloumn">
                <i class="fa-solid fa-indian-rupee-sign"></i>
                <p class="total-cost-money money">
                </p>
                </div>
                </div>
            </div>
            <div class="placing-button-container">
                <a href="../htmlcodes/order.html"><button class="order-button">Place your Order</button></a>
            </div>
`
updatecartQuantity();
priceSumary();
deliveryDateUpdate();










 

