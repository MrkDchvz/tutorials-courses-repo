const player = {
  name: "Lebron James",
  club: "LA Lakers",
  address: {
    city: "Los Angeles",
  },
};

// Object Destructuring
const {
  name,
  club,
  address: { city },
} = player;
//  Its the same as:
// const name = player.name;
// const club = player.club;
// const city = player.address.city

// if you try to do "console.log(`${address}`)" you will get reference error because address is not define. city is the one that is defined.
console.log(`${name} plays for ${city}`);
