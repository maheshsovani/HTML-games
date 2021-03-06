const getElement = function(id) {
  return document.getElementById(id);
};

const checkCommand = function(event) {
  if (event.key == 'Meta') {
    document.location.reload();
  }
};

const setfocustotext = function() {
  getElement('usrip').focus();
};

const setInnerText = function(id, text) {
  getElement(id).innerText = text;
};

const checkAccuracy = function() {
  let userText = getElement('usrip').value.split(' ');
  let originalText = getElement('para').textContent.split(' ');
  let accuracy = compareTexts(userText, originalText);
  if (userText.length == originalText.length) {
    getElement('accuracyDiv').innerText =
      'congratulations you have cleared this level' +
      compareTexts(userText, originalText);
    clearInterval(typingOverId);
  }
  setInnerText('accuracyDiv', accuracy + ':' + Math.floor(accuracy));
};

const isNotEmpty = function(text) {
  return text.length != 0;
};

const compareTexts = function(text1, text2) {
  let correctWords = 0;
  let accuracy;

  for (let i = 0; i < text1.length; i++) {
    if (text1[i] == text2[i]) {
      correctWords += 1;
    }
    accuracy = (correctWords / text1.length) * 100;
  }
  return accuracy;
};

const displayTime = function(seconds) {
  typingOverId = setInterval(() => {
    seconds -= 1;
    let minutes = Math.floor(seconds / 60);
    let second = seconds % 60;
    setInnerText('timer', 'Time left -' + minutes + ':' + second);
    if (minutes < 0) {
      setInnerText('timer', 'Times up try again');
    }
  }, 1000);
};

const getContent = function(level) {
  let content = {
    one: firstlevelText,
    two: secondlevelText,
    three: thirdlevelText,
    four: fourthlevelText,
    five: fifthlevelText
  };
  return content[level];
};

const setInnerContent = function(level) {
  getElement('para').innerText = getContent(level);
};

const firstlevelText = 'this lesson';
// 'this lesson will teach you the keys to became a typing master. on this lesson you will learn the three basic rules you should always reme';

const secondlevelText =
  'At the heart of Typing Tournament Online is a vast bank of carefully controlled, precisely Sequenced Text Resources that have been designed to reinforce the learning of the key strokes, build muscle memory and engage the learner.';

const thirdlevelText =
  'We have adopted the stylistic convention of using a single space between sentences as it is our view that the former convention of double-spacing sentences in typewritten material has been superseded in modern word-processing and publishing usage by the single space.';

const fourthlevelText =
  'The content of Typing Tournament Online draws from the Sequenced Text Resource and is divided into 16 Levels, with accompanying Drills, Games and Tests Each Level introduces a new set of Focus Keys. An animated demonstration of the location and fingering of the new keys is followed by an interactive exercise. Level Exercises use only the Focus Keys, while Drills, Games and Tests, though prioritising the Focus Keys, integrate them with previously learned material in realistic text-type environments.';

const fifthlevelText =
  'The Multiple Progressions Model means that all users access the same sets of content for each of the 16 game environments. However, by choosing different speed and accuracy goals, they select different rates of progress. So user 1, choosing the Speed Goal E of reaching 48 wpm in the 16 lessons, will need to complete the Level 7 Test at 27 wpm, whereas Speed Goal A user 2 needs to do the same Test at only 12 wpm. And a user who finds the demands of the later environments too difficult at Speed Goal E can drop down to a lower Speed Goal until they develop the requisite skills rather than being forced to go backwards and becoming bored or completely abandoning their objectives.';
