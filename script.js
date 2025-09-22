// スクロールで要素をふわっと表示
const elements = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// スキル星アニメーション（0.5対応）
document.querySelectorAll(".skill").forEach((skill) => {
  const stars = skill.querySelectorAll(".star");
  const level = parseFloat(skill.getAttribute("data-level"));

  const elements = document.querySelectorAll(".skill");
  window.addEventListener("scroll", () => {
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 300) {
        stars.forEach((star, index) => {
          setTimeout(() => {
            const starValue = index + 1;
            if (starValue <= Math.floor(level)) {
              star.classList.add("full", "animate");
              star.textContent = "★";
            } else if (starValue === Math.ceil(level) && level % 1 === 0.5) {
              star.classList.add("half", "animate");
              star.textContent = "☆";
            } else {
              star.textContent = "☆";
            }
          }, index * 100);
        });
      }
    });
  });
});

// スキルhoverのタッチデバイス対応
const hoverElements = document.querySelectorAll(".skill");

hoverElements.forEach((element) => {
  element.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});

// カードをクリックしたら反転させる
const cardElements = document.querySelectorAll(".promotion-item");

cardElements.forEach((element) => {
  element.addEventListener("click", function () {
    this.classList.toggle("is-flipped");
  });
});
