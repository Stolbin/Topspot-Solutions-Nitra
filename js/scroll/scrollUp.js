const scrollTop = document.getElementById("scrolltop");

window.onscroll = () => {
  if (window.scrollY > 100) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
};
