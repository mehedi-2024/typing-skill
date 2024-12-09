
// utility function 
function hide(x) {
    document.getElementById(x).classList.add('hidden');
}
function show(x) {
    document.getElementById(x).classList.remove('hidden');
}


const startBtn = document.getElementById('start');
const display = document.getElementById('display');
const maxScore = document.getElementById('max-score');
const timer = document.getElementById('timer');
const score = document.getElementById('your-score');
const finalScore = document.getElementById('final-score');
const goHomeBtn = document.getElementById('go-home');
const keyboard = document.getElementById('keyboard');

startBtn.addEventListener('click', () => {
    hide('sec1');
    show('sec2');
    time();
})

// sec2
let text = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`;

const textArr = text.toLowerCase().split('');
for (const element of textArr) {
    display.innerHTML += `<span>${element}</span>`;
}

let yourScore = '000';
score.innerHTML = yourScore;

let i = 0;
let totalClick = 0;
keyboard.addEventListener('click', (e) => {
    if (e.target.id == textArr[i]) {
        display.childNodes[i + 1].style.color = 'green';
        yourScore++;
        if (yourScore < 10) {
        score.innerHTML = '00' + yourScore;  
        finalScore.innerHTML = '00' + yourScore;  
        }else if (yourScore < 100){
        score.innerHTML = '0' + yourScore;  
        finalScore.innerHTML = '0' + yourScore;  
        }else{
        score.innerHTML = yourScore;
        finalScore.innerHTML = yourScore;
        }
        i++;
    } else {
        display.childNodes[i + 1].style.color = 'red';
        display.childNodes[i + 1].style.backgroundColor = '#FF000039';
        i++;
    }

    totalClick++;
    if (totalClick === textArr.length) {
        hide('sec2');
        show('sec3');
    }
})

maxScore.innerHTML = textArr.length;

let second = 31;
function time() {
    const duration = setInterval(() => {
        second--;
        timer.innerHTML = second;
        if (second < 10) {
            timer.innerHTML = '0' + second
        }
        if(second === 0){
            clearInterval(duration);
            hide('sec2');
            show('sec3')
        }
    }, 1000)
}

goHomeBtn.addEventListener('click', ()=>{
    window.location.reload();
})