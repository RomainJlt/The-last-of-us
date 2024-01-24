var imageContainer = document.getElementById('imageContainer');

document.addEventListener('mousemove', function(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    imageContainer.style.transform = 'translate(' + mouseX + 'px, ' + mouseY + 'px)';
});
