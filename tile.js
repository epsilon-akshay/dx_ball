var tile = {
    width: 100,
    height: 20,
    color: 'yellow'
}

var COLUMS = 15
var ROWS = 5
var GAP = 5

var tileList = []

var drawTiles = function(ctx) {
    for (var i = 0; i < tileList.length; i++) {
        ctx.save()
        ctx.fillStyle = tile.color
        ctx.fillRect(tileList[i].x, tileList[i].y, tile.width, tile.height)
        ctx.restore()
    }
}

var initializeTiles = function() {
    var initialX = 0
    var initialY = 0
    for (var i = 0; i < ROWS; i++) {
        for (var j = 0; j < COLUMS; j++) {
            tileList.push({
                x: initialX + (tile.width + GAP) * j,
                y: initialY + (tile.height + GAP) * i
            })
        }
    }
}