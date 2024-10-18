// 0 indexed and auto-incremented value of monday is 0, tuesday is 1, wednesday is 2 and so on. 
enum daysOfTheWeek {
    // Numeric enums is defined with equals sign it signify the start of the index then its auto-incremented by 1
    monday = 1,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday
}
console.log(daysOfTheWeek.friday);

// string Enums: requres to be initialized. 
enum controller {
    up = "UP",
    down = "DOWN",
    left = "LEFT",
    right = "RIGHT"
}
console.log(controller.down);

// Heterogeneous enums (NOTE: TYPESCRIPT DOCS DOESN'T RECOMMEND DOING THIS UNLESS YOU KNOW WHAT YOU ARE DOING)
enum hybridController {
    punch = "PUNCH",
    select = 1,
    exit = 0
}

console.log([hybridController.punch, hybridController.select]);
