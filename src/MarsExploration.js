class MarsExploration {
  constructor() {
    this.plateau = {};
    // TODO: Change to list of rovers
    this.rovers = [];
  }

  definePlateauSize(name, upperRightCoordinates) {
    // TODO: Add error dictionary and error handling function
    if(!name) {
      return new Error("Please name your plateau");
    }

    if(!upperRightCoordinates) {
      return new Error("Please tell your upperRightCoordinates");
    }

    this.plateau.name = name;
    const coordinatesAsVector = upperRightCoordinates.split(",");
    this.plateau.upperX = Number(coordinatesAsVector[0]);
    this.plateau.upperY = Number(coordinatesAsVector[1]);

    return this.plateau;
  }

  landRover(roverId, name, landingPosition) {
    if(!roverId) {
      return new Error("Please roverId your plateau");
    }

    if(this.rovers.find(({id}) => id === roverId)) {
      return new Error("Id is being used by another rover");
    }

    if(!name) {
      return new Error("Please name your rover");
    }
    if(!landingPosition) {
      return new Error("Please tell your landingPosition");
    }

    const positionAsVector = landingPosition.split(" ");
    const rover = {
      id: roverId,
      name: name,
      positionX: Number(positionAsVector[0]),
      posiitionY: Number(positionAsVector[1]),
      orientation: positionAsVector[2]
    };
    
    this.rovers.push(rover);

    return rover;
  }

  moveRover(roverId, commands) {
    const rover = this.rovers.find(({id}) => id === roverId);
    if(!rover) {
      return new Error("Rover not found");
    }

    
  }

  getRoverPositionMessage(roverId) {

  }
}

module.exports = MarsExploration;