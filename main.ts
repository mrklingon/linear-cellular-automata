function doGen () {
    result = []
    for (let index = 0; index <= 99; index++) {
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
            tot += state[99]
        }
    } else {
        tot += state[num - 1]
    }
    if (num == 99) {
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
        for (let in2 = 0; in2 <= 99; in2++) {
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
    for (let index = 0; index < 100; index++) {
        state.insertAt(0, randint(0, 1))
    }
}
let tot = 0
let wrap = 0
let line = 0
let result: number[] = []
let state: number[] = []
led.unplot(2, 2)
for (let index = 0; index < 100; index++) {
    state.insertAt(0, 0)
}
state[2] = 1
for (let index = 0; index < 100; index++) {
    result.insertAt(0, 0)
}
line = 0
plot_line()
wrap = 1
