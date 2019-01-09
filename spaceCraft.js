const makeAttributeStone = function(right) {
  return (
    'position:absolute;right:' +
    right +
    'px;top:350px;left: 1140px;width:150px;height:150px'
  );
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
    let stoneObstacle = document.getElementById('stoneObstacle');

    stoneObstacle.setAttribute('style', makeAttributeStone(left));
    let spaceCraft = document.getElementById('spaceCraft');
    let spaceCraftTop = +spaceCraft.style.top.replace('px', '');
    let obstacleTop = stoneObstacle.style.top.replace('px', '');
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
  return (
    'position:absolute;right:' +
    right +
    'px;top:' +
    top +
    'px;left: 750px;width:150px;height:150px'
  );
};

const moveBirdObstacle = function() {
  let left = 400;
  let birdObstacle = document.getElementById('birdObstacle');
  spaceCraft = document.getElementById('spaceCraft');
  let birdTop = birdObstacle.style.top.replace('px', '');
  setInterval(() => {
    birdObstacle.setAttribute('style', makeAttributeBird(left, birdTop));
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

const initialize = function() {
  let spaceCraftImage1 = document.getElementById('spaceCraft');
  spaceCraftImage1.src = '/images/spaceship_2.png';
};

window.onload = initialize();
