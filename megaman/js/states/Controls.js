Megaman.Controls = function(game){}

Megaman.Controls.prototype = {
	create: function(){ 
		
		console.log("Controls")

		var mainScreen = this.game.add.sprite(0,0,"mainScreen");
			mainScreen.scale.x = .4;
			mainScreen.scale.y = .4;

		var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 65,"logo");
			logo.scale.x = .5;
			logo.scale.y = .5;
			logo.anchor.set(0.5);

		stateText = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 50,' ', { font: '12px Arial', fill: '#fff' });
    	stateText.anchor.setTo(0.5, 0.5);

	    this.game.input.onTap.addOnce(this.replay,this);


    	stateText.text=" Z / UP Key : Move Top \n Q / Left Key : Move Left \n D / Right Key : Move Right \n \n A / SpaceBar Key : Jump \n E / Shift Key : Fire";

		
	},
	replay : function(){
		this.game.state.start("Title");
	}
}
