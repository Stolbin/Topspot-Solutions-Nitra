const scrollTop = document.getElementById("scrolltop");

window.onscroll = () => {
  if (window.scrollY > 100) {
    scrollTop.style.opacity = "1";
    scrollTop.style.transition = "opacity 0.5s ease";
  } else {
    scrollTop.style.opacity = "0";
    scrollTop.style.transition = "opacity 0.5s ease";
  }
};
