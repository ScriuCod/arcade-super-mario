namespace SpriteKind {
    export const Bricks = SpriteKind.create()
    export const Mushroom = SpriteKind.create()
    export const Secret = SpriteKind.create()
    export const Turtle = SpriteKind.create()
    export const Carapace = SpriteKind.create()
    export const BricksLower = SpriteKind.create()
    export const secretFlower = SpriteKind.create()
    export const secretFlowerLower = SpriteKind.create()
    export const Munition = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Munition, SpriteKind.Turtle, function (sprite, otherSprite) {
    sprite.destroy()
    transformTurtleToCarapace(otherSprite)
})
scene.onHitWall(SpriteKind.Munition, function (sprite, location) {
    sprite.image.flipY()
})
function initMapElements () {
    for (let mushroom of tiles.getTilesByType(myTiles.tile3)) {
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
        tiles.placeOnTile(sprMushroom, mushroom)
        tiles.setTileAt(mushroom, myTiles.tile0)
    }
    countBricks = 0
    for (let brick of tiles.getTilesByType(myTiles.tile1)) {
        countBricks += 1
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
        tiles.setWallAt(brick, true)
        tiles.placeOnTile(sprBrick, brick)
        tiles.setTileAt(brick, myTiles.tile0)
        sprBrickLowerSide = sprites.create(img`
            4 . . . . 4 4 4 . e . 4 4 4 . 4 
            . 4 4 . . e 4 . . . . e . 4 . e 
            e . . . . . . . . . . . . . . . 
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
            `, SpriteKind.BricksLower)
        sprites.setDataNumber(sprBrick, "id", countBricks)
        sprites.setDataNumber(sprBrickLowerSide, "id", countBricks)
        sprBrickLowerSide.setPosition(sprBrick.x, sprBrick.y + 16)
    }
    for (let turtle of tiles.getTilesByType(myTiles.tile11)) {
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
        sprites.setDataBoolean(sprTurtle, "moving", true)
        sprites.setDataNumber(sprTurtle, "interaction", 0)
        tiles.placeOnTile(sprTurtle, turtle)
        tiles.setTileAt(turtle, myTiles.tile0)
    }
    countFlowers = 0
    for (let flower of tiles.getTilesByType(myTiles.tile12)) {
        countFlowers += 1
        sprSecretFlower = sprites.create(img`
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . 1 1 1 4 4 4 4 4 4 4 4 1 1 1 . 
            1 1 4 4 4 2 2 2 2 2 2 4 4 4 1 1 
            1 1 4 4 4 2 2 2 2 2 2 4 4 4 1 1 
            . 1 1 1 4 4 4 4 4 4 4 4 1 1 1 . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . . . . . . 7 7 . . . . . . . 
            7 7 7 . . . . 7 7 . . . . 7 7 7 
            . 7 7 7 . . . 7 7 . . . 7 7 7 . 
            . 7 7 7 7 . . 7 7 . . 7 7 7 7 . 
            . . 7 7 7 7 . 7 7 . 7 7 7 7 . . 
            . . 7 7 7 7 . 7 7 . 7 7 7 7 . . 
            . . . 7 7 7 7 7 7 7 7 7 7 . . . 
            . . . . . . 7 7 7 7 . . . . . . 
            `, SpriteKind.secretFlower)
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
        sprSecretFlowerLower = sprites.create(img`
            4 . . . . 4 4 4 . e . 4 4 4 . 4 
            . 4 4 . . e 4 . . . . e . 4 . e 
            e . . . . . . . . . . . . . . . 
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
            `, SpriteKind.secretFlowerLower)
        sprites.setDataNumber(sprSecret, "id", countFlowers)
        sprites.setDataNumber(sprSecretFlower, "id", countFlowers)
        sprites.setDataNumber(sprSecretFlowerLower, "id", countFlowers)
        tiles.setWallAt(flower, true)
        tiles.placeOnTile(sprSecret, flower)
        tiles.placeOnTile(sprSecretFlower, flower)
        sprSecretFlowerLower.setPosition(sprSecret.x, sprSecret.y + 16)
        tiles.setTileAt(flower, myTiles.tile0)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.BricksLower, function (sprite, otherSprite) {
    listBricks = sprites.allOfKind(SpriteKind.Bricks)
    for (let value of listBricks) {
        if (sprites.readDataNumber(value, "id") == sprites.readDataNumber(otherSprite, "id")) {
            value.destroy(effects.disintegrate, 200)
            otherSprite.destroy(effects.disintegrate, 200)
            tiles.setWallAt(tiles.getTileLocation(Math.round(value.x / 16) - 1, Math.round(value.y / 16) - 1), false)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.secretFlowerLower, function (sprite, otherSprite) {
    listFlowers = sprites.allOfKind(SpriteKind.secretFlower)
    for (let value2 of listFlowers) {
        if (sprites.readDataNumber(value2, "id") == sprites.readDataNumber(otherSprite, "id")) {
            otherSprite.destroy(effects.disintegrate, 200)
            pause(700)
            for (let index = 0; index < 5; index++) {
                value2.y += -3.2
                pause(45)
            }
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game.runtime() - sprites.readDataNumber(mario, "intMunition") > 500 && sprites.readDataBoolean(mario, "super")) {
        sprites.setDataNumber(mario, "intMunition", game.runtime())
        sprMunition = sprites.create(img`
            . 2 . 2 2 . . . 
            . . 2 . 2 2 2 . 
            2 . . . 2 4 2 2 
            . . 2 2 2 4 4 2 
            . 2 2 4 4 1 4 2 
            . 2 4 4 1 4 2 2 
            . 2 2 4 4 2 2 . 
            . . 2 2 2 2 . . 
            `, SpriteKind.Munition)
        sprMunition.ay = 200
        sprMunition.setPosition(mario.x, mario.y - 7)
        sprMunition.setFlag(SpriteFlag.BounceOnWall, true)
        if (sprites.readDataString(mario, "direction") == "right") {
            sprMunition.vx = 100
        } else {
            sprMunition.vx = -100
        }
    }
})
sprites.onOverlap(SpriteKind.Munition, SpriteKind.Mushroom, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.trail, 500)
})
scene.onHitWall(SpriteKind.Mushroom, function (sprite, undefined) {
    enemyHitsWall(sprite, 100)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mario.vy == 0) {
        mario.vy += -120
    }
})
function initMap () {
    if (level == 1) {
        scene.setBackgroundColor(11)
        tiles.setTilemap(tiles.createTilemap(hex`5000080003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000300000000020a02000000000000030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000303000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000800000009000900000003030300000303070000060700000000060009000900000700070007000700070000000000000000000000000000000000000000000000000000000000000000000000000101010101010101010101010101040000050101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
            2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            2 . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            2 . . . . . . . . . . . . 2 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            2 . . . . . . . . . . . 2 2 2 . . 2 2 . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `, [myTiles.tile0,sprites.castle.tilePath2,myTiles.tile1,sprites.dungeon.floorLight2,sprites.castle.tilePath3,sprites.castle.tilePath1,myTiles.tile2,myTiles.tile3,myTiles.tile10,myTiles.tile11,myTiles.tile12], TileScale.Sixteen))
    }
    initMapElements()
}
scene.onHitWall(SpriteKind.Turtle, function (sprite, undefined) {
    enemyHitsWall(sprite, 50)
})
function enemyHitsWall (enemySprite: Sprite, speed: number) {
    if (enemySprite.isHittingTile(CollisionDirection.Right)) {
        enemySprite.vx = speed * -1
        flipSprite(enemySprite)
    } else if (enemySprite.isHittingTile(CollisionDirection.Left)) {
        enemySprite.vx = speed
        flipSprite(enemySprite)
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sprites.readDataString(mario, "direction") == "right") {
        sprites.setDataString(mario, "direction", "left")
        mario.image.flipX()
        console.log("marioLeft")
    }
})
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
function removeLife (mySprite: Sprite) {
    if (sprites.readDataBoolean(mario, "starting") == false && info.life() > 1) {
        marioStarting()
        info.changeLifeBy(-1)
    } else if (sprites.readDataBoolean(mario, "starting") == false && info.life() == 1) {
        marioDie()
        info.changeLifeBy(-1)
    }
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
    sprites.setDataString(mario, "direction", "right")
    sprites.setDataNumber(mario, "intMunition", game.runtime())
    sprites.setDataBoolean(mario, "super", false)
    info.setLife(3)
    mario.ay = 220
    controller.moveSprite(mario, 100, 0)
    tiles.placeOnRandomTile(mario, myTiles.tile10)
    scene.cameraFollowSprite(mario)
    for (let value4 of tiles.getTilesByType(myTiles.tile10)) {
        tiles.setTileAt(value4, myTiles.tile0)
    }
    marioStarting()
}
info.onCountdownEnd(function () {
    playerBlink(3)
    mario.image.replace(7, 2)
    mario.image.replace(1, 8)
    sprites.setDataBoolean(mario, "super", false)
    playerBlink(3)
})
sprites.onOverlap(SpriteKind.Carapace, SpriteKind.Mushroom, function (sprite, otherSprite) {
    if (sprites.readDataBoolean(sprite, "moving")) {
        otherSprite.ay = -200
        otherSprite.destroy(effects.confetti, 200)
    }
})
scene.onHitWall(SpriteKind.Carapace, function (sprite, undefined) {
    if (sprite.isHittingTile(CollisionDirection.Right)) {
        sprite.vx = -240
        flipSprite(sprite)
    } else if (sprite.isHittingTile(CollisionDirection.Left)) {
        sprite.vx = 240
        flipSprite(sprite)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sprites.readDataString(mario, "direction") == "left") {
        sprites.setDataString(mario, "direction", "right")
        mario.image.flipX()
        console.log("marioright")
    }
})
function marioDie () {
    mario.setImage(img`
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . . d f d d d f d . . . . . 
        . . . d d f d d d f d d . . . . 
        d d . d d d e e e d d d . . d . 
        d d . d d e e e e e d d . d d . 
        2 d . . d d d d d d d . 2 d d . 
        2 2 2 2 2 8 2 2 2 2 2 2 2 2 . . 
        . 2 2 2 2 8 2 2 8 2 2 2 2 . . . 
        . . . 2 2 8 8 8 8 2 2 . . . . . 
        . . . . 8 8 8 8 8 8 . . . . . . 
        . . . . 8 5 8 8 5 8 . . . . . . 
        . e e 8 8 8 . . 8 8 8 e . . . . 
        . e e e 8 8 . . 8 8 e e e e . . 
        . e e e e . . . . . e e e e . . 
        . . e e . . . . . . e e e e . . 
        `)
    mario.vy = -200
    pause(1000)
    mario.destroy(effects.spray, 100)
    marioStarting()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.secretFlower, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 200)
    playerBlink(3)
    sprite.image.replace(2, 7)
    sprite.image.replace(8, 1)
    sprites.setDataBoolean(mario, "super", true)
    info.startCountdown(15)
    playerBlink(3)
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
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f 7 7 7 7 f f . . . . 
        . . . f 7 7 f f f f 7 7 f . . . 
        . . f 7 7 f 7 7 7 7 f 7 7 f . . 
        . f 7 f f 7 7 7 7 7 7 f f 7 f . 
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
function playerBlink (times: number) {
    for (let index = 0; index < times; index++) {
        mario.setFlag(SpriteFlag.Invisible, true)
        pause(100)
        mario.setFlag(SpriteFlag.Invisible, false)
        pause(100)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Turtle, function (sprite, otherSprite) {
    if (sprite.y - otherSprite.y < -10) {
        transformTurtleToCarapace(otherSprite)
    } else {
        removeLife(sprite)
    }
})
function flipSprite (currentSprite: Sprite) {
    myPicture = currentSprite.image
    myPicture.flipX()
    currentSprite.setImage(myPicture)
}
function marioStarting () {
    sprites.setDataBoolean(mario, "starting", true)
    playerBlink(10)
    sprites.setDataBoolean(mario, "starting", false)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Mushroom, function (sprite, otherSprite) {
    if (sprite.y < otherSprite.top) {
        otherSprite.destroy(effects.trail, 500)
    } else {
        removeLife(sprite)
    }
})
function transformTurtleToCarapace (mySprite: Sprite) {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f 7 7 7 7 f f . . . . 
        . . . f 7 7 f f f f 7 7 f . . . 
        . . f 7 7 f 7 7 7 7 f 7 7 f . . 
        . f 7 f f 7 7 7 7 7 7 f f 7 f . 
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
    mySprite.vx = 0
    mySprite.setKind(SpriteKind.Carapace)
    sprites.setDataNumber(mySprite, "interaction", game.runtime())
    sprites.setDataBoolean(mySprite, "moving", false)
}
sprites.onOverlap(SpriteKind.Carapace, SpriteKind.Turtle, function (sprite, otherSprite) {
    transformTurtleToCarapace(otherSprite)
})
let myPicture: Image = null
let sprMunition: Sprite = null
let mario: Sprite = null
let listFlowers: Sprite[] = []
let listBricks: Sprite[] = []
let sprSecretFlowerLower: Sprite = null
let sprSecret: Sprite = null
let sprSecretFlower: Sprite = null
let countFlowers = 0
let sprTurtle: Sprite = null
let sprBrickLowerSide: Sprite = null
let sprBrick: Sprite = null
let countBricks = 0
let sprMushroom: Sprite = null
let level = 0
level = 1
initMap()
initPlayer()
