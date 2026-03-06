/* =============================
   NAV MENU SAFE
============================= */

const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navLinks");
const overlay = document.getElementById("overlay");

if(toggle && nav && overlay){

  toggle.addEventListener("click", ()=>{

    const isOpen = nav.classList.toggle("show");
    overlay.classList.toggle("show", isOpen);
    toggle.classList.toggle("active", isOpen);

  });

  function closeMenu(){
    nav.classList.remove("show");
    overlay.classList.remove("show");
    toggle.classList.remove("active");
  }

  overlay.addEventListener("click", closeMenu);

  document.querySelectorAll(".nav-links a").forEach(link=>{
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", e=>{
    if(e.key==="Escape") closeMenu();
  });

}


/* =============================
   HERO LOAD MICRO DELAY
============================= */

window.addEventListener("load",()=>{
  const hero=document.querySelector(".hero-content");
  if(hero){
    hero.style.opacity="1";
  }
});


/* =============================
   SMOOTH SCROLL (OPTIMIZED)
============================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

  anchor.addEventListener("click",function(e){

    const id=this.getAttribute("href");

    if(id.length<2) return;

    const target=document.querySelector(id);
    if(!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior:"smooth"
    });

  });

});


/* =============================
   SUPER SMOOTH REVEAL ANIMATION
   (IntersectionObserver)
============================= */

const revealElements = document.querySelectorAll(
  ".about-box, .service-box, .service-card, .feature-card, .hero-content"
);

const observer = new IntersectionObserver((entries,obs)=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){

      entry.target.classList.add("show");

      /* stop observing supaya ringan */
      obs.unobserve(entry.target);
    }

  });

},{
  threshold:0.12,
  rootMargin:"0px 0px -40px 0px"
});


revealElements.forEach(el=>{
  observer.observe(el);
});

document.querySelectorAll(".feature-card").forEach(card=>{
  card.addEventListener("mousemove",e=>{
    const rect=card.getBoundingClientRect();
    card.style.setProperty("--x",(e.clientX-rect.left)+"px");
    card.style.setProperty("--y",(e.clientY-rect.top)+"px");
  });
});