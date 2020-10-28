function doGen () {
    for (let index = 0; index <= 4; index++) {
        doNeighbors(index)
    }
    state = result
}
input.onButtonPressed(Button.A, function () {
    doGen()
    plot_line()
})
function doNeighbors (num: number) {
    tot = 0
    tot += state[num]
    if (num == 0) {
        if (wrap == 1) {
            tot += state[4]
        }
    } else {
        tot += state[num - 1]
    }
    if (num == 4) {
        if (wrap == 1) {
            tot += state[0]
        }
    } else {
        tot += state[num + 1]
    }
    if (1 == tot) {
        result[num] = 1
    } else {
        result[num] = 0
    }
}
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 5; index++) {
        doGen()
        plot_line()
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 4; index++) {
        for (let in2 = 0; in2 <= 4; in2++) {
            led.unplot(in2, index)
        }
    }
    reset()
    line = 0
    plot_line()
})
input.onGesture(Gesture.Shake, function () {
    if (wrap == 1) {
        wrap = 0
        basic.showIcon(IconNames.Heart)
    } else {
        wrap = 1
        basic.showIcon(IconNames.Sad)
    }
})
function plot_line () {
    for (let index = 0; index <= 4; index++) {
        led.unplot(index, line)
    }
    for (let index = 0; index <= 4; index++) {
        if (1 == state[index]) {
            led.plot(index, line)
        }
    }
    line += 1
    if (line > 4) {
        line = 0
    }
}
function reset () {
    state = []
    for (let index = 0; index < 5; index++) {
        state.insertAt(0, randint(0, 1))
    }
}
let tot = 0
let wrap = 0
let line = 0
let result: number[] = []
let state: number[] = []
led.unplot(2, 2)
state = [0, 0, 1, 0, 0]
result = [0, 0, 0, 0, 0]
line = 0
plot_line()
wrap = 0
