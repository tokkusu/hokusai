function testWebP(callback) {
   const webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
   
testWebP(function (support) {
   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } 
   // else {
   //    document.querySelector('body').classList.add('no-webp');
   //   }   
});

document.addEventListener('DOMContentLoaded', function () {
   
   const frame = document.querySelector('.frame');           
   
   centerX = window.innerWidth / 2;
   centerY = window.innerHeight / 2;      

   frame.addEventListener('mousemove', function (e) {
      clientX = e.pageX;
      clientY = e.pageY;      

      request = requestAnimationFrame(updatePosition);
   });         

   function updatePosition () {
      distanceX = clientX - centerX;
      distanceY = clientY - centerY;
      tiltX     = distanceY / centerY;
      tiltY     = distanceX / centerX;
      radius    = Math.sqrt(Math.pow(tiltX, 2) + Math.pow(tiltY, 2));
      degree    = radius * 24;
      
      gsap.to('.frame', 0.5, {transform: `rotate3d(${tiltX}, ${tiltY}, 0, ${degree}deg)`});      
      
   };   

   function yoyoTrue() {

      let loop = -1;
      let yoyoSwitch = true;
      let easeType = "sine.inOut";
      let tl = gsap.timeline({ repeat: `${loop}` }).yoyo(`${yoyoSwitch}`);

      tl
         .from(".picture__right-bottom-wave", {y:"-=5", x:"+=5", duration: 3, ease: `${easeType}`}, 0)
         .from(".picture__middle-bottom-wave", {y:"+=5", x:"-=5", duration: 3, ease: `${easeType}`}, 0)
         .from(".picture__middle-wave", {y:"+=2", x:"-=2", duration: 2, ease: `${easeType}`}, 0)
         .from(".picture__right-wave", {y:"+=5", x:"+=5", duration: 3, ease: `${easeType}`}, 0)
         .from(".picture__boat-right", {y:"+=20", x:"+=100", rotation: -30, transformOrigin:"0% -50%", duration: 3, ease: `${easeType}`}, 0)
         .to(".picture__left-bottom-wave", {y:"-=10", x:"-=10", duration: 3, ease: `${easeType}`}, 0);

      return tl;

   };

   function yoyoFalse() {

      let loop = -1;
      let easeType = "sine.inOut";
      let tl = gsap.timeline({repeat: `${loop}`});

      tl
         .to(".picture__left-wave", {y:"-=500", x:"+=750", duration: 3, ease: `${easeType}`}, 0)
         .to(".picture__left-wave", {y:"+=600", x:"+=150", rotation: 20, transformOrigin:"50% 50%", duration: 3, ease:`${easeType}`}, ">") 
         .to(".picture__left-foam", {y:"-=300", x:"+=780", duration: 2.5, ease:`${easeType}`}, 0)
         .to(".picture__left-foam", {y:"+=900", x:"+=250", rotation: 40, transformOrigin:"50% 50%", duration: 3.5, ease:`${easeType}`}, ">")
         .to(".picture__left-wave-copy", {y:"-=400", x:"+=780", duration: 3.5, ease:`${easeType}`}, 0)
         .to(".picture__left-wave-copy", {y:"+=500", x:"+=250", rotation: 30, transformOrigin:"50% 50%", duration: 2.5, ease:`${easeType}`}, ">")
         .to(".picture__bottom-foam", {y:"-=300", x:"+=780", duration: 3.5, ease:`${easeType}`}, 0)
         .to(".picture__bottom-foam", {y:"+=500", x:"+=150", rotation: 10, transformOrigin:"0% 50%", duration: 3.5, ease:`${easeType}`}, ">");

      return tl;
   
   };

   let masterTimeline = gsap.timeline();

      masterTimeline
         .add(yoyoTrue(), 0)
         .add(yoyoFalse(),0);
         
   frame.addEventListener('mouseleave', function () {
      gsap.to('.frame', 0.5, {transform: `rotate3d(0, 0, 0, 0deg)`});      
   });
   
});
// const swiper = new Swiper('.swiper-container', {
   
//    direction: 'horizontal',
//    speed: 800,   
//    slidesPerView: 1,
//    spaceBetween: 0,
//    centeredSlides: true,
//    loop: true,
//    autoHeight: true,

//    autoplay: {
//       delay: 3000,
//    },

//    pagination: {
//       el: '.swiper-pagination',
//       dynamicBullets: true,
//    },
  
//    navigation: {
//      nextEl: '.swiper-button-next',
//      prevEl: '.swiper-button-prev',
//    },   
// });   


// window.addEventListener('DOMContentLoaded', function () {
//    if (document.body.clientWidth > 1109) {   
//       document.querySelector('.menu').classList.remove('fixed-element');   
//       document.querySelector('.menu__list').classList.remove('fixed-element');
//       button.classList.remove('menu__btn--active');
//       menu.classList.remove('menu__list--active');
//       document.body.classList.remove('lock');

//    } else {     
//       document.querySelector('.menu').classList.add('fixed-element'); 
//       document.querySelector('.menu__list').classList.add('fixed-element');
      
//    };   
// })

// window.addEventListener('resize', function(){
//    if (document.body.clientWidth > 1109) {
//       document.querySelector('.menu').classList.remove('fixed-element');
//       document.querySelector('.menu__list').classList.remove('fixed-element');
//       button.classList.remove('menu__btn--active');
//       menu.classList.remove('menu__list--active');
//       document.body.classList.remove('lock');

//    } else {    
//       document.querySelector('.menu').classList.add('fixed-element');  
//       document.querySelector('.menu__list').classList.add('fixed-element');
//    };
// });

// // Собираем все элементы в массив
// const fixedElPadding = document.querySelectorAll('.fixed-element');  

// // Вычисляем величину компенсационного отступа
// addPadding = window.innerWidth - document.body.offsetWidth + 'px'; 

// function removepadding() {
//    if (fixedElPadding.length > 0) {
//       fixedElPadding.forEach(function (i) {
//          i.style.paddingRight = '0px';
//       }); 
//    };

//    document.body.style.paddingRight = '0px';   
// };

// // Меню бургер
// const button  = document.querySelector('.menu__btn');
// const menu    = document.querySelector('.menu__list');
// // const logo    = document.querySelector('.header-top__img');
// const links   = document.querySelectorAll('.menu__list-link');

// button.addEventListener('click', function () {

//    button.classList.toggle('menu__btn--active');
//    menu.classList.toggle('menu__list--active');
//    document.body.classList.toggle('lock'); 

//    if (!document.body.classList.contains('lock')) {
      
//       // Компенсация скролла      
//       removepadding();    

//    } else {
//       fixedElPadding.forEach(function (i) {
//          i.style.paddingRight = addPadding;
//       });

//       document.body.style.paddingRight = addPadding;       
//    };         
// });

// links.forEach(function (link) {
//    link.addEventListener('click', function () {
           
//       button.classList.remove('menu__btn--active');
//       menu.classList.remove('menu__list--active');
//       document.body.classList.remove('lock');

//       // Компенсация скролла         
//       removepadding(); 
//    });
// });