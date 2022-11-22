const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

function game(){
    update();
    render();
    requestAnimationFrame(game);
}
requestAnimationFrame(game);

let player1 = {
    x:10,
    y:220,
    dy:5,
}

let player2 = {
    x:570,
    y:220,
    dy:5,
}

let ball = {
    x: 300,
    y: 250,
    dx : 7 ,
    dy: 2,
    radius : 10,
}

function update(){

}
function render(){
    context.clearRect(0,0,canvas.width,canvas.height);

    context.beginPath();

    context.rect(player1.x, player1.y, 20, 60);
    context.rect(player2.x, player2.y, 20, 60);

    context.arc(ball.x , ball.y, ball.radius, 0,2*Math.PI)

    context.fillStyle = "#423652";

    context.fill();

    context.closePath();
}