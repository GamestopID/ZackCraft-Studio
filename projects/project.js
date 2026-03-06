// ===== NAV MENU =====
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navLinks");
const overlay = document.getElementById("overlay");

if (toggle && nav && overlay) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("show");
    overlay.classList.toggle("show", isOpen);
    toggle.classList.toggle("active", isOpen);
  });

  function closeMenu() {
    nav.classList.remove("show");
    overlay.classList.remove("show");
    toggle.classList.remove("active");
  }

  overlay.addEventListener("click", closeMenu);

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}

// ===== PROJECT GRID ANIMATION =====
const categoryBtns = document.querySelectorAll(".category-btn");
const projectItems = Array.from(document.querySelectorAll(".project-item"));

function showItemsWithStagger(items) {
  items.forEach((item, index) => {
    item.style.display = "grid";
    item.style.opacity = 0;
    item.style.transform = "translateY(20px)";
    item.classList.add("show");

    setTimeout(() => {
      requestAnimationFrame(() => {
        item.style.opacity = 1;
        item.style.transform = "translateY(0)";
      });
    }, index * 70);
  });
}

// initial show all items (tampilkan hanya plugin)
window.addEventListener("load", () => {
  const pluginItems = Array.from(
    document.querySelectorAll(".project-item[data-category='plugin']"),
  );
  showItemsWithStagger(pluginItems);
});

// Filter kategori tombol (hanya plugin yang aktif)
categoryBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    categoryBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Hide all items first
    projectItems.forEach((item) => {
      item.style.opacity = 0;
      item.style.transform = "translateY(20px)";
      item.classList.remove("show");
    });

    setTimeout(() => {
      // Show only the items based on the filter
      projectItems.forEach((item) => {
        if (filter === "all" || item.dataset.category === filter) {
          item.style.display = "grid";
        } else {
          item.style.display = "none";
        }
      });

      // Show filtered items with animation
      const filteredItems = projectItems.filter(
        (item) => filter === "all" || item.dataset.category === filter,
      );
      showItemsWithStagger(filteredItems);
    }, 400);
  });
});

// ===== HOVER DOWNLOAD BUTTON =====
document.querySelectorAll(".btn.download-btn").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
    btn.style.boxShadow = "0 12px 28px rgba(76,40,168,.55)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
    btn.style.boxShadow = "none";
  });
});
