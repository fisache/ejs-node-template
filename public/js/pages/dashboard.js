$(document).ready(function() {
  var newUrl = 'dashboard'
  history.pushState(null, null, newUrl);
  $("#frame-contents").load("/contents/dashboard");
});
