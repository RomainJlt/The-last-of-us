document.addEventListener('DOMContentLoaded', function() {
    var zombie = document.getElementById('zombie');
    
    function getRandomPosition() {
        var maxX = window.innerWidth - zombie.clientWidth;
        var maxY = window.innerHeight - zombie.clientHeight;
        
        var randomX = Math.floor(Math.random() * maxX);
        var randomY = Math.floor(Math.random() * maxY);
        
        return { x: randomX, y: randomY };
    }

    function moveZombie() {
        var newPosition = getRandomPosition();
        zombie.style.transform = 'translate(' + newPosition.x + 'px, ' + newPosition.y + 'px)';
    }

    //fréquence de déplacement du zombie
    setInterval(moveZombie, 5000); 
});