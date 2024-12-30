const poemLines = [
  "Bir tanışma anı, bir yeni başlangıç, 🌹",
  "Gözlerinde beliren umut, bir ışık, 🌹",
  "Yolun başındayız, adımlar dikkatli, 🌹",
  "Ama her şeyde bir güzellik var, belki de gizli, 🌹",
  "İçinde barındırdığın güzellikler var, 🌹",
  "Bunu görmek, tanımak, insanı mutlu eder, 🌹",
  "Her şeyin zamanı var, biz de biraz zaman, 🌹",
  "Birlikte keşfederiz, hayatı yavaşça, belki bir zaman. 🌹"
];

let currentLine = 0;
const poemContainer = document.getElementById("poemContainer");
const showPoemBtn = document.getElementById("showPoemBtn");
const poemScreen = document.getElementById("poemScreen");
const bearScreen = document.getElementById("bearScreen");

showPoemBtn.addEventListener("click", function() {
  document.getElementById("startScreen").style.display = "none";
  poemScreen.style.display = "flex";
  displayPoem();
});

function displayPoem() {
  if (currentLine < poemLines.length) {
    const line = document.createElement("p");
    line.textContent = poemLines[currentLine];
    poemContainer.appendChild(line);

    line.style.opacity = 0;
    setTimeout(() => {
      line.style.transition = "opacity 2s ease-in";
      line.style.opacity = 1;
    }, 100);

    setTimeout(() => {
      currentLine++;
      setTimeout(displayPoem, 500); // 5 saniye sonra bir sonraki satır
    }, 5000); // Satırların 5 saniye kalmasını sağlar
  } else {
    setTimeout(() => {
      poemScreen.style.display = "none";
      bearScreen.style.display = "flex";
    }, 1000);
  }
}

