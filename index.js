const buttonHeight = 35;
const buttonWidth = 155;

const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;

window.addEventListener('DOMContentLoaded', () => {
    let hibikiScream = document.getElementById('hibikiScream');
    const hibikiPlay = document.getElementById('hibiki-play');
    hibikiPlay.addEventListener('click', () => {
        hibikiScream.play();
    })


    const ilianAudio = document.getElementById('ilianSound');
    const ilian = document.getElementById('ilian');
    let ilianCounter = 0;
    let ilianPlaying = false;

    ilian.addEventListener('click', () => {
        if (ilianPlaying) {
            ilianAudio.pause();
            ilianPlaying = false;
        }
        else {
            ilianAudio.play();
            ilianPlaying = true;
        }
        document.getElementById('p-ilian').innerHTML = 'Chestit rojden den, thank you for your patience!<br /> Da si jiv, zdrav, prav, korav!'
    });

    ilian.addEventListener('mouseover' , () => {
        if (ilianCounter < 22) {
            ilian.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
            ilian.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
            ilianCounter++;
        }
        if (ilianCounter == 22) {
            deusVult.style.visibility = "visible";
        }
    });

    const deusSound = document.getElementById('deusSound');
    const deusVult = document.getElementById('ussr');
    deusVult.style.visibility = "hidden";
    let deusVultCounter = 0;
    let deusVultPlayig = false;

    ussr.addEventListener('click', () => {
        if (deusVultPlayig) {
            deusSound.pause();
            deusVultPlayig = false;
        }
        else {
            deusSound.play();
            deusVultPlayig = true;
        }
        document.getElementById('p-ussr').innerHTML = "WE WILL TAKE JERULASEM BROTHER!<br />"
    });

    ussr.addEventListener('mouseover', () => {
        if (deusVultCounter < 22) {
            deusVult.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
            deusVult.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
            deusVultCounter++;
        }
        if (deusVultCounter == 22) {
            shrek.style.visibility = "visible";
        } 
    });

    const shrekSound = document.getElementById('shrekSound');
    const shrek = document.getElementById('shrek');
    shrek.style.visibility = "hidden";
    let shrekCounter = 0;
    let shrekPlaying = false;

    shrek.addEventListener('click', () => {
        if (shrekPlaying) {
            shrekSound.pause();
            shrekPlaying = false;
        }
        else {
            shrekSound.play();
            shrekPlaying = true;
        }
        document.getElementById('p-shrek').innerHTML = 'I hope your swamp is peaceful and your mud baths plenty<br /> You can stop the sounds by pressing the button again. <br /> Press your name for a surprise :3';
    });

    shrek.addEventListener('mouseover', () => {
        if (shrekCounter < 22) {
            shrek.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
            shrek.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
            shrekCounter++;
        }
    });
});