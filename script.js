const cartIcon =
document.getElementById('cartIcon');

const cartSidebar =
document.getElementById('cartSidebar');

const cartItems =
document.getElementById('cartItems');

const totalPrice =
document.getElementById('totalPrice');

const notification =
document.getElementById('notification');

const searchInput =
document.getElementById('searchInput');

const menuBtn =
document.getElementById('menuBtn');

const navLinks =
document.getElementById('navLinks');

let cart = [];

/* Mobile Menu */

menuBtn.addEventListener('click',()=>{

  navLinks.classList.toggle('active');

});

/* Cart Open */

cartIcon.addEventListener('click',()=>{

  cartSidebar.classList.toggle('active');

});

/* Add To Cart */

function addToCart(name,price){

  cart.push({
    name,
    price
  });

  updateCart();

  showNotification();
}

/* Update Cart */

function updateCart(){

  cartItems.innerHTML='';

  let total = 0;

  cart.forEach((item,index)=>{

    total += item.price;

    cartItems.innerHTML += `

    <div class="cart-item">

      <span>
      ${item.name} - $${item.price}
      </span>

      <span class="remove-btn"
      onclick="removeItem(${index})">

      X

      </span>

    </div>

    `;
  });

  totalPrice.innerText =
  `Total: $${total}`;
}

/* Remove Item */

function removeItem(index){

  cart.splice(index,1);

  updateCart();
}

/* Notification */

function showNotification(){

  notification.classList.add('show');

  setTimeout(()=>{

    notification.classList.remove('show');

  },2000);
}

/* Search */

searchInput.addEventListener('keyup',()=>{

  const value =
  searchInput.value.toLowerCase();

  const products =
  document.querySelectorAll('.product-card');

  products.forEach(product=>{

    const name =
    product.dataset.name.toLowerCase();

    if(name.includes(value)){

      product.style.display='block';
    }

    else{

      product.style.display='none';
    }
  });

});

/* Filter Products */

function filterProducts(category){

  const products =
  document.querySelectorAll('.product-card');

  products.forEach(product=>{

    if(category === 'all'){

      product.style.display='block';
    }

    else if(product.classList.contains(category)){

      product.style.display='block';
    }

    else{

      product.style.display='none';
    }
  });
}