const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const finalPage = document.getElementById('finalPage');
const container = document.querySelector('.container');

let noButtonPosition = { x: 0, y: 0 };

function moveNoButton() {
    noButtonPosition.x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    noButtonPosition.y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    
    noButton.style.position = 'absolute';
    noButton.style.left = noButtonPosition.x + 'px';
    noButton.style.top = noButtonPosition.y + 'px';
}

noButton.addEventListener('click', moveNoButton);

yesButton.addEventListener('click', () => {
    document.body.style.backgroundColor = "#fffdcd"; // Change background color to a soft pink
    container.innerHTML = `
        <h2>Yay! I knew you'd say Yes!</h2>
        <img src="bunny-roses.gif" alt="Cute Bunny with Roses" />
        <p>I love you! ❤️</p>
    `;
    setTimeout(() => {
        alert('You said YES! 🎉');  // Cute alert pop-up!
    }, 500);
});
