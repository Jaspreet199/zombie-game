const START_TEXT = "Start";

function StartButton() {

    this.element = document.createElement("button");
    this.element.innerText = START_TEXT;
    this.element.classList.add("startButton");

    this.element.addEventListener('click', function () {
        game.playScreen = new PlayScreen();
        game.scoreBoard = new ScoreBoard();

        game.playScreen.show();
    });

    this.getElement = function () {
        return this.element;
    }
}