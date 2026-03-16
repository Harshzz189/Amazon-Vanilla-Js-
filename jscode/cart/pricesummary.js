import { cart } from "./cart.js";
export function priceSumary(){

let totalPrice = 0;
let shippingPrice = 0;
let overallprice = 0;

cart.forEach((item) => {

  let price = Number(item.price.replaceAll(",", ""));
  totalPrice += item.quantity * price;

  shippingPrice += item.deliveryCost;

});

overallprice = totalPrice + shippingPrice;

let priceProducts = document.querySelector('.price-products');
if (priceProducts) {
  priceProducts.innerText = totalPrice.toLocaleString("en-IN");
}

let shippingmoney = document.querySelector('.shipping-cost-money');
if (shippingmoney) {
  shippingmoney.innerText = shippingPrice.toLocaleString("en-IN");
}

let overallPrice = document.querySelector('.total-cost-money');
if (overallPrice){
  overallPrice.innerText = overallprice.toLocaleString("en-IN");
}

}
