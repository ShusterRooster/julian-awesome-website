const operations: { [key: string]: (a: number, b: number) => number } = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
};

export default class Point {
    x: number
    y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    protected static randomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    static random(x: number, x1: number, y: number, y1: number) {
        return new Point(Point.randomInt(x, x1), Point.randomInt(y, y1));
    }

    protected set(point: Point) {
        this.x = point.x
        this.y = point.y
    }

    protected performOperation(sign: string, val: Point | [number, number] | number, set = false): Point {
        let x: number
        let y: number

        if(val instanceof Point) {
            x = operations[sign](this.x, val.x)
            y = operations[sign](this.y, val.y)
        }
        else if(Array.isArray(val)) {
            val = val as [number, number]
            x = operations[sign](this.x, val[0])
            y = operations[sign](this.y, val[1])
        }
        else {
            val = val as number
            x = operations[sign](this.x, val)
            y = operations[sign](this.y, val)
        }

        const result = new Point(x, y)
        if(set) this.set(result)
        return result
    }

    add(val: Point | [number, number] | number, set = false): Point {
        return this.performOperation("+", val, set)
    }

    subtract(val: Point | [number, number] | number, set = false): Point {
        return this.performOperation("-", val, set)
    }

    multiply(val: Point | [number, number] | number, set = false): Point {
        return this.performOperation("*", val, set)
    }

    divide(val: Point | [number, number] | number, set = false): Point {
        return this.performOperation("/", val, set)
    }

    protected static constrain(n: number, min: number, max: number) {
        if(n >= max) n = max
        else if(n <= min) n = min

        return n
    }

    constrain(minX: number, maxX: number, minY: number, maxY: number): Point {
        const x = Point.constrain(this.x, minX, maxX)
        const y = Point.constrain(this.y, minY, maxY)

        return new Point(x, y)
    }

    equals(point: Point): boolean {
        return this.x === point.x && this.y === point.y
    }
}