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


//   The following code is for highlighting the nav item when scrolling the webpage on the section

const sections = document.querySelectorAll("section");
const navLists = document.querySelectorAll(".nav-items ul li")
const mobNavLists = document.querySelectorAll(".mobile-links ul li")
console.log(sections,navLists,mobNavLists)

window.addEventListener('scroll',()=>{
    let current = '';
    sections.forEach(section =>{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= sectionTop){
            current = section.getAttribute('id');
        }
    })
    navLists.forEach(li=>{
        li.classList.remove('active')
        if(li.classList.contains(current)){
            li.classList.add('active')
        }
    })

    // this is for mobile screen
    mobNavLists.forEach(li=>{
        li.classList.remove('active')
        if(li.classList.contains(current)){
            li.classList.add('active')
        }
    })
})