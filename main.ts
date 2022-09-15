input.onButtonPressed(Button.A, function () {
    num_ += 1
    basic.showNumber(num_)
})
input.onButtonPressed(Button.B, function () {
    num_ += -8
    basic.showNumber(num_)
})
input.onGesture(Gesture.Shake, function () {
    random = randint(0, 10)
    basic.showNumber(random)
    sum = num_ + 5
    basic.showNumber(sum)
    product = num_ * 7
    basic.showNumber(product)
    powers = num_ ** 2
    basic.showNumber(powers)
})
let powers = 0
let product = 0
let sum = 0
let random = 0
let num_ = 0
basic.showIcon(IconNames.Angry)
num_ = 95
basic.showNumber(num_)
