var sliderIndex = 0;
var sliderCounter = ["Developer", "Code", "Web Design"];

var sliderValue = document.querySelector("#SliderValue");

function slide() {
  if (sliderIndex >= sliderCounter.length) {
    sliderIndex = 0;
  }

  sliderValue.innerHTML = "";
  sliderValue.classList.remove("holder-animation");
  void sliderValue.offsetWidth;
  sliderValue.classList.add("holder-animation");

  for (var i = 0; i < sliderCounter[sliderIndex].length; i++) {
    let letterDiv = document.createElement("div");
    letterDiv.innerHTML = sliderCounter[sliderIndex][i];
    if (letterDiv.innerHTML == "") {
      letterDiv.innerHTML = "&nbsp;";
    }
    letterDiv.classList.add("start");
    letterDiv.classList.add("animation");
    letterDiv.style.animationDelay = i / 10 + "s";
    sliderValue.appendChild(letterDiv);
  }

  sliderIndex++;
}

slide();
setInterval(slide, 2000);

// MENU

$(".menu-btn").click(function () {
  $(".menu").toggleClass("active");
  $(".menu-btn i").toggleClass("active");
});

// scrollanimation

const sr = ScorllReveal({
  origin: "top",
  disance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".destaque-texto", {});
sr.reveal(".home-img", { delay: 200 });

sr.reveal(".cabecalho", {});

const btnDownload = document.querySelector('#download')
