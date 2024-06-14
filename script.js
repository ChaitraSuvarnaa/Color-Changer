const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
const h2 = document.querySelector('h2')
const h1 = document.querySelector('h1')

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        if (e.target.id === 'red') {
            body.style.backgroundColor = e.target.id;
            h1.style.color = "#fff"
            h2.style.color = "#fff"
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
            h1.style.color = "#fff"
            h2.style.color = "#fff"
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id; 
            h1.style.color = "black"
            h2.style.color = "black"
        }
        if (e.target.id === 'green') {
            body.style.backgroundColor = e.target.id;
            h1.style.color = "#fff"
            h2.style.color = "#fff"
        }
        if (e.target.id === 'orange') {
            body.style.backgroundColor = e.target.id; 
            h1.style.color = "black"
            h2.style.color = "black"
        }
        if (e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id;
            h2.style.color = "#fff"
            h1.style.color = "#fff"
        }
        if (e.target.id === 'pink') {
            body.style.backgroundColor = e.target.id;
            h1.style.color = "black"
            h2.style.color = "black"
        }
        if (e.target.id === 'indigo') {
            body.style.backgroundColor = e.target.id;
            h2.style.color = "#fff"
            h1.style.color = "#fff"
        }
    });
});