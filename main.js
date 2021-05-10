

// Rover object goes here:
const roverOne = {
    name: "Curiosity",
    direction: "N",
    x: 0,
    y: 0,
    travelLog: [[0, 0]]
  }
  
  let mars = [
    [roverOne.name, "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "X", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ]
  
  
  
  // ======================
  function turnLeft(rover) {
    switch (rover.direction){
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
    console.log(`Rover now faces ${rover.direction}`)
  }
  
  function turnRight(rover) {
      switch (rover.direction){
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
    console.log(`Rover now faces ${rover.direction}`)
  }
  
  function moveForward(rover) {
    switch (rover.direction){
        case "N":
        switch(mars[rover.x][rover.y-1]){
            case "":
            mars[rover.x][rover.y] = "";
            rover.y--;
            break;
            case "X":
            console.log("rover hit an obstacle!");
            break;
            case undefined:
            console.log("rover hit the wall");
            break;
        }
        break;
      case "W": 
        if (rover.x > 0){
            mars[rover.x][rover.y] = "";
          rover.x--;
        } else {
          console.log("rover hit the wall");
        }
        break;
      case "S":
        if (rover.y < 9){
            mars[rover.x][rover.y] = "";
          rover.y++;
        } else {
          console.log("rover hit the wall");
        }
        break;
      case "E":
        if (rover.x < 9){
            mars[rover.x][rover.y] = "";
          rover.x++;
        } else {
          console.log("rover hit the wall");
        }
        break;
      default:
        console.log("Invalid direction command");
        break;
    }
    mars[rover.x][rover.y] = rover.name;
    rover.travelLog.push([rover.x, rover.y]);
    //console.log(`Forward, new coordinates: ${rover.x} ${rover.y}`);
  }
  
  function moveRover(command, rover){
    for (let i = 0; i<command.length; i++){
      switch(command[i]){
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
    console.log(`Travel Log: ${rover.travelLog}`)
  }
  
  moveRover("rfff", roverOne);
  //console.log(mars);
  moveRover("lff", roverOne);
//console.log(`Travel Log: ${roverOne.travelLog}`)
  

  
  
