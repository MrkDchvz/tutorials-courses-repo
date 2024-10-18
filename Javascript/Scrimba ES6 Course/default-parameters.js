// Default Parameters
// - use equal sign on the parameter to set default parameter for that parameter
const leadSinger = (artist = "someone") => {
  console.log(`${artist} is the lead singer of Cold Play`);
};
// Since no parameter is included it will default to "someone"
leadSinger(); // Prints: someone is the lead singer of Cold Play
