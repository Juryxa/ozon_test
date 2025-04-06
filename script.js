import {ProgressBlock} from './progressBlockApi.js';

const animateToggle = document.getElementById("animateToggle");
const hideToggle = document.getElementById("hideToggle");

const block = new ProgressBlock(
    ".progress-circle-container",
    "#valueInput",
    ".progress-fill"
);

animateToggle.addEventListener("change", (e) => {
    e.target.checked ? block.startRotation() : block.stopRotation();
});

hideToggle.addEventListener("change", (e) => {
    e.target.checked ? block.hide() : block.show();
});
