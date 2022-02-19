const MarsExplorastion = require('./MarsExploration');

test('Define Mars Plateou Size', () => {
  const exploration = new MarsExplorastion();
  const plateau = exploration.definePlateauSize('North Plateau', '10,10');
  expect(plateau).toStrictEqual({
    name: 'North Plateau',
    upperX: 10,
    upperY: 10
  });
});

// TODO: Add tests to cover what happens with no parameters

test('Land Rover on Mars', () => {
  const exploration = new MarsExplorastion();
  const rover = exploration.landRover(1, 'Eagle', '1 2 N');
  expect(rover).toStrictEqual({
    id: 1,
    name: 'Eagle',
    positionX: 1,
    posiitionY: 2,
    orientation: 'N'
  });
});

test('Move Rover on Plateau', () => {
  const exploration = new MarsExplorastion();
  const position = exploration.moveRover(1, 'LMLMLMLMM');
  expect(position).toStrictEqual({
    newPositionX: 1,
    newPositionY: 3,
    newOrientation: 'N' 
  });
});

test('Print Rover Position', () => {
  const exploration = new MarsExplorastion();
  const message = exploration.getRoverPositionMessage(1);
  expect(message).toBe('Rover "Eagle" is now at positioin 1 3 N');
});