const BLAST_IMG = "images/blast.gif";
const BLAST_AUD = "audio/blast.mp3";
const START_POINT = -300;
const MIN_SPEED = 25;
const MAX_SPEED = 40;
const TIME_INTERVAL = 50;

function Zombie(imgSrc, distanceY) {

    this.isExploding = false;

    this.imgSrc = imgSrc;

    this.speed = generateRandom(MIN_SPEED, MAX_SPEED);

    this.imgElement = document.createElement("img");
    this.imgElement.src = this.imgSrc;
    this.imgElement.classList.add("zombie");
    this.imgElement.style.top = distanceY + "px";
    this.imgElement.addEventListener('click', function () {
        this.explode();
    }.bind(this));

    const source = document.createElement("source");
    source.src = BLAST_AUD;
    source.setAttribute("type", "audio/mpeg");

    this.audElement = document.createElement("audio");
    this.audElement.append(source);

    this.distanceX = START_POINT;

    this.run = function () {
        this.runId = setInterval(function() {
            this.moveRight();

        }.bind(this), TIME_INTERVAL);
    }

    this.explode = function () {

        if (this.isExploding) {
            return;
        }

        this.isExploding = true;
        clearInterval(this.runId);
        this.imgElement.src = BLAST_IMG;
        this.audElement.play();
        setTimeout(this.reset.bind(this), 1100);

        game.scoreBoard.addScore(this.speed);
    }

    this.moveRight = function () {
        this.distanceX += this.speed;
        this.imgElement.style.left = this.distanceX + "px";

        const screenWidth = document.body.clientWidth;
        if (this.distanceX > screenWidth) {
            this.reset();
        }

    }

    this.reset = function () {
        this.isExploding = false;
        this.speed = generateRandom(MIN_SPEED, MAX_SPEED);
        clearInterval(this.runId);
        this.distanceX = START_POINT;
        this.imgElement.src = this.imgSrc;
        this.run();
    }

    this.getElement = function () {
        return this.imgElement;
    }
}



function generateRandom(start, end) {
    const r = Math.random();
    const v = r * (end - start) + start
    return Math.round(v);
}