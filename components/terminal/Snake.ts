import Terminal from "~/components/terminal/Terminal";
import Point from "~/components/terminal/Point";

interface SnakeHead {
    point: Point
    direction: Point
}

const Up = new Point(0, -1)
const Down = new Point(0, 1)
const Left = new Point(-1, 0)
const Right = new Point(1, 0)
const keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']

const snakeChar = "■"
// const empty = "　"
const empty = "□"
const appleChar = "🍎"

const width = window.innerWidth <= 640 ? 30 : 60
const height = 30
const spawn = new Point((width) / 2, (height) / 2)
const startLength = 4

const delays = [175, 105, 75, 50]
let defaultDelay: number
let boostDelay: number
let numApples: number
let reversed: boolean

let terminal = Terminal.terminal
let scoreText: HTMLParagraphElement
let gameText: HTMLParagraphElement
let head: SnakeHead
let snake: Point[]
let snakeLength: number

let alive: boolean
let delay: number
let keyPresses: Set<string>
let gameColor: string

let difficulty: string
let mode: string

let apples = new Set<Point>()

//(y, x)
let board: string[][] = []

export function initSnake(diff?: string, mode?: string) {
    clearBoard()

    terminal.sendText("welcome to snake! use arrow keys to control and shift key to boost!")
    terminal.sendText("please check out some of the other modes and difficulties :)")

    reset(diff, mode)
    placeItems()

    const scoreStr = updateScore(true) as string
    scoreText = terminal.sendText(scoreStr)

    const text = terminal.sendText(boardString())
    text.style.border = "solid green"
    text.style.width = "fit-content"
    text.style.textAlign = "justify"
    text.style.lineHeight = "16px"
    text.style.letterSpacing = "0px"
    gameText = text

    //if mobile
    if(window.matchMedia("(pointer: coarse)").matches)
        touchControls()
    else
        arrowControls()

    runSnake()
}

function reset(diff = "normal", m?: string) {
    alive = true
    keyPresses = new Set<string>()
    gameColor = "green"
    head = {point: spawn, direction: Right}
    numApples = 1
    reversed = false

    snake = genSnake(head, startLength)
    snakeLength = snake.length

    let diffOpt = diff
    let diffSub = "i am regular schmegular at snake... #mid"
    let color: string

    switch (diff) {
        case "baby": {
            defaultDelay = delays[0]
            diffSub = "wahhhh wahhhh im a baby wahhhh i suck at snake"
            color = "pink"
            break
        }
        case "normal": {
            defaultDelay = delays[1]
            break
        }
        case "gamer": {
            defaultDelay = delays[2]
            diffOpt = "Gamer..."
            diffSub = "holy mackerel!!! you're a gamer!?!?......"
            color = "red"
            break
        }
        case "impossible": {
            defaultDelay = delays[3]
            diffOpt = "IMPOSSIBLE !!DANGER!!"
            diffSub = "jesus christ you're cracked amen"
            color = "purple"
            break
        }
    }

    terminal.sendText(`\ndifficulty: ${diffOpt}`, color!)
    terminal.sendText(diffSub!, color!)

    switch (m) {
        case "apples": {
            numApples = 5
            break
        }
        case "reversed": {
            reversed = true
            break
        }
    }

    delay = defaultDelay
    boostDelay = defaultDelay / 2
    apples = genApples(numApples)

    difficulty = diff
    mode = m!
}

function runSnake() {
    if (alive) {
        clearBoard()
        updateSnake()
        placeItems()
        shiftPress()
        checkForCollision()

        terminal.replaceText(boardString(), gameText)
        gameText.style.color = gameColor

        setTimeout(() => {
            requestAnimationFrame(runSnake)
        }, delay)
    } else
        gameText.style.color = "red"
}


function arrowMove(key: string) {
    const prev = head.direction

    switch (key) {
        case "ArrowUp": {
            head.direction = Up
            break
        }
        case "ArrowDown": {
            head.direction = Down
            break
        }
        case "ArrowLeft": {
            head.direction = Left
            break
        }
        case "ArrowRight": {
            head.direction = Right
            break
        }
    }

    checkReverse(prev)
}

function checkReverse(prev: Point) {
    if(reversed) head.direction = head.direction.multiply(-1)

    const cur = head.direction
    if (cur.equals(prev.multiply(-1))) {
        head.direction = prev
    }
}

function updateSnake() {
    const prev = head.point

    head.point = head.point.add(head.direction)
        .constrain(0, width - 1, 0, height - 1)

    let reverse: Point[] = [prev]
    for (let i = 0; i < snakeLength - 1; i++) {
        reverse.push(snake[i])
    }

    snake = reverse
}

