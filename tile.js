var tile = {
    width: 100,
    height: 20,
    color: 'yellow'
}

var COLUMS = 15
var ROWS = 5
var GAP = 5

var drawTiles = function(ctx) {
    ctx.save()
    var initialX = 0
    var initialY = 0
    for (var i = 0; i < ROWS; i++) {
        for (var j = 0; j < COLUMS; j++) {
            ctx.fillStyle = tile.color
            ctx.fillRect(initialX + (tile.width + GAP) * j, initialY + (tile.height + GAP) * i, tile.width, tile.height)
        }
    }
    ctx.restore()
}