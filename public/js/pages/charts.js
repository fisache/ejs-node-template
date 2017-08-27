$(document).ready(function() {
  var newUrl = 'charts'
  history.pushState(null, null, newUrl);
  $("#frame-contents").load("/contents/charts");
});
