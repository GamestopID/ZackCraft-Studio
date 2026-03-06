// ===== NAV MENU =====
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navLinks");
const overlay = document.getElementById("overlay");

if(toggle && nav && overlay){
  toggle.addEventListener("click",()=>{
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

  document.addEventListener("keydown",e=>{
    if(e.key==="Escape") closeMenu();
  });
}

// ===== SOCIAL SECTION ANIMASI LOAD =====
document.addEventListener("DOMContentLoaded", () => {
  const socialCards = document.querySelectorAll(".social-card");

  socialCards.forEach(card => {
    // langsung tampil dengan animasi
    card.style.opacity = 1;
    card.style.transform = "translateY(0)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });
});

