function StartScreen() {
    this.screen = document.getElementById("screen");

    this.show = function () {
        this.screen.innerHTML = "";

        this.screen.append(game.startButton.getElement());

    }
}