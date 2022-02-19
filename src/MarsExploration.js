class MarsExploration {
  constructor() {
    this.plateau = {};
    // TODO: Change to list of rovers
    this.rovers = [];

    // It's not a real state machine, just the idea
    this.directionsMap = {
      N: {
        L: "W",
        R: "E"
      },
      E: {
        L: "N",
        R: "S"
      },
      S: {
        L: "E",
        R: "W"
      },
      W: {
        L: "S",
        R: "N"
      }
    }
  }

  definePlateauSize(name, upperRightCoordinates) {
    // TODO: Add error dictionary and error handling function
    if(!name) {
      throw new Error("Please name your plateau");
    }

    if(!upperRightCoordinates) {
      throw new Error("Please tell your upperRightCoordinates");
    }

    this.plateau.name = name;
    const coordinatesAsVector = upperRightCoordinates.split(",");
    this.plateau.upperX = Number(coordinatesAsVector[0]);
    this.plateau.upperY = Number(coordinatesAsVector[1]);

    return this.plateau;
  }

  landRover(roverId, name, landingPosition) {
    if(!roverId) {
      throw new Error("Please identify your rover");
    }

    if(this.rovers.find(({id}) => id === roverId)) {
      throw new Error("Id is being used by another rover");
    }

    if(!name) {
      throw new Error("Please name your rover");
    }
    if(!landingPosition) {
      throw new Error("Please tell your landingPosition");
    }

    const positionAsVector = landingPosition.split(" ");
    const rover = {
      id: roverId,
      name: name,
      positionX: Number(positionAsVector[0]),
      positionY: Number(positionAsVector[1]),
      orientation: positionAsVector[2]
    };
    
    this.rovers.push(rover);

    return rover;
  }

  moveRover(roverId, commands) {
    if(!roverId) {
      throw new Error("Please identify your rover");
    }

    if(!commands) {
      throw new Error("Please add commands to your rover");
    }

    const rover = this.rovers.find(({id}) => id === roverId);
    if(!rover) {
      throw new Error("Rover not found");
    }

    for(let i = 0; i < commands.length; i++) {
      const command = commands[i].toUpperCase();

      if(command === "L" || command === "R") {
        rover.orientation = this.directionsMap[rover.orientation][command];
      }
      else if(command === "M") {
        this.move(rover);
      }
    }

    return { 
      newOrientation: rover.orientation,
      newPositionX: rover.positionX,
      newPositionY: rover.positionY
    }
  }

  move(rover) {
    switch(rover.orientation) {
      case "N":
        rover.positionY = rover.positionY + 1
        break;
      case "S":
        rover.positionY = rover.positionY - 1
        break;
      case "E":
        rover.positionX = rover.positionX + 1
        break;
      case "W":
        rover.positionX = rover.positionX - 1
        break;
    }
  }

  getRoverPositionMessage(roverId) {
    const rover = this.rovers.find(({id}) => id === roverId);
    if(!rover) {
      throw new Error("Rover not found");
    }
    return `Rover "${rover.name}" is now at position ${rover.positionX} ${rover.positionY} ${rover.orientation}`
  }
}

module.exports = MarsExploration;