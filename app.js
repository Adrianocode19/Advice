const advNumber = document.getElementById("adv-number");
const advText = document.getElementById("advice");
const btnAdviceChange = document.getElementById("btn");

async function adviceChange() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        advNumber.innerHTML = `ADVICE #${data.slip.id}`
        advText.innerHTML = `"${data.slip.advice}"`;
    })
}

btnAdviceChange.addEventListener('click', adviceChange);