document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector('.welcome').classList.add('hidden');
        document.querySelector('.hero').classList.remove('hidden');
        document.querySelector('.about').classList.remove('hidden');
    }, 3000);
});




document.addEventListener("DOMContentLoaded", function() {
  const extra = document.querySelector(".extra");

  extra.forEach((item, index) => {
      gsap.to(item, {
          opacity: 1,
          x: 0,
          duration: 2,
          ease: "power2.out"
      });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const navLogo = document.querySelectorAll(".nav-logo");

  navLogo.forEach((item, index) => {
      gsap.to(item, {
          opacity: 1,
          x: 0,
          duration: 2,
          ease: "power2.out"
      });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const navItems = document.querySelectorAll(".nav a");

  navItems.forEach((item, index) => {
      gsap.to(item, {
          opacity: 1,
          y: 0,
          duration: 1.5,
          delay: index * 0.8, // Stagger the animation
          ease: "power2.out"
      });
  });
});
gsap.registerPlugin(TextPlugin);

      gsap.to('.left a', {
          opacity: 1,
          y: 0,
          duration: 1.5,
          delay: 0.8, // Stagger the animation
          ease: "power2.out"
      });
    
gsap.to('.text', {duration: 2, delay: 2, text: "I'm a Web Developer"});
// gsap.from('header', {duration: 1.5, y: -100, opacity: 0, ease: 'bounce'}); 
// gsap.from('.left', {duration: 1.5, delay: 1.5, x: -100, opacity: 0});
gsap.from('.left h4', {duration: 1.5, delay: 3, y: 20, opacity: 0});
gsap.from('.left h1', {duration: 1.5, delay: 3, x: -100, opacity: 0});
gsap.from('.left h2', {duration: 1.5, delay: 3, y: -20, opacity: 0});
gsap.from('.left a', {duration: 3, delay: 3, y: 0, opacity: 0});
gsap.from('.right', {duration: 1.5, delay: 3, x: 100, opacity: 0});
gsap.from('.about', {duration: 1.5, delay: 3, x: 100, opacity: 0});

const nav = document.querySelector('.nav');
const menu = document.querySelector('.extra');
menu.addEventListener('click', () =>{
    nav.classList.toggle('active');

});

document.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && !nav.contains(e.target)){
        nav.classList.remove('active');
    }
});
