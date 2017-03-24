Megaman.Title = function(){}

Megaman.Title.prototype = {
	create: function(){ 

		var halfPositionX = this.game.world.centerX;
		var halfPositionY = this.game.world.centerY;
		
		console.log("Title create")

		var mainScreen = this.game.add.sprite(0,0,"mainScreen");
			mainScreen.scale.x = .4;
			mainScreen.scale.y = .4;
		var logo = this.game.add.sprite(halfPositionX, halfPositionY - 65,"logo");
			logo.scale.x = .5;
			logo.scale.y = .5;
			logo.anchor.set(0.5);

		var playButton = this.game.add.button(halfPositionX, halfPositionY + 50, "play", this.playTheGame, this);
			playButton.anchor.setTo(0.5,0.5);
			playButton.scale.x = .3;
			playButton.scale.y = .3;

		var creditButton = this.game.add.button(halfPositionX, halfPositionY + 65, "credit", this.playCredit, this);
			creditButton.anchor.setTo(0.5,0.5);
			creditButton.scale.x = .3;
			creditButton.scale.y = .3;

		var controlsButton = this.game.add.button(halfPositionX, halfPositionY + 80, "controls", this.playControls, this);
			controlsButton.anchor.setTo(0.5,0.5);
			controlsButton.scale.x = .3;
			controlsButton.scale.y = .3;
		
	},
  	playTheGame: function(){
  		// go to title
		this.game.state.start("Game");
	},

	playCredit: function(){
		this.game.state.start("Credit");
	},

	playControls : function(){
		this.game.state.start("Controls");
	}
}
