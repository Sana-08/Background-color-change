let colors = ['red', 'blue', 'pink', 'violet', 'green', 'orange', 'sky-Blue', 'brown','white', 'yellow'];
let btn = document.getElementById('btn');

let defaultColor = 'gray'; // You can choose any color from your colors array or any other color you prefer
document.body.style.background = defaultColor;

btn.addEventListener("click", function() {
    let randomIndex = Math.floor(Math.random() * colors.length);
    let randomColor = colors[randomIndex];
    document.body.style.background = randomColor;
});