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

hover('hover!');

function fadeOut() {
    const square = document.getElementById('square1');
    
    square.style.opacity = '0';


}

function fadeIn() {
    const square = document.getElementById('square1');
    square.style.opacity = '1';
}

const navigation = document.querySelector('nav');

window.addEventListener('scroll', () => {
    
    if(window.scrolly > 10){
        navigation.classList.add('anim-nav');
    } else {
        navigation.classList.remove('anim-nav');
    }
})