const toggle = document.getElementById("navToggle");
const nav = document.getElementById("navMenu");
const overlay = document.getElementById("navOverlay");

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

// ===== WHATSAPP CHECKOUT (HOSTING PLANS) =====
const WA_NUMBER = "6288277372755"; // GANTI: nomor WA tujuan (tanpa +)

document.querySelectorAll(".plan-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = btn.closest(".plan-card");
    const plan = card?.dataset.plan || "Paket";
    const rawPrice = card?.dataset.price || "";
    const priceText =
      rawPrice && rawPrice !== "custom"
        ? `Rp${Number(rawPrice).toLocaleString("id-ID")}/bulan`
        : "Custom";

    // Ambil button text untuk konteks
    const action = btn.textContent.trim();

    const message =
      action.toLowerCase().includes("contact") || rawPrice === "custom"
        ? `Halo, saya ingin konsultasi paket ${plan} (Custom). Mohon info opsi resource, estimasi harga, dan cara order.`
        : `Halo, saya mau beli paket Hosting ${plan} (${priceText}). Mohon info langkah order dan pembayarannya.`;

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  });
});