function updateScore(init = false) {
    const text = `score: ${snakeLength - startLength}`
    if (init) return text
    scoreText.textContent = text
}

function checkForCollision() {
    for (const apple of apples) {
        if (head.point.equals(apple)) {
            apples.delete(apple)
            apples.add(generateApple())
            snakeLength++
            updateScore()
        }
    }

    for (const block of snake) {
        if (head.point.equals(block)) {
            gameOver()
        }
    }
}

function gameOver() {
    alive = false
    terminal.sendText("game over!!", "w")
    terminal.sendText(`score: ${snakeLength - startLength}`, "w")
    terminal.sendText("play again?: y/n", "w")

    terminal.makeLine((value) => {
        if (value.toLowerCase() == "y")
            initSnake(difficulty, mode)
        else if (value.toLowerCase() == "n")
            terminal.makeLine()
        else {
            terminal.sendText(`${value} is not a valid option, quitting snake...`, "e")
            terminal.makeLine()
        }
    })
}

function arrowControls() {
    window.onkeydown = (e: KeyboardEvent) => {
        if (keys.includes(e.key)) {
            e.preventDefault()
            arrowMove(e.key)
            keyPresses.add(e.key)
        }

        if (e.shiftKey) {
            e.preventDefault()
            keyPresses.add(e.key)
        }
    }

    window.onkeyup = (e: KeyboardEvent) => {
        keyPresses.delete(e.key)
    }
}

function shiftPress() {
    if (keyPresses.has("Shift")) {
        delay = boostDelay
        gameColor = "yellow"
    } else {
        delay = defaultDelay
        gameColor = "green"
    }
}

function touchControls() {
    let init = new Point(-1, -1)

    terminal.div.ontouchstart = (e: TouchEvent) => {
        init = new Point(e.touches[0].clientX, e.touches[0].clientY)
    }

    terminal.div.ontouchmove = (e: TouchEvent) => {
        if(init.equals(new Point(-1, -1))) {
            return
        }

        const prev = head.direction
        const cur = new Point(e.touches[0].clientX, e.touches[0].clientY)
        const diff = init.subtract(cur)

        if (Math.abs(diff.x) > Math.abs(diff.y)) {
            // sliding horizontally
            if (diff.x > 0) {
                // swiped left
                head.direction = Left
            } else {
                // swiped right
                head.direction = Right
            }
        } else {
            // sliding vertically
            if (diff.y > 0) {
                // swiped up
                head.direction = Up
            } else {
                // swiped down
                head.direction = Down
            }
        }

        init = new Point(-1, -1)
        e.preventDefault();
        checkReverse(prev)
    }
}

function touchingSnake(point: Point) {
    if (head.point.equals(point)) return true

    for (const s of snake) {
        if (s.equals(point)) return true
    }

    return false
}

function genApples(n = 1) {
    let set = new Set<Point>

    for (let i = 0; i < n; i++) {
        set.add(generateApple())
    }

    return set
}

function generateApple() {
    const rand = Point.random(0, width - 1, 0, height - 1)

    if (touchingSnake(rand)) {
        return generateApple()
    } else {
        return rand
    }
}

function genSnake(head: SnakeHead, blocks: number) {
    let arr: Point[] = []

    const first = head.point.add(head.direction.multiply(-1))
    arr.push(first)

    for (let i = 1; i < blocks; i++) {
        const prev = arr[i - 1]
        const block = prev.add(head.direction.multiply(-1))
        arr.push(block)
    }

    return arr
}

function placeItem(point: Point, item: string) {
    board[point.y][point.x] = item
}

function placeSnake() {
    placeItem(head.point, snakeChar)

    for (const block of snake) {
        placeItem(block, snakeChar)
    }
}

function placeItems() {
    placeSnake()

    for (const apple of apples) {
        placeItem(apple, appleChar)
    }
}

function makeRow() {
    let row: string[] = []

    for (let i = 0; i < width; i++) {
        row.push(empty)
    }

    return row
}

function rowString(row: string[]) {
    let str = ""

    for (const s of row) {
        str += s
    }

    return str
}

function boardString() {
    let str = ""

    for (let i = 0; i < height; i++) {
        str += (rowString(board[i]) + "\n")
    }

    return str
}

function clearBoard() {
    let arr: string[][] = []

    for (let i = 0; i < height; i++) {
        arr.push(makeRow())
    }

    board = arr
}