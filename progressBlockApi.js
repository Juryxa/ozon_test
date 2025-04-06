export class ProgressBlock {
    #container;
    #input;
    #fill;

    constructor(containerSelector, inputSelector, fillSelector) {
        this.#container = document.querySelector(containerSelector);
        this.#input = document.querySelector(inputSelector);
        this.#fill = document.querySelector(fillSelector);

        if (!this.#container || !this.#input) {
            throw new Error("Container or input element not found");
        }

        this.#input.addEventListener('input', () => this.#validateValue());
    }

    show() {
        this.#container.style.visibility = "visible";
        // this.#container.style.display = "flex";
    }

    hide() {
        this.#container.style.visibility = "hidden";
        // this.#container.style.display = "none";
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
