document.addEventListener('DOMContentLoaded', function () {
  const cart = document.querySelector('.cart');
  const cartfield = document.querySelector('.cart-field');
  const addButtons = document.querySelectorAll('.add');

  for (const addButton of addButtons) {
    addButton.addEventListener('click', function (event) {
      event.preventDefault();
      const quantityInput = addButton.closest('.item').querySelector('.quantity-select input');
      const quantityValue = parseInt(quantityInput.value) || 1;

      const item = cart.getAttribute('data-count') || 0;
      cart.setAttribute('data-count', Number(item) + quantityValue);
      cart.classList.add('on');

      // Image animated to cart
      const parent = addButton.closest('.item');
      const image = parent.querySelector('img');
      const span = document.createElement('span');
      span.className = 'image-carior';
      parent.insertBefore(span, parent.lastElementChild);

      const s_image = image.cloneNode(false);
      span.appendChild(s_image);
      span.classList.add('active');

      setTimeout(() => {
        span.classList.remove('active');
        span.removeChild(s_image);
      }, 500);

      // Copy and paste item to cart field
      const clone = parent.cloneNode(true);
      clone.querySelector('.add').style.display = "none";
      clone.querySelector('.add').removeAttribute('class');
      cartfield.appendChild(clone);

      // Show cart field if it was previously hidden
      if (!cartfield.classList.contains('display')) {
        cartfield.classList.add('display');
      }
    });
  }

  // Toggle cart visibility
  cart.onclick = function () {
    cartfield.classList.toggle('display');
    // Check if the cart field is empty and show a message
    if (cartfield.childElementCount === 0) {
      const emptyMessage = document.createElement('p');
      emptyMessage.textContent = 'Cart is empty.';
      cartfield.appendChild(emptyMessage);
    }
  };

  // Handle quantity change
  const quantityInput = document.querySelector('.quantity-select input');
  quantityInput.addEventListener('input', function () {
    const quantityValue = this.value;
    console.log('Quantity changed to:', quantityValue);
    // Add your logic to handle quantity change here
  });
});


