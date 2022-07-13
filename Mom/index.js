var images = new Array('./1.jpg', './2.jpg', './3.jpg', './4.jpg', './5.jpg');

var slices = 64;
var interval = 3500;
var numImages = images.length;
var imageIndex = 0;
var count = 0;
var timer = null;

var containerOne = document.createElement('div');
containerOne.className = 'image one';
var containerTwo = document.createElement('div');
containerTwo.className = 'image two';

for (var i = 0; i < slices; i++) {
  var div = document.createElement('div');
  containerOne.appendChild(div);
  var div = document.createElement('div');
  containerTwo.appendChild(div);
}

document.body.appendChild(containerOne);
document.body.appendChild(containerTwo);

function switchImages() {
  var newContainer = document.querySelectorAll('.image')[count % 2];
  var oldContainer = document.querySelectorAll('.image')[(count + 1) % 2];
  if (imageIndex >= numImages) imageIndex = 0;
  var im = new Image();
  im.addEventListener('load', function () {
    var nodes = newContainer.childNodes;
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].style.backgroundImage = 'url(' + images[imageIndex] + ')';
    }
    newContainer.classList.add('animate-in');
    newContainer.classList.remove('animate-out');
    oldContainer.classList.add('animate-out');
    oldContainer.classList.remove('animate-in');
    newContainer.style.opacity = 1;
    oldContainer.style.opacity = 0;
    count++;
    imageIndex++;
    timer = setTimeout(switchImages, interval);
  });
  im.src = images[imageIndex];
}
switchImages();
