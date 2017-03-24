Megaman.Preload = function(){}

Megaman.Preload.prototype = {
	preload: function(){ 
		console.log("Preload preload")

		// on crée un sprite pour la barre de chargement
        var loadingBar = this.add.sprite(160,240, "loading");
	        loadingBar.anchor.setTo(0.5,0.5);
	    // on défini la barre de chargement et phaser va gérer la bare tout seul
	        this.load.setPreloadSprite(loadingBar);

	    /* 
	    	chargement des assets
	    */

	    /* IMAGE POUR MEGAMAN */
	    this.game.load.image('bullet','assets/tiles/bullet.png')




		//load ennemy

	    //spritesheet (key, url, frameWidth, frameHeight, frameMax, margin, spacing

		// this.game.load.spritesheet("nom","url_60x80.png", 60, 80, 10);
		// // image (key, url)
		// this.game.load.image("nom","url");

		//button
		this.game.load.image("play","assets/ui/play.png");
		this.game.load.image("credit","assets/ui/credit.png");
		this.game.load.image("controls","assets/ui/controls.png");
		this.game.load.image("gameOver","assets/ui/gameOver.png");

		//background
		this.game.load.image("mainScreen","assets/ui/title.jpg");
		this.game.load.image("logo","assets/ui/logo.png");



		this.game.load.spritesheet("bossRun","assets/tiles/bossRun.png", 32, 32, 5);
		this.game.load.spritesheet("bossJump","assets/tiles/bossJump.png", 32, 40, 3);
		this.game.load.spritesheet("boss","assets/tiles/boss.png", 32, 32, 2);
		this.game.load.spritesheet("bossShoot","assets/tiles/bossShoot.png", 32, 32, 2);
		this.game.load.spritesheet("bossBullets","assets/tiles/bossBullets.png", 16, 32, 3);
		this.game.load.spritesheet('megaman',"assets/tiles/tileMegaman.png",32,32,11);
		this.game.load.spritesheet('enemy1',"assets/tiles/tileEnemy.png",32,32,6);
		this.game.load.spritesheet('enemy2',"assets/tiles/tileMegamanEnemy.png",32,32,4);

		/*DAMIEN CODE*/

		// Load TILEMAP
		//game.load.tilemap('level3', 'assets/tilemaps/maps/cybernoid.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.tilemap('level1', 'assets/tilemaps/level1.json', null, Phaser.Tilemap.TILED_JSON);
		// this.game.load.tilemap('platforme', 'assets/tilemaps/plateforme.json', null, Phaser.Tilemap.TILED_JSON);
		//Load Tiles
		this.game.load.image('tiles', 'assets/tiles/tileLevel.png', 16, 16);


		/*DAMIEN CODE END*/

	},
  	create: function(){
  		console.log("Preload finished")
  		// go to title
		this.game.state.start("Title");

		
	}
}