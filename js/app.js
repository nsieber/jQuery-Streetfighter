$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    // play hadouken sound
    $('.ryu-ready').hide();
    $('.hadouken').show();
    $('.ryu-throwing').show();
    // animate hadouken to the right
  })
  .mouseup(function() {
    $('.ryu-ready').show();
    $('.ryu-throwing').hide();
  });
});