const makeAttributeStone = function(right) {
  return 'position:absolute;right:' + right + 'px;top:350px;';
};

const range = function(num1, num2) {
  let diffrence = Math.abs(num1 - num2);
  let minNum = Math.min(num1, num2);
  return new Array(diffrence).fill(0).map((e, i) => i + minNum);
};

const generateRandom = function(maxValue, minValue) {
  let diffrence = maxValue - minValue;
  return Math.floor(Math.random() * diffrence + minValue);
};

const moveStoneObstacle = function() {
  let left = 160;
  setInterval(() => {
    document
      .getElementById('stoneObst')
      .setAttribute('style', makeAttributeStone(left));
    obst = document.getElementById('stoneObst');
    let spaceCraft = document.getElementById('spaceCraft');
    let spaceCraftTop = +spaceCraft.style.top.replace('px', '');
    let obstacleTop = obst.style.top.replace('px', '');
    left += 5;
    if (left > 1150) {
      left = generateRandom(400, 1);
    }
    if (
      left == 1110 &&
      range(spaceCraftTop, spaceCraftTop + 200).includes(+obstacleTop)
    ) {
      alert('Game Over');
    }
  }, 10);
};

const makeAttributeBird = function(right, top) {
  return 'position:absolute;right:' + right + 'px;top:' + top + 'px;';
};

const moveBirdObstacle = function() {
  let left = 400;
  obst = document.getElementById('birdObstacle');
  spaceCraft = document.getElementById('spaceCraft');
  let birdTop = obst.style.top.replace('px', '');
  setInterval(() => {
    document
      .getElementById('birdObstacle')
      .setAttribute('style', makeAttributeBird(left, birdTop));
    left += 5;
    spaceCraftTop = +spaceCraft.style.top.replace('px', '');
    if (left > 1150) {
      left = generateRandom(600, 1);
      birdTop = generateRandom(250, 10);
    }
    if (
      left == 1110 &&
      range(spaceCraftTop - 75, spaceCraftTop + 75).includes(+birdTop)
    ) {
      alert('hii you tuched it');
    }
  }, 10);
};

const moveSpaceCraft = function(event) {
  let key = event.key;
  let ship = document.getElementById('spaceCraft');

  if (key == 'ArrowUp') {
    let giventop = ship.style.top.replace('px', '');
    let mytop = +giventop;
    mytop -= 5;
    ship.style.top = mytop + 'px';
  }
  if (key == 'ArrowDown') {
    giventop = ship.style.top.replace('px', '');
    mytop = +giventop;
    mytop += 5;
    ship.style.top = mytop + 'px';
  }
};
