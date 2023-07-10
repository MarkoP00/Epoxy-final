//Appearing-desapearing hamburger menu
const headerBtn = document.querySelector('#header-btn');
const hamburgerMenu = document.querySelector('.hamburger-menu');

headerBtn.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');

    if (hamburgerMenu.classList.contains('active')) {
        headerBtn.style.transform = 'rotate(90deg)';
    } else {
        headerBtn.style.transform = 'rotate(0deg)';
    }
});
//Scrolling into sections
const startLink = document.querySelector('.start-link');
const section1 = document.querySelector('.section1');
const logo = document.querySelector('.logo');

const scrollToStart = startLink.addEventListener('click', (e) => {
    e.preventDefault();
    section1.scrollIntoView({behavior:"smooth"});
})
logo.addEventListener('click', (e) =>{
    e.preventDefault();
    section1.scrollIntoView({behavior:"smooth"});
});

const photoGalleryLink = document.querySelector('.photo-gallery-link');
const section2 = document.querySelector('.section2');

const scrollToGallery = photoGalleryLink.addEventListener('click', (e) => {
    e.preventDefault();
    section2.scrollIntoView({behavior:"smooth"});
})

const orderLink = document.querySelector('.order-link');
const section3 = document.querySelector('.section3');

const scrollToOrder = orderLink.addEventListener('click', (e) => {
    e.preventDefault();
    section3.scrollIntoView({behavior:"smooth"});
});
//Scrolling event on hamburger menu buttons
const hamburgerButton = document.querySelectorAll('.ham-btn');
const sections = document.querySelectorAll('section');

hamburgerButton.forEach((button, index) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      sections[index].scrollIntoView({ behavior: 'smooth' });
    });
  });

// //Adding events to buttons (open order)
const orderBtn = document.querySelectorAll('.order-btn');
orderBtn.forEach((button) =>{
    button.addEventListener('click', (e) => {
        e.preventDefault();
        section3.scrollIntoView({behavior: "smooth"});
    })
})


//Collecting input
const orderInput = document.querySelectorAll('#order-input');
const submitOrderBtn = document.querySelector('.submit-order-btn');

let orderObject = [];

const addToObj = (ev) => {
    ev.preventDefault();
    let hasSomeEmptyValue = false;

    orderInput.forEach((el) => {
        if(el.value === '') {
            hasSomeEmptyValue = true;
        }
    });
    if(hasSomeEmptyValue){
        alert('Molim vas da popunite sva polja ');
        return;
    }
    alert('Porudzbina poslata! Javicemo vas se uskoro!')

    const orderInfo = {
        date: Date(),
        name: document.querySelector('.name').value,
        street: document.querySelector('.street').value,
        city: document.querySelector('.city').value,
        email: document.querySelector('.email').value,
        numberOfOrderedPicture: document.querySelector('#mini-numb').value,
        phoneNum: document.querySelector(".phoneNum").value
    };
    orderObject.push(orderInfo);
    document.querySelector('form').reset();

    console.log('New order', {orderObject});
    localStorage.setItem('MyNewOrders',JSON.stringify(orderObject));
}
document.addEventListener('DOMContentLoaded', () => {
submitOrderBtn.addEventListener('click',addToObj);
})


