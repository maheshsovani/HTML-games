let setfocustotext = function() {
  document.getElementById('usrip').focus();
};

let textCheck = function() {
  let x = document.getElementById('usrip');
  let myip = document.getElementById('para');
  if (x.value == myip.textContent) {
    alert('hello you are right');
  }
  alert('hello you are wrong');
};

const checkAccuracy = function() {
  let correctWords = 0;
  let userText = document.getElementById('usrip').value.split(' ');

  let originalText = document.getElementById('para').textContent.split(' ');

  for (let i = 0; i < originalText.length; i++) {
    if (userText[i] == originalText[i]) {
      correctWords += 1;
    }
  }
  let accuracy = (correctWords / originalText.length) * 100;
  alert(Math.floor(accuracy));
};

const firstlevel = function() {
  let para = document.getElementById('para');
  para.innerText =
    'this lesson will teach you the keys to became a typing master. on this lesson you will learn the three basic rules you should always reme';
};
const secondlevel = function() {
  let para = document.getElementById('para');
  para.innerText =
    'At the heart of Typing Tournament Online is a vast bank of carefully controlled, precisely Sequenced Text Resources that have been designed to reinforce the learning of the key strokes, build muscle memory and engage the learner.';
};
const thirdlevel = function() {
  let para = document.getElementById('para');
  para.innerText =
    'We have adopted the stylistic convention of using a single space between sentences as it is our view that the former convention of double-spacing sentences in typewritten material has been superseded in modern word-processing and publishing usage by the single space.';
};
const fourthlevel = function() {
  let para = document.getElementById('para');
  para.innerText =
    'The content of Typing Tournament Online draws from the Sequenced Text Resource and is divided into 16 Levels, with accompanying Drills, Games and Tests Each Level introduces a new set of Focus Keys. An animated demonstration of the location and fingering of the new keys is followed by an interactive exercise. Level Exercises use only the Focus Keys, while Drills, Games and Tests, though prioritising the Focus Keys, integrate them with previously learned material in realistic text-type environments.';
};
const fifthlevel = function() {
  let para = document.getElementById('para');
  para.innerText =
    'The Multiple Progressions Model means that all users access the same sets of content for each of the 16 game environments. However, by choosing different speed and accuracy goals, they select different rates of progress. So user 1, choosing the Speed Goal E of reaching 48 wpm in the 16 lessons, will need to complete the Level 7 Test at 27 wpm, whereas Speed Goal A user 2 needs to do the same Test at only 12 wpm. And a user who finds the demands of the later environments too difficult at Speed Goal E can drop down to a lower Speed Goal until they develop the requisite skills rather than being forced to go backwards and becoming bored or completely abandoning their objectives.';
};
