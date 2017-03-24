// la fonction anonyme protège la variable game
(function() {
	var game = new Phaser.Game(
			Megaman.config.width, 
			Megaman.config.height, 
			Phaser.AUTO, 
			Megaman.name
		);

	/*
		le premier argument est le nom de l'état,
		le deuxième est le nom de la fonction pour appeler cet état
	*/
	game.state.add("Splash", Megaman.Splash);
	game.state.add("Preload", Megaman.Preload);
	game.state.add("Title", Megaman.Title);
	game.state.add("Game", Megaman.Game);
	game.state.add("GameOver", Megaman.GameOver);
	game.state.add("Credit", Megaman.Credit);
	game.state.add("Controls", Megaman.Controls);

	// lancer l'ecran de lancement du jeu
	game.state.start("Splash");
})();    