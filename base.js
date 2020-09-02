var base = {
    x: 450,
    y: 800,
    color: 'blue',
    width: 250,
    height: 20,
    movingLeft: false,
    movingRight: false
}
var SPEED = 7

var drawBase = function(ctx) {
    ctx.save()
    ctx.fillStyle = base.color
    ctx.fillRect(base.x, base.y, base.width, base.height)
    ctx.restore()
}

var moveBase = function(ctx, canvas) {
    if (base.x < 0) {
        base.x = 0
    }

    if (base.x > (canvas.width - base.width)) {
        base.x = (canvas.width - base.width)
    }
    if (base.movingLeft == true) {
        base.x = base.x - SPEED
    }
    if (base.movingRight == true) {
        base.x = base.x + SPEED
    }


    drawBase(ctx)
}