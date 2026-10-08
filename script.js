const heartField = document.querySelector("#heart-field");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (heartField) {
  const heartCount = window.matchMedia("(max-width: 520px)").matches ? 6 : 10;

  for (let index = 0; index < heartCount; index += 1) {
    const heart = document.createElement("span");
    const size = 12 + Math.random() * 17;
    heart.className = "floating-heart";
    heart.setAttribute("aria-hidden", "true");
    heart.textContent = Math.random() > 0.35 ? "♡" : "♥";
    heart.style.setProperty("--x", `${Math.random() * 100}%`);
    heart.style.setProperty("--size", `${size}px`);
    heart.style.setProperty("--alpha", `${0.22 + Math.random() * 0.35}`);
    heart.style.setProperty("--duration", `${17 + Math.random() * 17}s`);
    heart.style.setProperty("--delay", `${-Math.random() * 30}s`);
    heart.style.setProperty("--drift", `${Math.round(Math.random() * 100 - 50)}px`);
    heart.style.setProperty("--resting-y", `${8 + Math.random() * 75}vh`);
    if (reducedMotion) heart.classList.add("is-static");
    heartField.append(heart);
  }
}
