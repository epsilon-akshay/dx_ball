var ball = {
    x: 400,
    y: 400,
    color: 'red',
    radius: 10
}

var drawBall = function(ctx) {
    ctx.save()
    ctx.fillStyle = ball.color
    ctx.beginPath()
    ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI)
    ctx.fill()
    ctx.restore()
}