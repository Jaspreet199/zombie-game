function Game() {
    this.setup = function () {
        this.playScreen = new PlayScreen();
        this.startButton = new StartButton();

        this.exitScreen = new ExitScreen();
        this.exitButton = new ExitButton();

        this.startScreen = new StartScreen();

        this.scoreBoard = new ScoreBoard();

        this.startScreen.show();
    }
}

const game = new Game();

game.setup();