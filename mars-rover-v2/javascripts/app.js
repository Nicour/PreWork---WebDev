var facing = {
  currentDirection: "N",
  currentPosicion: [0, 0],
}

console.log('Your current direction is: ' + facing.currentDirection);
console.log('Your current position is: ' + facing.currentPosicion);
console.log("......................");

var travelLog = [];

var matrix = [
  [null, null, null, null, null, "o", null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, "o", null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, "o", null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, "o", null],
  [null, null, null, null, "o", null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
];


function turnLeft(rover){
  console.log("turnLeft was called!");
   switch(facing.currentDirection) {
    case "N":
      facing.currentDirection = "W";
      break;
    case "W":
      facing.currentDirection = "S";
      break;
    case "S":
      facing.currentDirection = "E";
      break;
    case "E":
      facing.currentDirection = "N";
      break;   
  }
  console.log(facing);
  travelLog.push(
		'Rover turned left. Rover direction: ' +
			facing.currentDirection
	);
}

function turnRight(rover){
  console.log("turnRight was called!");
   switch(facing.currentDirection) {
    case "N":
      facing.currentDirection = "E";
      break;
    case "E":
      facing.currentDirection = "S";
      break;
    case "S":
      facing.currentDirection = "W";
      break;
    case "W":
      facing.currentDirection = "N";
      break;   
  }
  console.log(facing);
  travelLog.push(
		'Rover turned right. Rover direction: ' +
			facing.currentDirection
	);
}



  function moveForward() {
    console.log('moveForward was called');
  if (nextMoveInInsideGrid(facing.currentPosicion[0], facing.currentPosicion[1], facing.currentDirection, "forward") &&
   !nextMoveIsNotObstacle(facing.currentPosicion[0], facing.currentPosicion[1], facing.currentDirection, "forward")) {
      switch (facing.currentDirection) {
        case 'N':
          facing.currentPosicion[0] = facing.currentPosicion[0] - 1;
          break;
    
        case 'E':
            facing.currentPosicion[1] = facing.currentPosicion[1] + 1;
          break;
    
        case 'S':
            facing.currentPosicion[0] = facing.currentPosicion[0] + 1;
          break;
    
        case 'W':
            facing.currentPosicion[1] = facing.currentPosicion[1] - 1;
          break;
      }
      console.log(facing);
      movementLog();
  }
}

function moveBackwards() {
	console.log('moveBackwards was called');
  if (nextMoveInInsideGrid(facing.currentPosicion[0], facing.currentPosicion[1], facing.currentDirection, "backward") 
  && !nextMoveIsNotObstacle(facing.currentPosicion[0], facing.currentPosicion[1], facing.currentDirection, "backward")) {
    switch (facing.currentDirection) {
        case 'N':
          facing.currentPosicion[0] = facing.currentPosicion[0] + 1;
          break;

        case 'E':
          facing.currentPosicion[1] = facing.currentPosicion[1] - 1;
          break;

        case 'S':
          facing.currentPosicion[0] = facing.currentPosicion[0] - 1;
          break;

        case 'W':
          facing.currentPosicion[1] = facing.currentPosicion[1] + 1;
          break;
    }
    console.log(facing);
    movementLog();
  }
}

function nextMoveInInsideGrid (x, y, direction, move) {
  switch (direction) {
		case 'N':
			if (move === "forward" && x===0) {
        console.log("Out of the grid. You can't move" + move);
          return false;
      } else if (move === "backward" && x===9) {
        console.log("Out of the grid. You can't move" + move);
        return false;
      }
			break;

		case 'E':
			if (move === "forward" && y===9) {
        console.log("Out of the grid. You can't move" + move);
        return false;
      } else if (move === "backward" && y===0) {
        console.log("Out of the grid. You can't move" + move);
        return false;
      }
			break;

		case 'S':
			if (move === "forward" && x===9) {
        console.log("Out of the grid. You can't move" + move);
        return false;
      } else if (move === "backward" && x===0) {
        console.log("Out of the grid. You can't move" + move);
        return false;
      }
			break;

		case 'W':
			if (move === "forward" && y===0) {
        console.log("Out of the grid. You can't move" + move);
        return false;
      } else if (move === "backward" && y===9) {
        console.log("Out of the grid. You can't move" + move);
        return false;
      }
			break;
	}
  return true;
}


function nextMoveIsNotObstacle(x, y, direction, move) {
  switch (direction) {
		case 'N':
			if (move === "forward" && matrix[x-1][y]==="o") {
        console.log("Obstacle. You can't move" + move);
          return true;
      } else if (move === "backward" && matrix[x+1][y]==="o") {
        console.log("Obstacle. You can't move" + move);
        return true;
      }
			break;

		case 'E':
			if (move === "forward" && matrix[x][y+1]==="o") {
        console.log("Obstacle. You can't move" + move);
        return true;
      } else if (move === "backward" && matrix[x][y-1]==="o") {
        console.log("Obstacle. You can't move" + move);
        return true;
      }
			break;

		case 'S':
			if (move === "forward" && matrix[x+1][y]==="o") {
        console.log("Obstacle. You can't move" + move);
        return true;
      } else if (move === "backward" && matrix[x-1][y]==="o") {
        console.log("Obstacle. You can't move" + move);
        return true;
      }
			break;

		case 'W':
			if (move === "forward" && matrix[x][y-1]==="o") {
        console.log("Obstacle. You can't move" + move);
        return true;
      } else if (move === "backward" && matrix[x][y+1]==="o") {
        console.log("Obstacle. You can't move" + move);
        return true;
      }
			break;
	}
}

function movementLog() {
	travelLog.push(
		'Moved. Rovers position: ' + facing.currentPosicion
	);
}

function commands(command) {
	for (var i = 0; i < command.length; i++) {
		switch (command[i]) {
      case 'b':
				moveBackwards();
        break;
        
			case 'f':
				moveForward();
				break;

			case 'r':
				turnRight();
				break;

			case 'l':
				turnLeft();
				break;
		}
	}
}


commands('rffffffffffffff');

console.log("......................");
console.log('Tracking:');

console.log(travelLog);
