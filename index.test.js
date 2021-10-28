const drink = require ("./index")
let water = drink.water
test ("that the name of the liquid is water", () =>{
    expect(water.tasteless).toBe(true)
})