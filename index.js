class liquid {
    constructor(name, colourless, odourless, tasteless){
        this.name = name
        this.colourless = colourless
        this.odourless = odourless
        this.tasteless = tasteless
    }
}
    const water = new liquid("water" ,true, true, true)

    module.exports = {
        liquid,
        water
    }