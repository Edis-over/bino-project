//Button back to top

$(".btnBackTop").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

//Stats Counter

$(".counter").each(function () {
  $(this)
    .prop("counter", 0)
    .animate(
      { counter: $(this).text() },
      {
        duration: 10000,
        easing: "linear",
        step: function () {
          $(this).text(Math.ceil(this.counter));
        },
      }
    );
});
