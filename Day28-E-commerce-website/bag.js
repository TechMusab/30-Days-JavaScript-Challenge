
const Convenience=99;
let obj;
onload();
function onload(){
    loadBagItemsobjects();
    displayBagItems();
    displaybagsummary();
}
function loadBagItemsobjects(){
  bagarray=JSON.parse(localStorage.getItem('bagarray'));
   obj= bagarray.map(item=>{
        for(let i=0;i<items.length;i++){
            if(item.id==items[i].id){
              items[i]["quantity"]=item.quantity;
              console.log(items[i]);
                return items[i];// Now the concept is clear . it is searching each item id in bag with every id in items and returning the matching item based on item id
            }
        }

    })
}
function displayBagItems(){
    let container=document.querySelector('.bag-items-container');
    let innerhtml='';
    obj.forEach(bagitem => {
        innerhtml+=generateitemhtml(bagitem);
    });
    container.innerHTML=innerhtml;
}
function removeFromBag(itemid){
bagarray=bagarray.filter(bagitem=>bagitem.id!=itemid);
localStorage.setItem('bagarray', JSON.stringify(bagarray));
loadBagItemsobjects();
displayBagItems();
displaybagsummary();
}

function displaybagsummary(){
    let summarycontainer = document.querySelector(".bag-summary");
    let total_items=obj.length;
    let totalMRP=0;
    let discount=0;
    obj.forEach(item=>{
        totalMRP+=item.quantity*item.original_price;
        discount+=item.quantity*item.original_price-item.current_price*item.quantity;
    })
    let total=totalMRP-discount + Convenience;
    summarycontainer.innerHTML=`
    <div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (${total_items} Items) </div>
    <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">${totalMRP}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Discount on MRP</span>
      <span class="price-item-value priceDetail-base-discount">${discount}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Convenience Fee</span>
      <span class="price-item-value">Rs 99</span>
    </div>
    <hr>
    <div class="price-footer">
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value">${total}</span>
    </div>
  </div>
  <button class="btn-place-order">
    <div class="css-xjhrni">PLACE ORDER</div>
  </button>
</div>
    `
}
function generateitemhtml(item){
return    `<div class="bag-item-container">
<div class="item-left-part">
  <img class="bag-item-img" src="../${item.image}">
</div>

<div class="item-right-part">
  <div class="company">${item.company}</div>
  <div class="item-name">${item.item_name}</div>
  <div class="price-container">
    <span class="current-price"> ${item.current_price}</span>
    <span class="original-price">${item.original_price}</span>
    <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
  </div>
  <div class="return-period">
    <span class="return-period-days">${item.return_period}</span> return available
  </div>
  <div class="delivery-details">
    Delivery by
    <span class="delivery-details-days">${item.delivery_date}</span>
  </div>
  <div class="quantity-selector">
  <label>Quantity</label>
  <input type="number" class="quantity-input" min="1" max="10" value=${item.quantity} data-item-id="${item.id}">
</div>
</div>

<div class="remove-from-cart" onclick="removeFromBag(${item.id});">X</div>
</div>`
}