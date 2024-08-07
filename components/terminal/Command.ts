/*
JULIAN GPT!!!!!!! OMG OMG
effects: idfk

games: ascii dinosaur game, snake, platformer?

help: help
scripts > notavirus.exe, DONOTOPEN.vue (secret easter egg page maybe just grilled cheese awesome vibes),
delete.bat (maybe make it a sudo command for sillies), run.exe (rickroll)
navTo: (page name), secret page not there
fart: makes a fart sound
config: see config and source code n stuff omg
julianGPT: hell yeah (base it off eliza just make it tell you to fuck yourself)
clear: clears terminal
whatdo: suggest a random command?

i lowkey want something that'll use cookies and change the experience based on a command or something
maybe have an ascii julian nav for terminal only lolll
omg julian nav themes per page
*/

import Terminal from "~/components/terminal/Terminal";

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export interface CommandData {
    name: string,
    desc: string,
    tab: number,
}

export abstract class Command {
    name: string
    desc: string
    tab: number

    protected constructor(data: CommandData) {
        this.name = data.name
        this.desc = data.desc
        this.tab = data.tab
    }

    overview() {
        const tab = "\t".repeat(this.tab);
        return this.name + tab + this.desc + "\n"
    }

    checkForHelp(input: string) {
        const words = input.split(' ')

        if (words.length > 1 && words[1] == "help") {
            this.help()
            return true
        }

        return false
    }

    improperUsage() {
        this.sendText(`Improper usage of ${this.name} command. See below:`, "w")
        this.help()
        return
    }

    help() {
        let over = this.overview()
        this.finish(over)
    }

    async run(input: string): Promise<any> {

    }

    finish(final?: string, color?: string) {
        if (final)
            Terminal.terminal.sendText(final, color)

        Terminal.terminal.makeLine()
    }

    sendText(text: string, type?: string) {
        if (type)
            return Terminal.terminal.sendText(text, type)

        return Terminal.terminal.sendText(text)
    }
}

export class FartCommand extends Command {

    constructor(data: CommandData) {
        super(data)
    }

    override async run(input: string) {
        if (this.checkForHelp(input)) return

        const fart = new Audio('/fart.mp3')
        this.sendText("farting in progress...")

        await fart.play()

        setTimeout(() => {
            this.finish("farting complete! mmmm yum stinky smelly :)")
        }, fart.duration * 1000)
    }
}

export class HelpCommand extends Command {

    constructor(data: CommandData) {
        super(data);
    }

    override async run() {
        let str = ""

        for (const c of Terminal.commands) {
            str += c.overview()
        }

        this.finish(str)
    }
}

export class DebugCommand extends Command {

    constructor(data: CommandData) {
        super(data);
    }

    override async run(input: string) {
        if (this.checkForHelp(input)) return

        this.finish("This is the error message", "e")
    }
}

interface Link {
    name: string
    url: string
}

export class NavCommand extends Command {

    static links: Link[] = [
        {name: "home", url: "/"},
        {name: "dating", url: "/dating"},
        // {name: "secret", url: "/secret"}
    ]

    constructor(data: CommandData) {
        super(data);
    }

    override help() {
        this.sendText("Usage: navto <option>")
        this.sendText("\tnavto list: lists all available pages to navigate to")
        this.sendText("\tnavto <page>: navigates to desired page")
        this.finish()
    }

    override async run(input: string) {
        if (this.checkForHelp(input)) return
        const words = input.split(" ")

        if (words.length == 1) {
            this.improperUsage()
            return
        }

        for (const word of words) {
            if (word == "list") {
                this.list()
                return
            } else if (this.isLinkName(word)) {
                this.navTo(this.getLink(word)!)
                return
            } else if (word != this.name) {
                this.finish(`No navto command found with name ${word}. Please try again.`, "w")
            }
        }
    }

    navTo(link: Link) {
        this.sendText(`have fun at ${link.name}! :)`)
        const router = useRouter()

        setTimeout(() => {
            router.push(link.url)
            this.finish()
        }, 1000)
    }

    list() {
        for (const link of NavCommand.links) {
            this.sendText(link.name)
        }

        this.finish()
    }

