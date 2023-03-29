var isDragging = false;
var mouseX, mouseY;
var windowX, windowY;

var windowElement = document.querySelector('.window');
var titleBarElement = document.querySelector('.title-bar');

titleBarElement.addEventListener('mousedown', function (event) {
  isDragging = true;

  mouseX = event.clientX;
  mouseY = event.clientY;

  windowX = windowElement.offsetLeft;
  windowY = windowElement.offsetTop;
});

document.addEventListener('mousemove', function (event) {
  if (isDragging) {
    var deltaX = event.clientX - mouseX;
    var deltaY = event.clientY - mouseY;

    windowElement.style.left = windowX + deltaX + 'px';
    windowElement.style.top = windowY + deltaY + 'px';
  }
});

document.addEventListener('mouseup', function (event) {
  isDragging = false;
});
