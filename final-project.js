$(document).ready(function() {
//pauses all videos when the page is loaded
  $('video').each(function() {
    $(this).get(0).pause();
  });
//when the mouse is over the carousel it will play the video according to the active slide in view
  document.getElementById('video-carousel-example').addEventListener('mouseover', function() {
    if ($('.videoCarousel0').hasClass('active')) {
      $('.video0').get(0).play();
    }
    else if ($('.videoCarousel1').hasClass('active')) {
      $('.video1').get(0).play();
    }
    else if ($('.videoCarousel2').hasClass('active')) {
      $('.video2').get(0).play();
    }
  });
//when the mouse is out of the carousel
  document.getElementById('video-carousel-example').addEventListener('mouseout', function() {
    $('video').each(function() {
      $(this).get(0).pause();
    });
  });
});
