namespace SpriteKind {
    export const Bricks = SpriteKind.create()
    export const Mushroom = SpriteKind.create()
    export const Secret = SpriteKind.create()
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
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
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
}
function initMapElements () {
    for (let value of tiles.getTilesByType(myTiles.tile3)) {
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
. f f f d d f d d f d d f f f . 
. . f d d d f d d f d d d f . . 
. . f d d d d d d d d d d f . . 
. . . f d d d d d d d d f . . . 
. . . . f f f f f f f f . . . . 
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
    } else if (sprite.isHittingTile(CollisionDirection.Left)) {
        sprite.vx = 100
    }
})
function initMap () {
    if (level == 1) {
        scene.setBackgroundColor(13)
        tiles.setTilemap(tiles.createTilemap(
            hex`5000080005000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005000000000000000000000000000900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000500000000030a03000000000000050000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050000000000000000000000000505000005000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005000000090011000000000005050500000505090000080900000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000202020202020202020202020202060000070202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202`,
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
            [myTiles.tile0,sprites.castle.tilePath6,sprites.castle.tilePath2,myTiles.tile1,sprites.dungeon.stairLarge,sprites.dungeon.floorLight2,sprites.castle.tilePath3,sprites.castle.tilePath1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,sprites.builtin.brick,myTiles.tile8,myTiles.tile9,myTiles.tile10],
            TileScale.Sixteen
        ))
    }
    initMapElements()
}
function initPlayer () {
    mario = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
    tiles.placeOnRandomTile(mario, myTiles.tile10)
    controller.moveSprite(mario, 60, 0)
    mario.ay = 220
    scene.cameraFollowSprite(mario)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mario.vy == 0) {
        mario.vy += -120
    }
})
let mario: Sprite = null
let sprSecret: Sprite = null
let sprBrick: Sprite = null
let sprMushroom: Sprite = null
let level = 0
level = 1
initMap()
initPlayer()
