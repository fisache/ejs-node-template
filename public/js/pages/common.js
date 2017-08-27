window.onpopstate = function(event) {
  loadStateContent(event.state);
};

function viewContents(contents) {
  // var newUrl = location.href;
  // newUrl = newUrl.replace(/#*/ig, '');
  // newUrl += '#/'+contents
  history.pushState({contents:contents}, null, contents);
  $("#frame-contents").load("/contents/"+contents);
}

function loadStateContent(state) {
  $("#frame-contents").load("/contents/"+state.contents);
}
