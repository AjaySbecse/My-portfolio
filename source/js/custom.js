// auto type in home section
var typed = new Typed(".animate", {
    strings: ["Mobile Developer", "Web Developer"],
    smartBackspace: true, // Default value
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    showCursor: false,
  });

  //scroll sticky of nav bar
  window.addEventListener("scroll",function(){
      var navBar = document.querySelector(".nav");
      navBar.classList.toggle("sticky",window.scrollY > 0);
  })