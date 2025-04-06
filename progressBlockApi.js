export class ProgressBlock {
    #container;
    #input;
    #fill;
    #circumference;
    #radius;

    constructor(containerSelector, inputSelector, fillSelector) {
        this.#container = document.querySelector(containerSelector);
        this.#input = document.querySelector(inputSelector);
        this.#fill = document.querySelector(fillSelector);

        if (!this.#container || !this.#input || !this.#fill) {
            throw new Error("Container, input or fill element not found");
        }

        this.#radius = this.#fill.r.baseVal.value;
        this.#circumference = 2 * Math.PI * this.#radius;

        this.#initStyles();

        this.#input.addEventListener("input", () => {
            this.#validateValue();
            this.#updateProgress();
        });
    }

    #initStyles() {
        this.#fill.style.strokeDasharray = `${this.#circumference} ${this.#circumference}`;
        this.#fill.style.strokeDashoffset = this.#circumference;
    }

    #updateProgress() {
        const value = this.getValue();
        const offset = this.#circumference - (value / 100) * this.#circumference;
        this.#fill.style.strokeDashoffset = offset;
    }

    show() {
        this.#container.style.visibility = "visible";
    }

    hide() {
        this.#container.style.visibility = "hidden";
    }

    startRotation() {
        this.#fill.classList.add("rotating");
    }

    stopRotation() {
        this.#fill.classList.remove("rotating");
    }

    getValue() {
        return parseInt(this.#input.value, 10) || 0;
    }

    #validateValue() {
        let raw = this.#input.value.replace(/\D/g, '');
        let number = parseInt(raw, 10);

        if (isNaN(number)) {
            this.#input.value = '';
        } else if (number > 100) {
            this.#input.value = '100';
        } else {
            this.#input.value = number.toString();
        }
    }
}
