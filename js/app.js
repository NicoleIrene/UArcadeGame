// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;  

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;

    if(this.x >= 505) {
      this.x = -150;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x,y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-princess-girl.png';

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
};

Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(pressKey) {
  switch (pressKey) {
    case 'left':
      this.x -= this.speed + 30;
      break;
    case 'up':
      this.y -= this.speed + 15;
      break;
    case 'right':
      this.x += this.speed + 30;
      break;
    case 'down':
      this.y += this.speed + 15;
      break;
  }
};


// Draw the enemy on the screen, required method for game
// Now instantiate your objects.
//sets position of all enemy bugs
var badBug1 = new Enemy(0, 100, 100);
var badBug2 = new Enemy(0, 250, 150);
var badBug3 = new Enemy(0, 150, 200);

// Place all enemy objects in an array called allEnemies
var allEnemies = [badBug1, badBug2, badBug3];

allEnemies.push(badBug1);
allEnemies.push(badBug2);
allEnemies.push(badBug3);

// Place the player object in a variable called player
var player = new Player(200, 415);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
