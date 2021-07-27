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


// When i click the hamburger the following line will execute
var isNavOpen = false;
function openNav(){
    isNavOpen = (isNavOpen)? false:true;
    
    console.log(window.innerWidth)
    if(isNavOpen == true && window.innerWidth <= 850){
       let icon = document.getElementById("hambur");
       icon.classList.remove("fa-bars")
       icon.classList.add("fa-times")
       document.getElementById("mobile-nav-content").style.display = "block"
    }
    if(isNavOpen == false){
        let icon = document.getElementById("hambur");
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
        document.getElementById("mobile-nav-content").style.display = "none"
    }
}

const allSection = document.querySelector(".home-section")
console.log(allSection)

allSection.addEventListener('click',function (){
    console.log("i am event listerner")
    isNavOpen = false;
    openNav();
})
// when the mobile nav is open then we increase the width it will work
window.addEventListener('resize', ()=>{
    if(window.innerWidth >= 850){
        isNavOpen = false
        let icon = document.getElementById("hambur");
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
        document.getElementById("mobile-nav-content").style.display = "none"
    }
});