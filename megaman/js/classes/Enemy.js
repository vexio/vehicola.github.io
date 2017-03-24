Megaman.Enemy = function (game, name, type, x, y) {

	// on appelle Phaser.Sprite en donnant le "game" en reference
    Phaser.Sprite.call(this, game);
    game.add.existing(this);


    
    this.loadTexture('enemy1');
    //animations
    //pour sa charger la texture this.loadTexture('enemy1');
    this.animationEnemyFly = this.animations.add('fly', [3,4,5], 5, true);

    //pour sa charger la texture this.loadTexture('enemy2');
    this.animationEnemyMoveShot = this.animations.add('EnemyMoveShot', [1], 5, true);
    this.animationEnemyMove = this.animations.add('EnemyMove', [0], 5, true);

    this.animationEnemyFixedShot = this.animations.add('EnemyFixedShot', [3], 5, true);
    this.animationEnemyFixed = this.animations.add('EnemyFixed', [2], true);
    
    //this est notre sprite phaser maintenant
    this.anchor.setTo(0.5, 0.5);

    this.name = name;

    this.anchor.set(0.5,0.5);
	// ajout du clavier
	this.game.keys = this.game.input.keyboard.createCursorKeys();

	this.game.physics.enable(this, Phaser.Physics.ARCADE);
	

    this.type = type;

    switch(this.type){
    	case 1:
    		this.loadTexture("ennemi1");
    		this.create(x,y);
    		this.body.gravity.y = 100;
    	break;
    	case 2:
    		this.loadTexture("ennemi2");
    		this.create(x,y);
    		this.body.gravity.y = 0;
    		this.shoot();
    	break;
    	case 3:
    		this.loadTexture("ennemi3");
    		this.create(x,y);
    		this.body.gravity.y = 0;
    		this.fly();
    	break;
    }
    this.spawnPositionX = x;
    this.spawnPositionY = y;
    return this;
}

// défini le ptototype de notre objet
Megaman.Enemy.prototype = Object.create(Phaser.Sprite.prototype);
// rappelle a l'objet que
Megaman.Enemy.prototype.constructor = Megaman.Enemy;

Megaman.Enemy.prototype.create = function (x,y) {
	console.log("je suis vivant !")
	//autorise la physique
	this.enableBody = true;
	this.alive = true;
	//ajout de la position aleatoire
    this.position.x = x;
    this.position.y = y;
}

Megaman.Enemy.prototype.hit = function () {   
	console.log("je suis touché !")
}

Megaman.Enemy.prototype.explode = function () {
	console.log("je suis mort !");
	this.alive = false;
	this.kill();
}

Megaman.Enemy.prototype.move = function () {
	if(this.body.position.x >= this.spawnPositionX + 100){
		this.body.velocity.x = -20;
	}else if (this.body.position.x <= this.spawnPositionX) {
		this.body.velocity.x = 20;
	}
}

Megaman.Enemy.prototype.shoot = function () {
	//ennemy shoot

}
Megaman.Enemy.prototype.fly = function () {
	if(this.body.position.x >= this.spawnPositionX + 100){
		this.body.velocity.x = -50;
	}else if (this.body.position.x <= this.spawnPositionX) {
		this.body.velocity.x = 50;
	}
}