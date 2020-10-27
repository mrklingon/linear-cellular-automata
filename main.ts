function reset () {
    state = []
    for (let index = 0; index < 5; index++) {
        state.insertAt(0, Math.randomBoolean())
    }
}
let state: boolean[] = []
state = [false, false, false, false, false]
let result = [false, false, false, false, false]
let line = 0
let lca = images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
reset()
turtle.setPosition(0, 0)
