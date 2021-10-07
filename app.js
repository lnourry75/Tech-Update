console.log(document.getElementsByClassName('class'));

console.log(document.getElementById("id"));

console.log(document.querySelector(".query"));

console.log(document.querySelectorAll(".all"));

function hover(str) {
    let split = str.split('');

    split.forEach(letter => {
        let span = document.createElement('span');
        span.innerHTML = letter;
        document.querySelector('.title').appendChild(span);
    });

    let spans = document.querySelectorAll('.title span');
    spans.forEach(span => {
        span.addEventListener('mouseover', () => {
            span.classList.add('hover');
        });
        span.addEventListener('mouseleave' , () => {
            span.classList.remove('hover');

        });
    });
}

hover('style!');

function fadeOut() {
    const square = document.getElementById('square1');
    
    square.style.opacity = '0';


}

function fadeIn() {
    const square = document.getElementById('square1');
    square.style.opacity = '1';
}



const txtAnim = document.querySelector('h6');

new Typewriter(txtAnim, {

})
.typeString('Bonjour cest Louis')
.pauseFor(300)
.typeString('<strong>, Dev Full-Stack</strong>')
.start()

window.addEventListener('click',(e) => {
    const rond = document.createElement('div');
    rond.className = 'clickAnim';
    rond.style.top = `${e.pageY - 50}px`;
    rond.style.left = `${e.pageX - 50}px`;
    document.body.appendChild(rond);
})

const validationInput = document.querySelector('input');

validationInput.addEventListener('input', (e) => {
    if(e.target.value.length >= 5) {
        validationInput.style.borderColor = "green";
    } else {
        validationInput.style.borderColor = "red";
    }
})