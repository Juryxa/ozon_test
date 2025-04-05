import {ProgressBlock} from './progressBlockApi.js';

const progressFill = document.getElementById("progressFill");
const valueInput = document.getElementById("valueInput");
const animateToggle = document.getElementById("animateToggle");
const hideToggle = document.getElementById("hideToggle");
const radius = progressFill.r.baseVal.value;
const circumference = 2 * Math.PI * radius;


document.addEventListener("DOMContentLoaded", () => {
    const block = new ProgressBlock(".progress-circle-container", "#valueInput");

    animateToggle.addEventListener("change", (e) => {
        e.target.checked ? block.startRotation() : block.stopRotation();
    });

    hideToggle.addEventListener("change", (e) => {
        e.target.checked ? block.hide() : block.show();
    });

    valueInput.addEventListener("input", function (){
        setProgress(block.getValue())
    })
});

progressFill.style.strokeDasharray = `${circumference} ${circumference}`;
progressFill.style.strokeDashoffset = circumference;

function setProgress(value){
    let offset = circumference - (value / 100) * circumference;
    progressFill.style.strokeDashoffset = offset;
}


