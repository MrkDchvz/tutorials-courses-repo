interface MyUser {
    name: string,
    id : string,
    email? : string;
}

interface MyUserOptionals {
    name?: string,
    id?: string,
    email? : string;
}

const merge = (user : MyUser, overrides: MyUserOptionals) : MyUser => {
    // Override the one on the top (user) with the one in the bottom (overrides)
    return {
        ...user,
        ...overrides
    }
}

const person1 : MyUser = {
    name : "Makima",
    id : "SDHD07",
    email : "Makima@poochita.com"
}

const person2 : MyUserOptionals = {
    name : "Denji",
    id : "IDVCM",
    email: "notchainsawman@poochita.com"
}

console.log(merge(person1, person2));