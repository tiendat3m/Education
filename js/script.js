const navbar = document.querySelector(".header .navbar"),
menuBtn = document.querySelector("#menu-btn"),
closeNav = document.querySelector("#close-navbar"),
registerBtn = document.querySelector(".account-form .register-btn"),
loginBtn = document.querySelector(".account-form .login-btn"),
loginForm = document.querySelector(".login-form"),
registerForm = document.querySelector(".register-form"),
accountBtn = document.querySelector("#account-btn"),
accountForm = document.querySelector(".account-form"),
closeForm = document.querySelector("#close-form");




menuBtn.onclick = () => {
    navbar.classList.toggle("active");
}

closeNav.onclick = () => {
    navbar.classList.remove("active");
}


registerBtn.onclick = () => {
    registerBtn.classList.add("active");
    loginBtn.classList.remove("active");
    registerForm.classList.add("active");
    loginForm.classList.remove("active")
}

loginBtn.onclick = () => {
    loginBtn.classList.add("active");
    registerBtn.classList.remove("active");
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
}

accountBtn.onclick = () => {
    accountForm.classList.add("active")
}

closeForm.onclick = () => {
    accountForm.classList.remove("active")
}



var swiper = new Swiper(".home-slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    loop:true,
    grabCursor:true,
  });


var swiper = new Swiper(".home-courses-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".teachers-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".reviews-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".logo-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
});

let faq = document.querySelectorAll(".faq .box-container .box");

faq.forEach(boxes => {
    boxes.onclick = () => {
        faq.forEach(show => show.classList.remove("active"));
        boxes.classList.toggle("active");
    };
});

document.querySelector('.load-more .btn').onclick = () =>{
    document.querySelectorAll('.courses .box-container .hide').forEach(show =>{
      show.style.display = 'block';
    });
    document.querySelector('.load-more .btn').style.display = 'none';
  };
