const progressBarBorder = document.getElementById("progress-bar");

const scroll = window.addEventListener("scroll", () => {
  let height = document.body.scrollHeight - window.innerHeight;
  let scrollPosition = document.documentElement.scrollTop;
  let width = (scrollPosition / height) * 100;
  progressBarBorder.style.width = `${width}%`;
});

export default scroll;
