let WINNER_TEXT = "YOU WON!!!";

var text;
var btnRetry;

var winnerState = {
	
	preload : function() {
		    	game.load.image('retry_button', 'assets/retry_button.png');     
	},

	create : function() {
		game.stage.setBackgroundColor(0x2d2d2d);

 		btnRetry = game.add.button(game.camera.view.centerX, game.camera.view.centerY,'retry_button', this.onRetryBtnCallback, this);
 		btnRetry.width = RETRY_BUTTON_WIDTH;
 		btnRetry.height = RETRY_BUTTON_HEIGHT;
 		btnRetry.fixedToCamera  = true;
	    btnRetry.anchor.set(0.5);
	    btnRetry.cameraOffset.setTo(game.camera.width/2, game.camera.height/2)

	    text = game.add.text(5, 5, WINNER_TEXT);
	    text.fixedToCamera  = true;
	    text.anchor.set(0.5);
	    text.align = 'center';
	    text.font = 'Arial Black';
	    text.fontSize = 55;
	    text.fontWeight = 'bold';
	    text.stroke = '#000000';
	    text.strokeThickness = 6;
	    text.fill = '#43d637';
	    text.cameraOffset.setTo(game.camera.width/2, game.camera.height/2 - RETRY_BUTTON_HEIGHT);
	},


	update : function() {

	},

	onRetryBtnCallback : function() {
		game.state.start('play');
	}
}