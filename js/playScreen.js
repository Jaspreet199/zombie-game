const ZOMBIE_1_IMG = "images/zombie_1.gif"
const ZOMBIE_2_IMG = "images/zombie_2.gif";

const ZOMBIE_1_POSITION_Y = 365 
const ZOMBIE_2_POSITION_Y = 500;

function PlayScreen() {

    this.screen = document.getElementById("screen");

    this.zombie1 = new Zombie(ZOMBIE_1_IMG, ZOMBIE_1_POSITION_Y);
    this.zombie2 = new Zombie(ZOMBIE_2_IMG, ZOMBIE_2_POSITION_Y);

    this.show = function () {
        this.screen.innerHTML = "";

        this.screen.append(game.scoreBoard.getElement());

        this.screen.append(this.zombie1.getElement());
        this.screen.append(this.zombie2.getElement());

        this.screen.append(game.exitButton.getElement());

        this.zombie1.run();
        this.zombie2.run();
    }
}