var $page = $('html, body');
$('a[href*="#home"]').click(function () {
  $page.animate(
    {
      scrollTop: $($.attr(this, 'href')).offset().top,
    },
    300
  );
  return false;
});

var $page = $('html, body');
$('a[href*="#about"]').click(function () {
  $page.animate(
    {
      scrollTop: $($.attr(this, 'href')).offset().top,
    },
    300
  );
  return false;
});

var $page = $('html, body');
$('a[href*="#product"]').click(function () {
  $page.animate(
    {
      scrollTop: $($.attr(this, 'href')).offset().top,
    },
    300
  );
  return false;
});

var $page = $('html, body');
$('a[href*="#markets"]').click(function () {
  $page.animate(
    {
      scrollTop: $($.attr(this, 'href')).offset().top,
    },
    300
  );
  return false;
});

var $page = $('html, body');
$('a[href*="#footer"]').click(function () {
  $page.animate(
    {
      scrollTop: $($.attr(this, 'href')).offset().top,
    },
    300
  );
  return false;
});