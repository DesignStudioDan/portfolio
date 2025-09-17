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
});

// document.querySelectorAll(".your-element").forEach((element) => {
//   element.addEventListener("click", () => {
//     // ホバーで行っていた処理を実行
//     element.classList.toggle("active"); // 例：アクティブクラスの切り替え
//   });
// });

// ユーザーエージェントや画面サイズでPCか判定
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;

const element = document.querySelector(".your-element");

if (isMobile) {
  // スマホの場合、タップでクラスを追加・削除
  element.addEventListener("click", function () {
    element.classList.toggle("is-hover-active");
  });
  // 念のためマウスイベントを無効化
  element.style.pointerEvents = "none";
} else {
  // PCの場合、CSSの:hoverがそのまま機能するようにする
  // この場合は特別にJavaScriptでクラスを操作する必要はない
}
