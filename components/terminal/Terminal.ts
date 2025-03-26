import {
    ClearCommand,
    Command,
    DebugCommand,
    FartCommand,
    HelpCommand,
    NavCommand,
    ScriptsCommand, SnakeCommand
} from "~/components/terminal/Command";

const ascii =
    "       _       ___                __                      _             __\n" +
    "      (_)_  __/ (_)___ _____     / /____  _________ ___  (_)___  ____ _/ /\n" +
    "     / / / / / / / __ `/ __ \\   / __/ _ \\/ ___/ __ `__ \\/ / __ \\/ __ `/ / \n" +
    "    / / /_/ / / / /_/ / / / /  / /_/  __/ /  / / / / / / / / / / /_/ / /  \n" +
    " __/ /\\__,_/_/_/\\__,_/_/ /_/   \\__/\\___/_/  /_/ /_/ /_/_/_/ /_/\\__,_/_/   \n" +
    "/___/                                                                     \n" +
    "\n"

const julian =
    "      _      ___         \n" +
    "     (_)_ __/ (_)__ ____ \n" +
    "    / / // / / / _ `/ _ \\\n" +
    " __/ /\\_,_/_/_/\\_,_/_//_/\n" +
    "|___/                    \n"
const terminal =
    "  __                _           __\n" +
    " / /____ ______ _  (_)__  ___ _/ /\n" +
    "/ __/ -_) __/  ' \\/ / _ \\/ _ `/ / \n" +
    "\\__/\\__/_/ /_/_/_/_/_//_/\\_,_/_/  \n"

const mobileAscii = julian + terminal
const headerText = "user@julianweb >"

export default class Terminal {
    static commands: Command[] = []
    static textOptions = ["e", "w"]
    static terminal: Terminal

    div: HTMLDivElement
    module: Record<string, string>

    index = 0
    history: string[] = []

    constructor(terminal: HTMLDivElement, module: Record<string, string>) {
        this.div = terminal;
        this.module = module;
        Terminal.terminal = this
        this.start()
    }

    start() {
        const display = window.innerWidth > 640 ? ascii : mobileAscii


        const greeting =
            `hello and welcome to \n
${display}
version 1.2.0 alpha
type 'help' for available commands!

you can also type <command> help for extra info on a command!
have fun!`

        this.sendText(greeting)
        this.makeLine()

        const textBox = this.div.lastChild!.lastChild! as HTMLInputElement

        this.div.onkeydown = (e: KeyboardEvent) => {
            if(e.key == "ArrowUp" || e.key == "ArrowDown") {
                e.preventDefault()

                if(e.key == "ArrowUp") {
                    if(this.history[this.index - 1] !== undefined) {
                        this.index -= 1
                    }
                    else return;
                }
                else if(e.key == "ArrowDown") {
                    if(this.history[this.index + 1] !== undefined) {
                        this.index += 1
                    }
                    else {
                        textBox.value = ""
                        return
                    }
                }

                textBox.value = this.history[this.index]
            }
        }

        this.div.onmousedown = (e: MouseEvent) => {
            if(document.activeElement != textBox) {
                setTimeout(() => {
                    textBox.focus({preventScroll: false})
                }, 0)
            }
        }
    }

    getFirstWord(input: string) {
        input = input.toLowerCase()

        const spaceIndex = input.indexOf(' ')
        return spaceIndex !== -1 ? input.substring(0, spaceIndex) : input;
    }

    async handleInput(input: string) {
        const firstWord = this.getFirstWord(input);

        for (const c of Terminal.commands) {
            if (c.name.toLowerCase() == firstWord) {
                c.run(input)
                return
            }
        }

        this.sendText(`No command found for ${input}. Please try again.`)
        this.makeLine()
        return
    }

    sendText(text: string, color?: string) {
        // if (!this.div) return
        const element = document.createElement("p")

        element.textContent = text
        element.className = this.module.text

        if(color) {
            if(Terminal.textOptions.includes(color)) {
                switch (color) {
                    case "e" :
                        element.classList.add(this.module.error)
                        break;

                    case "w" :
                        element.classList.add(this.module.warning)
                        break;
                }
            }
            else {
                element.style.color = color
            }
        }

        const child = this.div.appendChild(element)
        child.scrollIntoView()
        return child
    }

    replaceText(text: string, replace: HTMLParagraphElement) {
        replace.textContent = text
    }

    makeLine(onEnter?: (value: string) => any) {
        const line = document.createElement("div")
        line.className = this.module.line

        const header = document.createElement("p")
        header.classList.add(this.module.header, this.module.text)
        header.textContent = headerText

        const textArea = document.createElement("input")
        textArea.type = "text"
        textArea.classList.add(this.module.textArea, this.module.text)
        this.onEnter(textArea, onEnter)

        line.appendChild(header)
        line.appendChild(textArea)
        this.div.appendChild(line)

        // textArea.style.width = `${line.clientWidth - (header.clientWidth + 5)}px`

        // const fontSize = parseFloat(getComputedStyle(this.terminal).fontSize);

        //TODO make sure it works with other devices lol
        // textArea.maxLength = Math.floor(textArea.clientWidth / (fontSize * 0.6))

        textArea.focus()
        return line
    }

    onEnter(input: HTMLInputElement, fn?: (value: string) => any) {
        input.onkeydown = (e: KeyboardEvent) => {
            const value = input.value.trim()

            if (e.key == "Enter" && value.length > 0) {
                const text = this.div.lastChild!.lastChild as HTMLInputElement
                text.readOnly = true
                this.history.push(value)
                this.index = this.history.length

                if(fn) fn(value)
                else this.handleInput(value)
            }
        }
    }

    clear() {
        while (this.div.lastChild) {
            this.div.removeChild(this.div.lastChild);
        }

        this.start()
    }
}

const tabs = 1

const snake = new SnakeCommand({
    name: "snake",
    desc: "Play a game of snake!",
    tab: tabs
})

const fart = new FartCommand({
    name: "fart",
    desc: "Play a fart sound lol",
    tab: tabs
})

const navTo = new NavCommand({
    name: "navto",
    desc: "Navigates to a page on the website",
    tab: tabs
})

const scripts = new ScriptsCommand({
    name: "scripts",
    desc: "Runs a given script",
    tab: tabs
})

const help = new HelpCommand({
    name: "help",
    desc: "Shows all terminal and what they do",
    tab: tabs
})

const clear = new ClearCommand({
    name: "clear",
    desc: "Clears the terminal, gives you a fresh start!",
    tab: tabs
})

const debug = new DebugCommand({
    name: "debug",
    desc: "Throws an error message to test the terminals error handling.",
    tab: tabs
})

//no snake rn, the text spacing is broken rn :(
Terminal.commands.push(fart, help, navTo, clear, scripts)