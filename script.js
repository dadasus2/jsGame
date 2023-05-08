const character = document.querySelector('.character');
const game = document.querySelector('.game')
let interval;
let both = 0;

function moveRight() {
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if (left < 380) {
        character.style.left = left + 2 + "px";
        game.classList.remove('borderLeft')
        game.classList.remove('borderRight')
        game.classList.remove('borderUp')
        game.classList.remove('borderDown')
    }
    else if (left == 380) {
        game.classList.add('borderRight')
    }
}

function moveLeft() {
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if (left > 0) {
        character.style.left = left - 2 + "px";
        game.classList.remove('borderLeft')
        game.classList.remove('borderRight')
        game.classList.remove('borderUp')
        game.classList.remove('borderDown')
    }
    else if (left == 0) {
        game.classList.add('borderLeft')
    }

}

function moveUp() {
    let top = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if (top > 0) {
        character.style.top = top - 2 + "px";
        game.classList.remove('borderLeft')
        game.classList.remove('borderRight')
        game.classList.remove('borderUp')
        game.classList.remove('borderDown')
    }
    else if (top == 0) {
        game.classList.add('borderDown')
    }
}

function moveDown() {
    let top = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if (top < 580) {
        character.style.top = top + 2 + "px";
        game.classList.remove('borderLeft')
        game.classList.remove('borderRight')
        game.classList.remove('borderUp')
        game.classList.remove('borderDown')
    }
    else if (top == 580) {
        game.classList.add('borderUp')
    }
}


document.addEventListener('keydown', e => {
    if (both == 0) {
        both++;
        if (e.key === "ArrowLeft") {
            interval = setInterval(moveLeft, 1)
        }
        if (e.key === "ArrowRight") {
            interval = setInterval(moveRight, 1)
        }
        if (e.key === "ArrowUp") {
            interval = setInterval(moveUp, 1)
        }
        if (e.key === "ArrowDown") {
            interval = setInterval(moveDown, 1)
        }
    }
});

document.addEventListener('keyup', e => {
    clearInterval(interval);
    both = 0;
})