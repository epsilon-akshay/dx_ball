var ball = {
    x: 400,
    y: 400,
    color: 'red',
    radius: 10,
    spdX: 5,
    spdY: 5,
}

var drawBall = function(ctx) {
    ctx.save()
    ctx.fillStyle = ball.color
    ctx.beginPath()
    ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI)
    ctx.fill()
    ctx.restore()
}

var moveBall = function(ctx, canvas) {
    if (ball.x == 0 || ball.x == (canvas.width - 2 * ball.radius)) {
        ball.spdX = -ball.spdX
    }
    if (ball.y == 0 || ball.y == (canvas.height - 2 * ball.radius)) {
        ball.spdY = -ball.spdY
    }
    ball.x = ball.x + ball.spdX
    ball.y = ball.y + ball.spdY
    drawBall(ctx)
}