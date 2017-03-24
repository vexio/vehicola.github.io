Megaman.Credit = function(game){}

		var content = [
		    "Credit",
		    "GUI DESIGNER AND DEVELOPER",
		    "Jeremy Delporte - Michael Fossoul",
		    "",
		    "MEGAMAN BEHAVIOR",
		    "Bastien Leroy - Fidel Jongo",
		    "",
		    "ENEMIES BEHAVIOR",
		    "Mohammed Berber - Sebastien Tonneau",
		    "",
		    "BOSS BEHAVIOR",
		    "Anthony Tomson - Emeric Beauchot",
		    "",
		    "LEVEL DESIGN",
		    "Damien Gauthier - Fabien Nolf",
		    "",
		    "TEAM SUPPORT",
		    "Teddy Kishi",

		];

		var line = [];

		var wordIndex = 0;
		var lineIndex = 0;

		var wordDelay = 120;
		var lineDelay = 400;

Megaman.Credit.prototype = {
	create: function(){ 
		
		console.log("Credit")

	    text = this.game.add.text(this.game.world.centerX, 5, '', { font: "10px Arial", fill: "#fff"});
	    text.anchor.setTo(0.5,0);
	    text.align = "center";
	    text.lineSpacing = -5;


	    this.nextLine();
	    this.game.input.onTap.addOnce(this.replay,this);

	},

	nextLine : function() {

	    if (lineIndex === content.length)
	    {
	        //  We're finished
	        return;
	    }

	    //  Split the current line on spaces, so one word per array element
	    line = content[lineIndex].split(' ');

	    //  Reset the word index to zero (the first word in the line)
	    wordIndex = 0;

	    //  Call the 'nextWord' function once for each word in the line (line.length)
	    this.game.time.events.repeat(wordDelay, line.length, this.nextWord, this);

	    //  Advance to the next line
	    lineIndex++;

	},

	nextWord : function() {

	    //  Add the next word onto the text string, followed by a space
	    text.text = text.text.concat(line[wordIndex] + " ");

	    //  Advance the word index to the next word in the line
	    wordIndex++;

	    //  Last word?
	    if (wordIndex === line.length)
	    {
	        //  Add a carriage return
	        text.text = text.text.concat("\n");

	        //  Get the next line after the lineDelay amount of ms has elapsed
	        this.game.time.events.add(lineDelay, this.nextLine, this);
	    }

	},

	replay : function(){
		this.game.state.start("Title");
	}

}

