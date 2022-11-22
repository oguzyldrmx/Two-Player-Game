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
    move();
    moveFirstPlayer();
    moveSecondPlayer();
    checkCollision();
}

let player1Direction = '';
let player2Direction = '';

function move(){
    if(player1Direction === 'up'){
        player1.y -= player1.dy;
    }else if( player1Direction === 'down'){
        player1.y += player1.dy;
    }

    if(player2Direction === 'up'){
        player2.y -= player2.dy;
    }else if( player2Direction === 'down'){
        player2.y += player2.dy;
    }
}

function moveFirstPlayer(){
    document.addEventListener('keydown',(e) =>{
        if(e.keyCode === 83){
            player1Direction = 'down';
        }else if(e.keyCode === 87 ){
            player1Direction = 'up'
        }
    })
    document.addEventListener('keyup',(e) =>{
        if(e.keyCode === 83){
            player1Direction = '';
        }else if(e.keyCode === 87 ){
            player1Direction = ''
        }
    })
}
function moveSecondPlayer(){
    document.addEventListener('keydown',(e) =>{
        if(e.keyCode === 40){
            player2Direction = 'down';
        }else if(e.keyCode === 38 ){
            player2Direction = 'up';
        }
    })
    document.addEventListener('keyup',(e) =>{
        if(e.keyCode === 40){
            player2Direction = '';
        }else if(e.keyCode === 38 ){
            player2Direction = ''
        }
    })
}

function checkCollision(){
    if(player1.y <= 0){
        player1.y = 0;
    }else if(player1.y + 60 >=500){
        player1.y = 440;
    }

    if(player2.y <= 0){
        player2.y = 0;
    }else if(player2.y + 60 >=500){
        player2.y = 440;
    }
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