// simple reveal delay for buttons (optional effect)
window.addEventListener("load", () => {
  const btns = document.querySelector(".store-buttons");
  if (btns) {
    btns.style.opacity = "0";
    btns.style.transform = "translateY(20px)";
    btns.style.transition = "0.6s ease";
    setTimeout(() => {
      btns.style.opacity = "1";
      btns.style.transform = "translateY(0)";
    }, 400);
  }
});

const toggle = document.getElementById("storeToggle");
const nav = document.getElementById("storeNav");
const overlay = document.getElementById("storeOverlay");

if (toggle && nav && overlay) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("show");
    overlay.classList.toggle("show", open);
  });

  function closeMenu() {
    nav.classList.remove("show");
    overlay.classList.remove("show");
  }

  overlay.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}

// ===== PRODUCT INFO OVERLAY (UPDATED: render data-points into modal) =====
const infoOverlay = document.getElementById("infoOverlay");
const infoClose = document.getElementById("infoClose");
const infoTitle = document.getElementById("infoTitle");
const infoText = document.getElementById("infoText");
const infoPoints = document.getElementById("infoPoints");

function openInfo(title, text, pointsArr) {
  if (infoTitle) infoTitle.textContent = title || "Product";
  if (infoText) infoText.textContent = text || "";

  // Render points ONLY in details (modal)
  if (infoPoints) {
    infoPoints.innerHTML = "";
    (pointsArr || []).forEach((pt) => {
      const li = document.createElement("li");
      li.textContent = pt;
      infoPoints.appendChild(li);
    });
  }

  if (infoOverlay) {
    infoOverlay.classList.add("show");
    infoOverlay.setAttribute("aria-hidden", "false");
  }
}

function closeInfo() {
  if (infoOverlay) {
    infoOverlay.classList.remove("show");
    infoOverlay.setAttribute("aria-hidden", "true");
  }
}

document.querySelectorAll("[data-info]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const card = link.closest(".plan-card");
    const title = card?.querySelector("h3")?.textContent?.trim() || "Product";
    const text = card?.querySelector(".card-desc, p")?.textContent?.trim() || "";

    // points from data-points="a|b|c"
    const raw = card?.dataset.points || "";
    const pointsArr = raw
      .split("|")
      .map((s) => s.trim())
      .filter(Boolean);

    openInfo(title, text, pointsArr);
  });
});

infoClose?.addEventListener("click", closeInfo);

infoOverlay?.addEventListener("click", (e) => {
  if (e.target === infoOverlay) closeInfo();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeInfo();
});

// ===== WHATSAPP CHECKOUT =====
document.querySelectorAll(".wa-checkout").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const card = btn.closest(".plan-card");
    const product = card?.querySelector("h3")?.textContent?.trim() || "Service";
    const wa = btn.dataset.wa || "6283147587839"; // fallback kalau lupa isi data-wa

    const message = `Halo, saya mau beli/Order: ${product}. Mohon info harga, estimasi pengerjaan, dan cara order.`;
    const url = `https://wa.me/${wa}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  });
});
