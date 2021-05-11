// Rover object goes here:
const roverOne = {
  name: "Curiosity",
  direction: "N",
  x: 1,
  y: 0,
  travelLog: [[1, 0]],
};

const roverTwo = {
  name: "Perseverance",
  direction: "S",
  x: 2,
  y: 2,
  travelLog: [[2, 2]],
};

let mars = [
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "obstacle", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["obstacle", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
];

mars[1][0] = roverOne.name;
mars[2][2] = roverTwo.name;

// ======================
function turnLeft(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
    default:
      console.log("Invalid direction command");
      break;
  }
  console.log(`Rover now faces ${rover.direction}`);
}

function turnRight(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
    default:
      console.log("Invalid direction command");
      break;
  }
  console.log(`Rover now faces ${rover.direction}`);
}

function moveForward(rover) {
  switch (rover.direction) {
    case "N":
      try {
        if (mars[rover.x - 1][rover.y] === "") {
          mars[rover.x][rover.y] = "";
          rover.x--;
        } else {
          if (mars[rover.x - 1][rover.y] === undefined) {
            console.log("rover hit the wall");
          } else {
            console.log(`rover hit ${mars[rover.x - 1][rover.y]}`);
          }
        }
      } catch (error) {
        // used to catch TypeError that prevents the program from moving on
        console.log("rover hit the wall");
      }
      break;
    case "W":
      try {
        if (mars[rover.x][rover.y - 1] === "") {
          mars[rover.x][rover.y] = "";
          rover.y--;
        } else {
          if (mars[rover.x][rover.y - 1] === undefined) {
            console.log("rover hit the wall");
          } else {
            console.log(`rover hit ${mars[rover.x][rover.y - 1]}`);
          }
        }
      } catch (error) {
        // used to catch TypeError that prevents the program from moving on
      }
      break;
    case "S":
      try {
        if (mars[rover.x + 1][rover.y] === "") {
          mars[rover.x][rover.y] = "";
          rover.x++;
        } else {
          if (mars[rover.x + 1][rover.y] === undefined) {
            console.log("rover hit the wall");
          } else {
            console.log(`rover hit ${mars[rover.x + 1][rover.y]}`);
          }
        }
      } catch (error) {
        // used to catch TypeError that prevents the program from moving on
      }
      break;
    case "E":
      try {
        if (mars[rover.x][rover.y + 1] === "") {
          mars[rover.x][rover.y] = "";
          rover.y++;
        } else {
          if (mars[rover.x][rover.y + 1] === undefined) {
            console.log("rover hit the wall");
          } else {
            console.log(`rover hit ${mars[rover.x][rover.y + 1]}`);
          }
        }
      } catch (error) {
        // used to catch TypeError that prevents the program from moving on
      }
      break;
    default:
      console.log("Invalid direction command");
      break;
  }
  mars[rover.x][rover.y] = rover.name;
  rover.travelLog.push([rover.x, rover.y]);
}

function moveRover(command, rover) {
  for (let i = 0; i < command.length; i++) {
    switch (command[i]) {
      case "f":
        moveForward(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      default:
        console.log(`command ""${command[i]}"" invalid. Ignored`);
    }
  }
  console.log(mars);
  console.log(`Travel Log: ${rover.travelLog}`);
}

moveRover("rrffffffffffffffff", roverOne);
