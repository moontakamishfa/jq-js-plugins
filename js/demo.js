// counter up start
       $('.counter').counterUp({
    delay: 10,
    time: 1000
});
// animated counter up
$(".count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 4000,
        easing: "swing",
        step: function (now) {
          now = Number(Math.ceil(now)).toLocaleString('en');
                                $(this).text(now);
        },
      }
    );
});
// natural counting up
$(function(){
  $('#demo').counto(12345, 3000);
});
       
       // countdown
       $("#countDown").countdownTimer({
  time: 5,
  callback: function () {
    alert("Time's up!");
  },
});
       // tel id
       $("#telephone").intlTelInput({
  // options here
});
       // mixitup
       var mixer = mixitup('#hello', {
    animation: {
        duration: 300
    }

});