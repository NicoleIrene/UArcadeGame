// Enemy Class -------------
// Enemies our player must avoid
// Variables applied to each of our instances go here:

var Enemy = function(x,y,speed) {
    this.x = x; 
    this.y = y; 
    this.height = 45; 
    this.width = 65;
    this.speed = speed;  
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
      this.x = 1;
    }
    this.checkCollision();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player class --------------------
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x,y) {
    this.x = x;
    this.y = y;
    this.height = 75;
    this.width = 50;
    this.sprite = 'images/char-princess-girl.png';
};

Player.prototype.update = function(dt) {
 // multiply any movement by the dt parameter

};

Player.prototype.render = function(dt) {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// handleInput is a function to move Player
Player.prototype.handleInput = function(pressKey) {
  switch (pressKey) {
    case 'left':
      this.x -= 101;
      break;
    case 'up':
      this.y -= 83;
      break;
    case 'right':
      this.x += 101;
      break;
    case 'down':
      this.y += 83;
      break;
  }

// Keeps the player on screen within boundaries given
// Alerts player when they have reached water block 
  if (this.x > 400 ) {
      this.x = 400;
  }

  if (this.y > 435) {
      this.y = 435;
  }

  if (this.x < 0) {
      this.x = 0;
  }

  if (this.y < 0) {
      alert("You've Won!");
      this.reset();
  }
};

// Collision detection between bugs & player 
Enemy.prototype.checkCollision = function() {
  if (this.x < player.x + player.width &&
   this.x + this.width > player.x &&
   this.y < player.y + player.height &&
   this.height + this.y > player.y) {
// collision detected, reset player back to original position 
   
   player.reset();
}
};
// Reset function puts player back at
// x,y coordinates when collision detected
Player.prototype.reset = function() {
  this.x = 200;
  this.y = 415;
};

// Draws the enemy on the screen
// sets position and displays all enemy bugs
var badBug1 = new Enemy(0, 100, 100);
var badBug2 = new Enemy(0, 250, 150);
var badBug3 = new Enemy(0, 150, 130);

// All enemy objects in an array called allEnemies
var allEnemies = [badBug1, badBug2, badBug3];

allEnemies.push(badBug1);
allEnemies.push(badBug2);
allEnemies.push(badBug3);

// Player object in a variable called player
var player = new Player(200, 415);


// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