    getLink(name: string) {
        for (const link of NavCommand.links) {
            if (link.name == name) {
                return link
            }
        }
    }

    isLinkName(word: string) {
        for (const link of NavCommand.links) {
            if (link.name == word) {
                return true
            }
        }

        return false
    }
}

export class ClearCommand extends Command {

    constructor(data: CommandData) {
        super(data);
    }

    override async run(input: string) {
        if (this.checkForHelp(input)) return

        this.sendText("clearing terminal...", "w")
        Terminal.terminal.clear()
    }

}

export class ScriptsCommand extends Command {

    static scripts = ["run.exe"]

    constructor(data: CommandData) {
        super(data);
    }

    override help() {
        this.sendText("Usage: scripts <option>")
        this.sendText("\tscripts list: lists all available scripts to run")
        this.sendText("\tscripts run <script>: runs desired script")
        this.finish()
    }

    override async run(input: string) {
        if (this.checkForHelp(input)) return
        const words = input.split(" ")

        if (words.length == 1) {
            this.improperUsage()
            return
        }

        for (let i = 0; i < words.length; i++) {
            const word = words[i]

            if (word == "list") {
                this.list()
                return
            }
            if (word == "run") {
                if (words.length >= i + 2) {
                    const script = words[i + 1]

                    if (ScriptsCommand.scripts.includes(script)) {
                        this.runScript(script)
                        return
                    } else {
                        this.finish(`No script named ${script}! Please try again.`, "w")
                        return
                    }
                } else {
                    this.sendText("No script selected to run, see proper usage below:", "w")
                    this.help()
                    return
                }
            } else if (word != this.name) {
                this.finish(`No ${this.name} command found with name ${word}. Please try again.`, "w")
            }
        }
    }

    runScript(script: string) {
        switch (script) {
            case "run.exe" : {
                this.runEXE()
                return;
            }
        }
    }

    runEXE() {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank')!.focus();
        this.finish("you enjoy that? you just got #smartphOWNED.com")
    }

    deleteEXE() {

    }

    list() {
        for (const s of ScriptsCommand.scripts) {
            this.sendText(s)
        }

        this.finish()
    }

}

export class SnakeCommand extends Command {

    constructor(data: CommandData) {
        super(data);
    }

    override help() {
        this.sendText(`Usage: ${this.name} | ${this.name} <option>`)
        this.sendText(`\tdifficulties: [baby, normal, gamer, impossible]`)
        this.sendText(`\tmodes: [apples, reversed]`)
        this.sendText(`\t\tapples: spawns more apples at once`)
        this.sendText(`\t\treversed: controls are reversed!`)

        this.sendText(`\n\t${this.name} difficulty (or -d) <option>: runs snake at a desired difficulty`)
        this.sendText(`\t${this.name} mode (or -m) <option>: runs snake with a desired mode`)
        this.sendText(`\nexample: ${this.name} -d normal -m reversed`, "w")
        this.finish()
    }

    override async run(input: string) {
        if (this.checkForHelp(input)) return
        const words = input.split(" ")
        let {initSnake} = await import("~/components/terminal/Snake")

        let difficulty: string
        let mode: string

        if (words.length == 1) {
            initSnake()
            return
        }

        if (words.includes("-d") || words.includes("difficulty")) {
            const d = words.indexOf("-d")
            const diff = words.indexOf("difficulty")

            const index = d == -1 ? diff : d

            if (index + 1 <= words.length) {
                difficulty = words[index + 1]
            } else {
                this.improperUsage()
                return
            }
        }

        if (words.includes("-d") || words.includes("difficulty")) {
            const d = words.indexOf("-d")
            const diff = words.indexOf("difficulty")

            const index = d == -1 ? diff : d

            if (index + 1 <= words.length) {
                difficulty = words[index + 1]
            } else {
                this.improperUsage()
                return
            }
        }

        if (words.includes("-m") || words.includes("mode")) {
            const m = words.indexOf("-m")
            const modeInd = words.indexOf("mode")

            const index = m == -1 ? modeInd : m

            if (index + 1 <= words.length) {
                mode = words[index + 1]
            } else {
                this.improperUsage()
                return
            }
        }

        initSnake(difficulty!, mode!)
    }
}

