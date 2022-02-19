const MarsExplorastion = require('./MarsExploration');

let exploration = {};
beforeAll(() => {
  exploration = new MarsExplorastion();
})

describe('Plateou Definition', () => {
  test('Should require name to define Plateou', () => {
    try {
      exploration.definePlateauSize();
    } catch(e) {
      expect(e.message).toBe("Please name your plateau");
    }
  });

  test('Should require upperRightCoordinates to define Plateou', () => {
    try {
      exploration.definePlateauSize("Example Name");
    } catch(e) {
      expect(e.message).toBe("Please tell your upperRightCoordinates");
    }
  });
  
  test('Should define Mars Plateou Size', () => {
    const plateau = exploration.definePlateauSize('North Plateau', '10,10');
    expect(plateau).toStrictEqual({
      name: 'North Plateau',
      upperX: 10,
      upperY: 10
    });
  });
});


describe('Rover Landing', () => {
  test('Should require ID to land Rover on Mars', () => {
    try {
      exploration.landRover()
    } catch(e) {
      expect(e.message).toBe("Please identify your rover");
    }
  });

  test('Should require name to land Rover on Mars', () => {
    try {
      exploration.landRover(2)
    } catch(e) {
      expect(e.message).toBe("Please name your rover");
    }
  });

  test('Should require landingPosition to land Rover on Mars', () => {
    try {
      exploration.landRover(2, "Example name")
    } catch(e) {
      expect(e.message).toBe("Please tell your landingPosition");
    }
  });
  
  test('Land Rover on Mars', () => {
    const rover = exploration.landRover(1, 'Eagle', '1 2 N');
    expect(rover).toStrictEqual({
      id: 1,
      name: 'Eagle',
      positionX: 1,
      positionY: 2,
      orientation: 'N'
    });
  });
  
  test('Should not allow repeated IDs to land Rover on Mars', () => {
    try {
      exploration.landRover(1)
    } catch(e) {
      expect(e.message).toBe("Id is being used by another rover");
    }
  });
})

describe('Rover Moving', () => {
  test('Should require Id to move rover', () => {
    try {
      exploration.moveRover()
    } catch(e) {
      expect(e.message).toBe("Please identify your rover");
    }
  });

  test('Should require commands to move rover', () => {
    try {
      exploration.moveRover("1")
    } catch(e) {
      expect(e.message).toBe("Please add commands to your rover");
    }
  });

  test('Should break if Rover doesnt exist', () => {
    try {
      exploration.moveRover("2", "LLM")
    } catch(e) {
      expect(e.message).toBe("Rover not found");
    }
  });

  test('Should move Rover on Plateau', () => {
    const position = exploration.moveRover(1, 'LMLMLMLMM');
    expect(position).toStrictEqual({
      newPositionX: 1,
      newPositionY: 3,
      newOrientation: 'N' 
    });
  });
});


describe('Getting Rover info', () => {
  test('Should break if Rover doesnt exist', () => {
    try {
      exploration.moveRover("2", "LLM")
    } catch(e) {
      expect(e.message).toBe("Rover not found");
    }
  });
  
  test('Should print Rover Position', () => {
    const message = exploration.getRoverPositionMessage(1);
    expect(message).toBe('Rover "Eagle" is now at position 1 3 N');
  });
})