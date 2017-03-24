Megaman.Game = function(){}


var enemyArray = [];
var typeArray = [1,2,3];

Megaman.Game.prototype = {
	create: function(){ 
		console.log("Game Screen")



		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		/*DAMIEN CODE*/
		this.mapLevel1 = this.game.add.tilemap('level1');
		this.mapLevel1.addTilesetImage('level1','tiles');


		console.log( this.mapLevel1 )
		
		this.layerBg = this.mapLevel1.createLayer("bg");
		this.layerDecor = this.mapLevel1.createLayer("decor");
		this.layerWalls = this.mapLevel1.createLayer("walls");
		this.game.physics.enable(this.layerWalls, Phaser.Physics.ARCADE);

		// this.layerWalls.debug = true;
		this.layerWalls.enableBody = true;

		this.layerLadder = this.mapLevel1.createLayer("ladder");
		this.layerSpike = this.mapLevel1.createLayer("spike");
		this.layerBg.resizeWorld();

		this.mapLevel1.setCollisionBetween(0,11,true,this.layerWalls)

		/*DAMIEN CODE END*/

		//crée un joueur

		this.game.player = new Megaman.Player(this.game, "Batman");

		this.game.camera.follow(this.game.player);


		this.game.boss = new Megaman.Boss(this.game, "Boss");

		//this.game.camera.follow(this.game.boss);
		

		//ajout d'un groupe de bullets pour MEGAMAN
		this.game.player.bullets = this.game.add.group();
		this.game.player.bullets.enableBody = true;
		this.game.player.bullets.physicsBodyType = Phaser.Physics.ARCADE;
		this.game.player.bullets.createMultiple(30, 'bullet');
		this.game.player.bullets.setAll('anchor.x', 1);
		this.game.player.bullets.setAll('anchor.y', 0.5);
		this.game.player.bullets.setAll('outOfBoundsKill', true);
		this.game.player.bullets.setAll('checkWorldBounds', true);

		for (var i = 0; i < 10; i++) {
			var t = typeArray[Math.floor(Math.random()*typeArray.length)];
			enemyArray.push(new Megaman.Enemy(this.game, "Mario", t, 10*i, 20*i));
		}

		// bouton a retirer juste pour passer a l'ecran suivant

		//var gameOverButton = this.game.add.button(600, 320, "play", this.stopTheGame, this);
		//gameOverButton.anchor.setTo(0.5,0.5);

		var gameOverButton = this.game.add.button(160, 120, "play", this.stopTheGame, this);
		gameOverButton.anchor.setTo(0.5,0.5);


		
		//this.map.setCollisionBetween(1, 1);

	},
	stopTheGame : function(){
		// tue le joueur
		this.game.player.explode();
		// va a l'ecran game over
		this.game.state.start("GameOver");
	},
	update : function(){


		/* DEBUG PLAYER */
		this.game.debug.body(this.game.player);
		this.game.debug.body(this.game.boss);



		//console.log("bouge")
		//PATTERN DEPLACEMENT

		//mise à jour globale du jeu
		this.game.player.body.velocity.x = 0;

		/* CONTROLS */
		if(this.game.keys.left.isDown || this.game.wasd.left.isDown) {
			this.game.player.scale.x = 1;
			this.game.player.play('run', null, false);
			this.game.player.body.velocity.x = -50;
		} else if(this.game.keys.right.isDown || this.game.wasd.right.isDown) {
			this.game.player.scale.x = -1;
			this.game.player.play('run', null, false);
			this.game.player.body.velocity.x = 50;
		}else {
			this.game.player.animations.stop('run');
		}

		if (this.game.jumpButtons.a.isDown || this.game.jumpButtons.space.isDown) {
			this.game.player.play('jump', null, false);
			this.game.player.jump();
		} else {
			this.game.player.animations.stop('jump');
		}

		if (this.game.shootButtons.e.isDown || this.game.shootButtons.shift.isDown ) {
			this.game.player.play('shoot', null, false);
			this.game.player.shoot();
		} else {
			this.game.player.animations.stop('shoot');
		}

/*		if(this.game.keys.up.isDown || this.game.wasd.up.isDown) {
			//POUR LES ECHELLES			
		}*/

		this.game.physics.arcade.collide(this.game.boss.bullets, this.game.player, this.game.player.hit, null, this.game.player);
		this.game.physics.arcade.collide(this.game.player.bullets, this.game.boss, this.game.boss.hit, null, this.game.boss);
		// console.log(this.layerWalls);

		var killBossBullet = function(bullet){
			bullet.kill();
		}

		this.game.physics.arcade.collide(this.game.boss.bullets, this.layerWalls, killBossBullet, null, this.game);


		/* Gestion des ennemies */
		for (var i = 0; i < enemyArray.length; i++) {
			this.game.physics.arcade.collide(enemyArray[i], this.layer);
			switch(enemyArray[i].type){
		    	case 1:
		    		enemyArray[i].move();
		    	break;
		    	case 2:
		    		enemyArray[i].shoot();
		    	break;
		    	case 3:
		    		enemyArray[i].fly();
		    	break;
		    }
		}

	}

}
