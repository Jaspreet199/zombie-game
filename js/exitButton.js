const EXIT_TEXT = "Exit";

function ExitButton() {

    this.element = document.createElement("button");
    this.element.innerText = EXIT_TEXT;
    this.element.classList.add("exitButton");

    this.element.onclick = function () {

        const confirm = window.confirm("Are you sure?");
        if (confirm) {
            game.exitScreen.show();
        }
    }

    this.getElement = function () {
        return this.element;
    }
}