$(document).ready(function() {
  var newUrl = 'tables'
  history.pushState(null, null, newUrl);
  $("#frame-contents").load("/contents/tables");
});
