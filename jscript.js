//Button back to top

$("#btnBackTop").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

// Scrolling text;
$(window).scroll(testScroll);
let viewed = false;
function isScrolledIntoView(elem) {
  const docViewTop = $(window).scrollTop();
  const docViewBottom = docViewTop + $(window).height();
  const elemTop = $(elem).offset().top;
  const elemBottom = elemTop + $(elem).height();
  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}
function testScroll() {
  if (isScrolledIntoView($("#check-out-stats")) && !viewed) {
    viewed = true;
    $(".counter").each(function () {
      $(this)
        .prop("counter", 0)
        .animate(
          { counter: $(this).text() },
          {
            duration: 3000,
            step: function () {
              $(this).text(Math.ceil(this.counter));
            },
          }
        );
    });
  }
}
