document.addEventListener('DOMContentLoaded', function() {
    const btnMinus = document.querySelectorAll('.btn-minus');
    const btnPlus = document.querySelectorAll('.btn-plus');
    const btnDelete = document.querySelectorAll('.btn-delete');
    const btnLike = document.querySelectorAll('.btn-like');
    const totalPriceElement = document.getElementById('total-price');
  
    let totalPrice = 0;
  
    function updateTotalPrice() {
      const quantities = document.querySelectorAll('.quantity');
      let newTotalPrice = 0;
      quantities.forEach((quantity, index) => {
        const price = parseFloat(quantity.parentElement.previousElementSibling.querySelector('p').textContent.slice(1));
        const itemQuantity = parseInt(quantity.textContent);
        newTotalPrice += price * itemQuantity;
      });
      totalPrice = newTotalPrice;
      totalPriceElement.textContent = totalPrice.toFixed(2);
    }
  
    btnMinus.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        const quantity = btn.nextElementSibling;
        let currentQuantity = parseInt(quantity.textContent);
        if (currentQuantity > 1) {
          currentQuantity--;
          quantity.textContent = currentQuantity;
          updateTotalPrice();
        }
      });
    });
  
    btnPlus.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        const quantity = btn.previousElementSibling;
        let currentQuantity = parseInt(quantity.textContent);
        currentQuantity++;
        quantity.textContent = currentQuantity;
        updateTotalPrice();
      });
    });
  
    btnDelete.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        const cartItem = btn.closest('.cart-item');
        cartItem.remove();
        updateTotalPrice();
      });
    });
  
    btnLike.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('liked');
      });
    });
  
    updateTotalPrice();
  });