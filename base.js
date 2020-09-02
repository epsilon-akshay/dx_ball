var base = {
    x: 450,
    y: 800,
    color: 'blue',
    width: 150,
    height: 20
}

var drawBase = function(ctx) {
    ctx.save()
    ctx.fillStyle = base.color
    ctx.fillRect(base.x, base.y, base.width, base.height)
    ctx.restore()
}