namespace SpriteKind {
    export const Bricks = SpriteKind.create()
    export const Mushroom = SpriteKind.create()
    export const Secret = SpriteKind.create()
    export const Turtle = SpriteKind.create()
    export const Carapace = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 . . . . . . . . . . . . . . 4 
4 . . . . . . . . . . . . . . 4 
4 . . . . . . . . . . . . . . 4 
4 . . . e e e e e e e e . . . 4 
4 . . . e 4 e 4 4 4 4 e . . . 4 
4 . . . e e e e e e e e . . . 4 
4 . . . e 4 4 4 4 e 4 e . . . 4 
4 . . . e e e e e e e e . . . 4 
4 . . . e 4 4 e 4 4 4 e . . . 4 
4 . . . e e e e e e e e . . . 4 
4 . . . . . . . . . . . . . . 4 
4 . . . . . . . . . . . . . . 4 
4 . . . . . . . . . . . . . . 4 
4 . . . . . . . . . . . . . . 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
e e e e e e e e e e e e e e e e 
e 4 4 4 4 4 e 4 4 4 4 4 4 4 4 e 
e 4 4 4 4 4 e 4 4 4 4 4 4 4 4 e 
e 4 4 4 4 4 e 4 4 4 4 4 4 4 4 e 
e 4 4 4 4 4 e 4 4 4 4 4 4 4 4 e 
e e e e e e e e e e e e e e e e 
e 4 4 4 4 4 4 4 4 e 4 4 4 4 4 e 
e 4 4 4 4 4 4 4 4 e 4 4 4 4 4 e 
e 4 4 4 4 4 4 4 4 e 4 4 4 4 4 e 
e 4 4 4 4 4 4 4 4 e 4 4 4 4 4 e 
e e e e e e e e e e e e e e e e 
e 4 4 4 4 e 4 4 4 4 4 4 4 4 4 e 
e 4 4 4 4 e 4 4 4 4 4 4 4 4 4 e 
e 4 4 4 4 e 4 4 4 4 4 4 4 4 4 e 
e 4 4 4 4 e 4 4 4 4 4 4 4 4 4 e 
e e e e e e e e e e e e e e e e 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . 2 2 2 2 . . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . . . e 1 1 e . . . . . . 
. . . . . . . e e . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 7 . . . . . 7 . 7 . . . 
. 7 . 7 7 7 . . 7 7 7 7 7 7 . . 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 . . . . . . . . . . . . . . 4 
4 . . . . . . . . . . . . . . 4 
4 . . . . . . . . . . . . . . 4 
4 . . . . . . e e . . . . . . 4 
4 . . . . . e . . e . . . . . 4 
4 . . . . . . . . e . . . . . 4 
4 . . . . . . . e . . . . . . 4 
4 . . . . . . e . . . . . . . 4 
4 . . . . . . . . . . . . . . 4 
4 . . . . . . e . . . . . . . 4 
4 . . . . . . . . . . . . . . 4 
4 . . . . . . . . . . . . . . 4 
4 . . . . . . . . . . . . . . 4 
4 . . . . . . . . . . . . . . 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`
    //% blockIdentity=images._tile
    export const tile5 = img`
e . . . . . . . . . . . . . . . 
e . . . . . . . . . . . . . . . 
e 7 . . . . . . . . . . . . . . 
e . . . . . . . . . . . . . . . 
e . . . . . . . . . . . . . . . 
e . . . . . . . . . . . . . . . 
e . . . . . . . . . . . . . . . 
e . . . . . . . . . . . . . . . 
e 7 6 . . . . . . . . . . . . . 
e 6 7 . . . . . . . . . . . . . 
e 7 7 . . . . . . . . . . . . . 
e 7 . . . . . . . . . . . . . . 
e 7 . . . . . . . . . . . . . . 
e 7 . . . . . . . . . . . . . . 
e 7 7 . . . . . . . . . . . . . 
e 7 7 7 . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile6 = img`
. . . . . . . . . . . . . . . e 
. . . . . . . . . . . . . . . e 
. . . . . . . . . . . . . . . e 
. . . . . . . . . . . . . . . e 
. . . . . . . . . . . . . . 6 e 
. . . . . . . . . . . . . . 7 e 
. . . . . . . . . . . . . . . e 
. . . . . . . . . . . . . . . e 
. . . . . . . . . . . . . . 6 e 
. . . . . . . . . . . . . . 7 e 
. . . . . . . . . . . . . . 7 e 
. . . . . . . . . . . . . . . e 
. . . . . . . . . . . . . . . e 
. . . . . . . . . . . . . . . e 
. . . . . . . . . . . . . . 6 e 
. . . . . . . . . . . . . 7 7 e 
`
    //% blockIdentity=images._tile
    export const tile7 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . 7 . . . . 
. . 7 7 . . . 7 . 7 7 7 7 . . . 
e e e e e e e e e e e e e e e e 
`
    //% blockIdentity=images._tile
    export const tile8 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 . . . . 2 . . . . . 
. . . . . . 2 . . 2 . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . 2 . . 2 . . . . . . 
. . . . . 2 . . . . 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile9 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . 7 . . . . 
. . . . . . . e 7 . 7 7 7 . . . 
. . . . . . . e 7 7 7 7 7 . . . 
. . . . . . . e 7 7 7 7 7 . . . 
. . . . . . . e 7 7 7 . 7 . . . 
. . . . . . . e . 7 . . . . . . 
. . . . 7 7 . e . . . . . . . 7 
. 7 . 7 7 7 7 e . . . . 7 7 7 . 
`
    //% blockIdentity=images._tile
    export const tile10 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . . . . e . . . . . . . . 
. . . . . . e e e . . . . . . . 
. . . . . e . e . e . . . . . . 
. . . . . . e . e . . . . . . . 
. . . . . . e . e . . . . . . . 
. . . . . . e . e . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 7 . . . . . . . 7 . 7 . 
. . 7 7 7 . . 7 7 7 . . . 7 . . 
`
    //% blockIdentity=images._tile
    export const tile11 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . e e . . . . . . 
. . . . . . . . e 1 . . . . . . 
. . . . . . 7 . e f . . . . . . 
. . . . . 6 7 1 e e . . . . . . 
. . . . 6 7 6 1 e . . . . . . . 
. . . . 7 6 7 1 e . . . . . . . 
. . . . . 1 1 e e . . . . . . . 
. . . . . e e . e e . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 7 . . . . . . . . . 7 . 
7 7 . . 7 7 7 . . . . . 7 7 . . 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Turtle, function (sprite, otherSprite) {
    if (sprite.y - otherSprite.y < -10) {
        otherSprite.setImage(img`
. . . . . f f f f f f . . . . . 
. . . . f f 7 7 7 7 f f . . . . 
. . . f 7 7 f f f f 7 7 f . . . 
. . f 7 7 f 7 7 7 7 f 7 7 f . . 
. . f 7 f 7 7 7 7 7 7 f 7 f . . 
. f 7 f 7 7 7 7 7 7 7 7 f 7 f . 
. f f 7 f 7 7 7 7 7 7 f 7 f f . 
f 7 7 7 7 f 7 7 7 7 f 7 7 7 7 f 
f 7 7 7 7 7 f f f f 7 7 7 7 7 f 
f f f 7 7 f 7 7 7 7 f 7 7 f f f 
1 1 f f f 7 7 7 7 7 7 f f f 1 1 
f 1 1 1 f 7 7 7 7 7 7 f 1 1 1 f 
. f f 1 1 f f f f f f 1 1 f f . 
. . . f 1 1 1 1 1 1 1 1 f . . . 
. . . . f f 1 1 1 1 f f . . . . 
. . . . . . f f f f . . . . . . 
`)
        otherSprite.vx = 0
        otherSprite.setKind(SpriteKind.Carapace)
        sprites.setDataNumber(otherSprite, "interaction", game.runtime())
        sprites.setDataBoolean(otherSprite, "moving", false)
    }
})
function initMapElements () {
    for (let value of tiles.getTilesByType(myTiles.tile3)) {
        sprMushroom = sprites.create(img`
. . . . . . e e e e . . . . . . 
. . . . . e e e e e e . . . . . 
. . . . e e e e e e e e . . . . 
. . . e e e e e e e e e e . . . 
. . e f f f e e e e f f f e . . 
. e e e d f e e e e f d e e e . 
. e e e d f e e e e f d e e e . 
e e e e d f d e e d f d e e e e 
e e e e d d d e e d d d e e e e 
e e e e e e e e e e e e e e e e 
. e e e e d d d d d d e e e e . 
. . . . d d d d d d d d . . . . 
. . f f d d d d d d d d f f . . 
. f f f f f d d d d f f f f f . 
. f f f f f f d d f f f f f f . 
. . f f f f f d d f f f f f . . 
`, SpriteKind.Mushroom)
        sprMushroom.vx = -120
        sprMushroom.ay = 220
        tiles.placeOnTile(sprMushroom, value)
        tiles.setTileAt(value, myTiles.tile0)
    }
    for (let value of tiles.getTilesByType(myTiles.tile1)) {
        sprBrick = sprites.create(img`
e e e e e e e e e e e e e e e e 
e 4 4 4 4 e 4 4 4 4 4 4 4 4 4 e 
e 4 4 4 4 e 4 4 4 4 4 4 4 4 4 e 
e 4 4 4 4 e 4 4 4 4 4 4 4 4 4 e 
e 4 4 4 4 e 4 4 4 4 4 4 4 4 4 e 
e e e e e e e e e e e e e e e e 
e 4 4 e 4 4 4 4 4 4 4 e 4 4 4 e 
e 4 4 e 4 4 4 4 4 4 4 e 4 4 4 e 
e 4 4 e 4 4 4 4 4 4 4 e 4 4 4 e 
e 4 4 e 4 4 4 4 4 4 4 e 4 4 4 e 
e e e e e e e e e e e e e e e e 
e 4 4 4 4 4 4 4 e 4 4 4 4 4 4 e 
e 4 4 4 4 4 4 4 e 4 4 4 4 4 4 e 
e 4 4 4 4 4 4 4 e 4 4 4 4 4 4 e 
e 4 4 4 4 4 4 4 e 4 4 4 4 4 4 e 
e e e e e e e e e e e e e e e e 
`, SpriteKind.Bricks)
        tiles.placeOnTile(sprBrick, value)
    }
    for (let value of tiles.getTilesByType(myTiles.tile11)) {
        sprTurtle = sprites.create(img`
. . . . . . . . . . . f f . . . 
. . . . . . . . . . f 1 1 f . . 
. . . . . . . . . f f 1 1 1 f . 
. . . . . . . . f 4 f 1 1 f f . 
. . . . . . . . f 4 4 1 1 f 4 f 
. . . f f f . . f 4 4 f f 4 4 f 
. . f 7 7 7 f f f 4 4 f . f 4 f 
. f 7 f 7 f 7 f 1 f 4 f . . f f 
. f 7 7 f 7 7 f 1 f 4 4 f . . . 
f 7 7 f 7 f 7 f 1 f 4 4 4 f f . 
f 7 f 7 7 7 f 7 f 1 f 4 4 4 f . 
f f 7 7 7 7 7 f f 1 f 4 f f . . 
f 7 f 7 7 7 f 7 f 1 f 4 f . . . 
f 7 7 f 7 f 7 7 f 1 f f . . . . 
f 7 7 7 f 7 7 7 f 1 f . . . . . 
. f 7 f 7 f 7 f 1 1 f . . . . . 
f f f f f f f f 1 1 f . . . . . 
f 1 1 1 1 1 1 1 1 f f . . . . . 
f 1 1 1 1 1 1 f f f 4 f . . . . 
. f f f f f f f 4 4 4 4 f . . . 
f 1 4 4 4 f . f 4 4 4 4 1 f . . 
f f f f f f . f f f f f f f . . 
`, SpriteKind.Turtle)
        sprTurtle.vx = -60
        sprTurtle.ay = 220
        tiles.placeOnTile(sprTurtle, value)
        tiles.setTileAt(value, myTiles.tile0)
    }
    sprSecret = sprites.create(img`
e e e e e e e e e e e e e e e e 
e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e 
e 5 e 5 5 5 4 4 4 4 5 5 5 e 5 e 
e 5 5 5 4 4 4 4 4 4 4 5 5 5 5 e 
e 5 5 5 4 4 f f f 4 4 4 5 5 5 e 
e 5 5 5 f f 5 5 5 5 4 4 f 5 5 e 
e 5 5 5 5 5 5 5 5 4 4 4 f 5 5 e 
e 5 5 5 5 5 5 5 4 4 4 f 5 5 5 e 
e 5 5 5 5 5 5 4 4 4 f 5 5 5 5 e 
e 5 5 5 5 5 5 4 4 f 5 5 5 5 5 e 
e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e 
e 5 5 5 5 5 5 4 4 5 5 5 5 5 5 e 
e 5 5 5 5 5 5 4 4 f 5 5 5 5 5 e 
e 5 e 5 5 5 5 5 f f 5 5 5 e 5 e 
e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e 
e e e e e e e e e e e e e e e e 
`, SpriteKind.Secret)
    tiles.placeOnRandomTile(sprSecret, myTiles.tile4)
}
scene.onHitWall(SpriteKind.Mushroom, function (sprite) {
    if (sprite.isHittingTile(CollisionDirection.Right)) {
        sprite.vx = -100
        flipSprite(sprite)
    } else if (sprite.isHittingTile(CollisionDirection.Left)) {
        sprite.vx = 100
        flipSprite(sprite)
    }
})
function initMap () {
    if (level == 1) {
        scene.setBackgroundColor(11)
        tiles.setTilemap(tiles.createTilemap(
            hex`5000080005000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005000000000000000000000000000900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000500000000030a03000000000000050000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050000000000000000000000000505000005000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005001100090000000000000005050500000505090000080900000000080012000000000900090009000900090000000000000000000000000000000000000000000000000000000000000000000000000202020202020202020202020202060000070202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202`,
            img`
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . 2 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . 2 2 2 . . 2 2 . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tilePath6,sprites.castle.tilePath2,myTiles.tile1,sprites.dungeon.stairLarge,sprites.dungeon.floorLight2,sprites.castle.tilePath3,sprites.castle.tilePath1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,sprites.builtin.brick,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11],
            TileScale.Sixteen
        ))
    }
    initMapElements()
}
function initPlayer () {
    mario = sprites.create(img`
. . . . 2 2 2 2 2 2 . . . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 . . . 
. . . e e e d d d f d . . . . . 
. . e d e d d d d f d d d . . . 
. . e d e e d d d d f d d d . . 
. . e e d d d d d f f f f . . . 
. . . . d d d d d d d d . . . . 
. . . 2 2 8 2 2 2 2 . . . . . . 
. . 2 2 2 8 2 2 8 2 2 2 . . . . 
. 2 2 2 2 8 8 8 8 2 2 2 2 . . . 
. d d 2 8 8 8 8 8 8 2 d d . . . 
. d d d 8 5 8 8 5 8 d d d . . . 
. d d 8 8 8 . . 8 8 8 d d . . . 
. . . 8 8 8 . . 8 8 8 . . . . . 
. . e e e . . . . e e e . . . . 
. e e e e . . . . e e e e . . . 
`, SpriteKind.Player)
    mario.ay = 220
    controller.moveSprite(mario, 100, 0)
    tiles.placeOnRandomTile(mario, myTiles.tile10)
    scene.cameraFollowSprite(mario)
    for (let value of tiles.getTilesByType(myTiles.tile10)) {
        tiles.setTileAt(value, myTiles.tile0)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Carapace, function (sprite, otherSprite) {
    if (game.runtime() - sprites.readDataNumber(otherSprite, "interaction") > 1000 && !(sprites.readDataBoolean(otherSprite, "moving"))) {
        if (sprite.x < otherSprite.x) {
            otherSprite.vx = 240
            sprites.setDataBoolean(otherSprite, "moving", true)
        } else {
            otherSprite.vx = -240
            sprites.setDataBoolean(otherSprite, "moving", true)
        }
    }
})
scene.onHitWall(SpriteKind.Carapace, function (sprite) {
    if (sprite.isHittingTile(CollisionDirection.Right)) {
        sprite.vx = -240
        flipSprite(sprite)
    } else if (sprite.isHittingTile(CollisionDirection.Left)) {
        sprite.vx = 240
        flipSprite(sprite)
    }
})
scene.onHitWall(SpriteKind.Turtle, function (sprite) {
    if (sprite.isHittingTile(CollisionDirection.Right)) {
        sprite.vx = -60
        flipSprite(sprite)
    } else if (sprite.isHittingTile(CollisionDirection.Left)) {
        sprite.vx = 60
        flipSprite(sprite)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mario.vy == 0) {
        mario.vy += -120
    }
})
function oldElements () {
    sprMushroom = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . f f 2 2 2 2 2 . f f . . . 
. . f . . 2 2 2 2 2 2 . . f . . 
. f . . 2 2 2 2 2 2 2 2 . 2 f . 
. f . 2 2 2 2 . . 2 2 2 2 2 f . 
f 2 2 2 2 2 . . . . 2 2 2 2 2 f 
f 2 2 2 2 2 . . . . 2 2 . 2 2 f 
f . 2 2 2 2 2 . . 2 2 . . . 2 f 
f . . 2 2 2 2 2 2 2 2 2 . 2 2 f 
f . 2 2 f f f f f f f f 2 2 2 f 
. f f f d 1 f d 1 f d d f f f . 
. . f d d f f d f f d d d f . . 
. . f d d d d d d d d d d f . . 
. . . f d d d d d d d d f . . . 
. . . . f f f f f f f f . . . . 
`, SpriteKind.Mushroom)
    sprMushroom = sprites.create(img`
. . . . . . 4 4 4 4 . . . . . . 
. . . . . 4 4 4 4 2 2 . . . . . 
. . . . 4 4 4 4 2 2 2 2 . . . . 
. . . 4 4 4 4 4 2 2 2 2 2 . . . 
. . 4 4 4 4 4 4 4 2 2 2 4 4 . . 
. 4 4 2 2 2 4 4 4 4 4 4 4 4 4 . 
. 4 2 2 2 2 2 4 4 4 4 4 4 4 4 . 
4 4 2 2 2 2 2 4 4 4 4 4 2 2 4 4 
4 4 2 2 2 2 2 4 4 4 4 4 2 2 2 4 
4 4 4 2 2 2 4 4 4 4 4 4 4 2 2 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
. 4 2 2 2 1 1 1 1 1 1 2 2 2 4 . 
. . . . 1 1 1 1 1 1 1 1 . . . . 
. . . . 1 1 1 1 1 1 4 1 . . . . 
. . . . 1 1 1 1 1 1 4 1 . . . . 
. . . . . 1 1 1 1 4 1 . . . . . 
`, SpriteKind.Mushroom)
    sprMushroom = sprites.create(img`
. . . . . f f f f f f . . . . . 
. . . . f f 7 7 7 7 f f . . . . 
. . . f 7 7 f f f f 7 7 f . . . 
. . f 7 7 f 7 7 7 7 f 7 7 f . . 
. . f 7 f 7 7 7 7 7 7 f 7 f . . 
. f 7 f 7 7 7 7 7 7 7 7 f 7 f . 
. f f 7 f 7 7 7 7 7 7 f 7 f f . 
f 7 7 7 7 f 7 7 7 7 f 7 7 7 7 f 
f 7 7 7 7 7 f f f f 7 7 7 7 7 f 
f f f 7 7 f 7 7 7 7 f 7 7 f f f 
1 1 f f f 7 7 7 7 7 7 f f f 1 1 
f 1 1 1 f 7 7 7 7 7 7 f 1 1 1 f 
. f f 1 1 f f f f f f 1 1 f f . 
. . . f 1 1 1 1 1 1 1 1 f . . . 
. . . . f f 1 1 1 1 f f . . . . 
. . . . . . f f f f . . . . . . 
`, SpriteKind.Turtle)
}
sprites.onOverlap(SpriteKind.Carapace, SpriteKind.Mushroom, function (sprite, otherSprite) {
    if (sprites.readDataBoolean(sprite, "moving")) {
        otherSprite.ay += 200
        otherSprite.destroy(effects.spray, 200)
    }
})
function flipSprite (currentSprite: Sprite) {
    myPicture = currentSprite.image
    myPicture.flipX()
    currentSprite.setImage(myPicture)
}
let myPicture: Image = null
let mario: Sprite = null
let sprSecret: Sprite = null
let sprTurtle: Sprite = null
let sprBrick: Sprite = null
let sprMushroom: Sprite = null
let level = 0
level = 1
initMap()
initPlayer()
