const hugButton = document.getElementById("hugButton");
const hugMessage = document.getElementById("hugMessage");

hugButton.addEventListener("click", () => {
  hugMessage.textContent = "A giant teddy hug for Mona Akka! 🧸💗 You are appreciated more than words can say. 🌷";
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement("span");
    heart.textContent = ["💗", "💖", "✨", "🌸"][i % 4];
    heart.style.position = "fixed";
    heart.style.left = `${8 + Math.random() * 84}%`;
    heart.style.top = `${18 + Math.random() * 65}%`;
    heart.style.zIndex = "20";
    heart.style.fontSize = `${18 + Math.random() * 18}px`;
    heart.style.pointerEvents = "none";
    heart.style.transition = "transform 1.5s ease, opacity 1.5s ease";
    document.body.appendChild(heart);
    requestAnimationFrame(() => {
      heart.style.transform = `translateY(-90px) rotate(${Math.random() * 45 - 20}deg)`;
      heart.style.opacity = "0";
    });
    setTimeout(() => heart.remove(), 1600);
  }
});

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const closeLightbox = document.getElementById("closeLightbox");

document.querySelectorAll(".photo-card").forEach((card) => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img");
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightboxCaption.textContent = card.querySelector("figcaption").textContent;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    closeLightbox.focus();
  });
});

function closePhoto() {
  lightbox.hidden = true;
  lightboxImage.src = "";
  document.body.style.overflow = "";
}
closeLightbox.addEventListener("click", closePhoto);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closePhoto();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !lightbox.hidden) closePhoto();
});
