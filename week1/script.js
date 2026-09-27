
document.querySelector("#btn").addEventListener("click", () => {
  document.querySelector("#title").textContent = "안녕하세요!";
});

document.querySelector("#color").addEventListener("click", () => {
  const colors = ["lightblue", "pink", "lightgreen", "khaki"];
  const random = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = random;
});

let count = 0;
document.querySelector("#plus").addEventListener("click", () => {
  count++;
  document.querySelector("#count").textContent = count;
});