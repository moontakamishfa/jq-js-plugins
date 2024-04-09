// js

// wow
new WOW().init();

// aos
AOS.init({
  offset: 100, 
  delay: 50, 
  duration: 500, 
  easing: 'linear',
});


//jq 

$(document).ready(function(){
  // preloader
$('.js-preloader').preloadinator({
  scroll: false,
  minTime: 300,
  animation: 'fadeOut',
  animationDuration: 400,

});

// particles
$('.canvas').particles({
          connectParticles: true,
          color: '#ffffff',
          size: 3,
          maxParticles: 80,
          speed: 1.8
        });




});    
