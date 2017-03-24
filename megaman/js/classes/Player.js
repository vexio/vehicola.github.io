Megaman.Player = function (game, name) {

	// on appelle Phaser.Sprite en donnant le "game" en reference
    Phaser.Sprite.call(this, game);

    this.loadTexture('megaman');

    //animations
   	this.animationRun = this.animations.add('run', [0,1,2,3], 5, true);
   	this.animationJump = this.animations.add('jump', [4], 5, true);
   	this.animationLadder = this.animations.add('ladder',[5,6],5,true);
   	this.animationShoot = this.animations.add('shoot',[8,9],24,true);
    //this est notre sprite phaser maintenant
    this.anchor.setTo(0.5, 0.5);

    this.name = name;
    this.jumpTimer = 0;
    this.bulletTime = 0;

	// ajout du clavier
	this.game.keys = this.game.input.keyboard.createCursorKeys();
	this.game.wasd = { 	up: this.game.input.keyboard.addKey(Phaser.Keyboard.Z), 
						left: this.game.input.keyboard.addKey(Phaser.Keyboard.Q), 
						right: this.game.input.keyboard.addKey(Phaser.Keyboard.D)}

	this.game.jumpButtons = { a : this.game.input.keyboard.addKey(Phaser.Keyboard.A),
							  space : this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
	}

	this.game.shootButtons = { e : this.game.input.keyboard.addKey(Phaser.Keyboard.E),
							shift : this.game.input.keyboard.addKey(Phaser.Keyboard.SHIFT)}

	this.game.physics.enable(this, Phaser.Physics.ARCADE);
	//AJOUT DE LA GRAVITE
	this.body.gravity.y = 250;
	this.body.collideWorldBounds = true;
    this.create();

    return this;
}

// défini le ptototype de notre objet
Megaman.Player.prototype = Object.create(Phaser.Sprite.prototype);
// rappelle a l'objet que
Megaman.Player.prototype.constructor = Megaman.Player;

Megaman.Player.prototype.create = function (x) {
	console.log("je suis vivant !")
	this.body.health = 100;
	this.game.add.existing(this);
	//autorise la physique
	this.enableBody = true;
	this.alive = true;
}

Megaman.Player.prototype.jump = function(argument){
	if (this.body.onFloor() && this.game.time.now > this.jumpTimer)
    {
        this.body.velocity.y = -128;
        this.jumpTimer = this.game.time.now + 750;
    }
};


Megaman.Player.prototype.hit = function (player, bullet) {  
	//console.log("je suis touché ! " + bullet.damage + " dégats");
	bullet.kill();
	this.body.health -= bullet.damage;
	if (this.body.health < 0) {
		this.explode();
	}
}

Megaman.Player.prototype.explode = function () {
	console.log("je suis mort !");
	this.alive = false;
	this.kill();
}

Megaman.Player.prototype.shoot = function () {
	if (this.game.time.now > this.bulletTime) {
		var bullet = this.game.player.bullets.getFirstExists(false);
		bullet.damage = 10;
		if (bullet) {
			bullet.reset(this.x + 10, this.y);
			bullet.body.velocity.x = 400;
			bullet.body.velocity.y = 0;
			this.bulletTime = this.game.time.now + 400;
		}
	}
}


