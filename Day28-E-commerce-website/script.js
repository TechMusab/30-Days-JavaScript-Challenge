let counter=document.querySelector(".count")
let bagarray;
let mycontainer=  document.querySelector(".items-container");
function addToBag(id, quantity) {
  bagarray=bagarray || [];
  const existingItem = bagarray.find(item => item.id === id);
  if (existingItem) {
    existingItem.quantity = quantity;
  } else {
    const obj = {
      id: id,
      quantity: quantity,
    };

    bagarray.push(obj);
    counter.innerHTML = bagarray.length;
  }
  localStorage.setItem("bagarray",JSON.stringify(bagarray));
  console.log(bagarray);
}

function displayitems() {
  if(!mycontainer){
    return;
  }
  let newhtml = "";
  for (let item = 0; item < items.length; item++) {
    newhtml += `<div class="items">
        <img class="image-class" src="${items[item].image}" alt="Item image">
        <div class="quantity-selector">
          <label>Quantity</label>
          <input type="number" class="quantity-input" min="1" max="10" value="1" data-item-id="${items[item].id}">
        </div>
        <div class="rating">
            ${items[item].rating.stars} ⭐ | ${items[item].rating.count}
        </div>
        <div class="company-name">
            ${items[item].company}
        </div>
        <div class="item-name">
           ${items[item].item_name}
        </div>
        <div class="pricing">
            <span class="current-price">
                ${items[item].current_price}
            </span>
            <span class="old-price">
                ${items[item].original_price}
            </span>
            <span class="discount">
               (${items[item].discount_percentage}%)
            </span>
        </div>
        <button class="add-to-bag-btn" data-item-id="${items[item].id}">
            Add to Bag
        </button>
      </div>`;
  }
  mycontainer.innerHTML = newhtml;

  document.querySelectorAll('.add-to-bag-btn').forEach(button => {
    button.addEventListener('click', function() {
      const itemId = this.getAttribute('data-item-id');
      const quantityInput = document.querySelector(`input[data-item-id="${itemId}"]`);
      const quantity = Number(quantityInput.value);
      addToBag(itemId, quantity);
    });
  });
}
displayitems();

