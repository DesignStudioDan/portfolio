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

  skill.addEventListener("mouseenter", () => {
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
  });

  skill.addEventListener("touchstart", function () {
    // タップされたときの処理
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
    // ここでCSSを適用したり、要素のスタイルを変更したりします
    // this.style.backgroundColor = "yellow";
  });
});
